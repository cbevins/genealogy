
/**
 * Creates a new scene (svg element) into which other grphical elements are placed.
 * The entire scene may then be placed, scaled, and rotated into a parent scene.
 * @param {number} width 
 * @param {number} height 
 * @param {string} bg Background color 
 * @returns  A new {el} object representing the scene
 */
export function beginScene(width, height, bg='none') {
    return {el: 'svg', width: width, height: height, style: `background: ${bg}`, els: []}
}

/**
 * Adds a 'child' element into the 'parent' scene
 * Note that cx,cy are child's *center* coordinates in the parent's system
 * @param {object} child Reference to the {el} of the child element
 * @param {object} parent Reference to the {el} of the parent scene
 * @param {number} cx Location in the parent where the child's y midline is placed
 * @param {number} cy Location in the parent where the child's x  midline is placed
 * @param {number} r Child element rotation about its center
 * @param {number} s Child elements scale factor
 */
export function add(child, parent, cx, cy, r=0, s=1) {
    // Ensure every el has x, y, cx, cy, width, height props
    child.cx = cx
    child.cy = cy
    if (child.el === 'circle') {
        child.width = child.rx ? child.rx : child.r
        child.height = child.ry ? child.ry : child.r
        console.log(cx, cy)
        child.x = child.cx - 0.5 * child.width
        child.y = child.cy - 0.5 * child.height
    } else if (child.el === 'text') {
        child.x = cx
        child.y = cy
    } else {
        child.x = cx - 0.5 * child.width
        child.y = cy - 0.5 * child.height
    }
    // this rotates around the child's center point
    const tx = (child.cx - s * child.cx) / s
    const ty = (child.cy - s * child.cy) / s
    child.transform = `rotate(${r}, ${child.cx}, ${child.cy})`
        + ` scale(${s})`
        + ` translate(${tx}, ${ty}) `
    
    parent.els.push(child)

    // add a center point marker on the child for now
    parent.els.push({el: 'circle', cx: child.cx, cy: child.cy, r: 5, fill: 'red'})
}

/**
 * Convenience function to create a 'text' {el} for the scene
     * @param {string} content  Text content
     * @param {string} anchor "middle", "start", or "end"
     * @param {number} leng Text content display length (estimated if omitted)
     * @returns A new text {el} object
     */
export function text(content, anchor="middle", leng=0) {
    if (! leng ) leng = 7 * content.length
    return {el: 'text', x: 0, y: 0, 'text-anchor': anchor, textLength: leng,
        els: [{el: 'inner', content: content}]}
}
