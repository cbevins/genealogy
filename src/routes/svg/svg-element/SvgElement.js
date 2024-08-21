let sn = 0  // element serial number

export class SvgElement {
    constructor(type, attributes={}) {
        this.type = type
        this.attributes = attributes
        this.elements = []
        // Private
        this.parent = null
        this.sn = sn++
    }

    add(el, transform=null) {
        // If a transformation is specified, wrap the el in a <g>
        // Also, if center transform, must have a width and height
        if (transform) {
            const x = Object.hasOwn(transform, 'x') ? transform.x : 0
            const y = Object.hasOwn(transform, 'y') ? transform.y : 0
            const s = Object.hasOwn(transform, 'scale') ? transform.scale : 1
            const r = Object.hasOwn(transform, 'deg') ? transform.deg : 0
            const m = (Object.hasOwn(transform, 'method')
                && (transform.method === 'topleft')) ? 'topleft' : 'center'
            const t = (m === 'center') ? center(el, x, y, s, r) : topleft(x, y, s, r)

            const g = new SvgElement('g', {width: el.attributes.width,
                height: el.attributes.height, transform: t})
            g.parent = this
            el.parent = g
            g.elements.push(el)
            this.elements.push(g)
        } else {
            el.parent = this
            this.elements.push(el)
        }
        return this
    }
}

// Returns a transform attribute that scales and rotates an element
// then translates its center pt to the parent's x,y.
// The element *must* have a 'width' and 'height' attribute!
export function center(el, x=0, y=0, s=1, r=0) {
    const xc = x - s * 0.5 * el.attributes.width
    const yc = y - s * 0.5 * el.attributes.height
    return `rotate(${r}, ${x}, ${y}) translate(${xc}, ${yc}) scale(${s})`
}

export function topleft( x=0, y=0, s=1, r=0) {
    return `rotate(${r}, ${x}, ${y}) translate(${x}, ${y}) scale(${s})`
}

/**
 * Creates a new SvgElement, but does *not* position, scale, rotate,
 * or otherwise embed it into a parent SvgElement; add() does that!
 * @param {*} type 
 * @param {*} attributes 
 * @returns Reference to the new SvgElement
 */
export function elDEP(type, attributes) {
    if (type === 'scene') {
        // check for 'width' and 'height' attributes!
        console.log('scene.width', attributes.width, 'scene.height', attributes.height)
        const g = el('g', {id: 'scene-g'})
        g.scene = true

        const svg = el('svg', {id: 'scene-svg', width: attributes.width, height: attributes.height})
        svg.scene = true
        svg.parent = g

        const rect = el('rect', {id: 'scene-rect', x: 0, y: 0, width: '100%', height: '100%', fill: 'green'})
        rect.scene = true
        rect.parent = svg

        svg.elements.push(rect)
        g.elements.push(svg)
        // return the scene's <svg> element so that inner elements
        // are added to the <svg> rather than the scene <g>
        return svg
    }
    return new SvgElement(type, attributes)
}
export function el(type, attributes) {
    return new SvgElement(type, attributes)
}

/**
 * Returns an SVG, HTML, or other XML data structure as a string
 * constructed from a set of nested plain-old JSON objects.
 * 
 * The JSON objects must have the following fields:
 * - el: names the element, such as 'svg', 'g', 'defs', 'rect', 'circle', 'line', 'text', etc
 *      The 'el' field may also be 'inner' for inner content such as within a <text></text> block,
 *      or 'comment' to embed a comment in the structure
 * - els: a (possibly empty) array of references to nexted objects that meet these specifications
 * 
 * See the runGxml.js example for ways to compose the specification data structure.
 * 
 * @param {el|[el]} el  Either a single or array of SvgElement references
 * @param {*} indent The number of spaces to indent each nesting level (change to 0 for no indents)
 * @param {*} eol  The end-of-line character (change to '' for no line breaks)
 * @returns An XML string suitable for writing to an SVG or HTML file or using within a Svelte componewnt.
 */

export function elHtml(el, indent=2, eol='\n', level=0) {
    let xml = ''
    const ar = Array.isArray(el) ? el : [el]
    for(let i=0; i<ar.length; i++) {
        xml += _elHtml(ar[i], indent, eol, level)
    }
    return xml
}

export function _elHtml(el, indent, eol, level=0) {
    // Check for nested arrays of gxml
    if (Array.isArray(el)) return elHtml(el, indent, eol, level)
    if (el.type === 'inner') {
        return (el.attributes.content).padStart(level*indent) + eol
    }
    if (el.type === 'comment') {
        const content = el.attributes.content ? el.attributes.content : ''
        return ''.padStart(level*indent) + `<!-- ${content} -->` + eol
    }
    // Traverse to inner-most element, accumulating nested elements
    let str = ''
    for(let i=0; i<el.elements.length; i++) {
        str += _elHtml(el.elements[i], indent, eol, level+1)
    }
    // Compose opening tag
    let cmd = ''.padStart(level*indent) + `<${el.type}`
    for (const [key, value] of Object.entries(el.attributes)) {
        cmd += ` ${key}="${value}"`
    }
    // Compose content and closing tag
    if (str === '') return cmd + ' />' + eol
    return cmd + '>' + eol + str + ''.padStart(level*indent) + `</${el.type}>` + eol
}
