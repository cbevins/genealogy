// Returns a new Gxml <g> element that scales and rotates the 'el'
// and translates its center pt to its parent container's x,y.
// Returns reference to the new <g> element.
export function center(el, x=0, y=0, s=1, r=0) {
    const xc = x - s * 0.5 * el.width
    const yc = y - s * 0.5 * el.height
    return {el: 'g',
        transform: `rotate(${r}, ${x}, ${y}) translate(${xc}, ${yc}) scale(${s})`,
        els: [el]}
}

// Returns a new Gxml <g> element that scales and rotates the 'el'
// and translates its top-left corner to its parent container's x, y coordinates
// Returns reference to the new <g> element.
export function place(el, x=0, y=0, s=1, r=0) {
    return {el: 'g',
        transform: `rotate(${r}, ${x}, ${y}) translate(${x}, ${y}) scale(${s})`,
        els: [el]}
}

// Convenience function to create a 'text' el with 'inner' content.
export function textEl(x, y, content, anchor="left") {
    return {el: 'text', x: x, y: y, 'text-anchor': anchor,
        els: [{el: 'inner', content: content}]}
}
