export class SvgElement {
    constructor(type, attributes) {

    }
}

// Returns a new Gxml <g> element that scales and rotates the 'source'
// and translates its center pt to the 'dest' container's x,y.
// Returns reference to the new <g> element.
export function acenter(source, dest, x=0, y=0, s=1, r=0) {
    const xc = x - s * 0.5 * source.width
    const yc = y - s * 0.5 * source.height
    const g = {el: 'g',
        transform: `rotate(${r}, ${x}, ${y}) translate(${xc}, ${yc}) scale(${s})`,
        els: [source]}
    dest.els.push(g)
}
export function xcenter(sourceEl, destEl, destX=0, destY=0, scale=1, degrees=0) {
    const sourceX = 0.5 * sourceEl.width
    const sourceY =  0.5 * sourceEl.height
    return pin(sourceEl, sourceX, sourceY, destEl, destX, destY, scale, degrees)
}

// Returns a new Gxml <g> element that scales and rotates the 'el'
// and translates its top-left corner to its parent container's x, y coordinates
// Returns reference to the new <g> element.
export function xplace(source, dest, x=0, y=0, s=1, r=0) {
    const g = {el: 'g',
        transform: `rotate(${r}, ${x}, ${y}) translate(${x}, ${y}) scale(${s})`,
        els: [source]}
    dest.els.push(g)
}

// Nests the sourceEl inside the destEl, pinning the sourceEl's [x,y] point
// over the destEl's [x,y] point, then scaling and rotating the sourceEl.
// Returns a reference to the new <g> element that (1) contains the
// sourceEl, and (2) is nested inside the destEl.
export function pin(sourceEl, sourceX, sourceY,
        destEl, destX=0, destY=0, scale=1, degrees=0) {
    const xc = destX - scale * sourceX
    const yc = destY - scale * sourceY
    const g = {el: 'g',
        transform: `rotate(${degrees}, ${destX}, ${destY}) translate(${xc}, ${yc}) scale(${scale})`,
        els: [sourceEl]}
    destEl.els.push(g)
}

