// $lib candidate
/**
 * Returns a Gxml <svg> element defining a circular flag image
 * clipped and lighted from a <defs> flag image with 'id'.
 * Requires that the flagPinDefsGxml.js Gxml element <defs> are loaded into the top-level <svg>.
 * 
 * @param {string} id id (href) of the predefined flag in the <defs> block
 * @param {number} x upper left corner x-coordinate
 * @param {number} y upper left corner y-coordinate
 * @param {number} scale scale
 * @param {number} width Not used
 * @param {number} height Not used
 * @returns A single Gxml JSON object with nested Gxml.
 */
export function flagPinGxml(id, x=0, y=0, scale=1, width=100, height=100) {
    return {el: 'svg', x: x, y: y, width: scale*width, height: scale*height, els: [
        {el: 'g', transform: `scale(${scale}, ${scale})`, els: [
            {el: 'use', x: 0, y: 0,
                href: id,
                filter: "url(#flag-lighting)",
                'clip-path':"url(#flag-clipper)"}]
        }
    ]}
}
