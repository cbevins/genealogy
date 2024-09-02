// $lib candidate
// Function to produce <svg> flag pin images using flagsGxml.js
import { belgium, canada, england, france, germany, ireland, netherlands,
    norway, scotland, sweden, unknown, wales, usa } from './flagsGxml.js'

// Returns a <defs> el defining all flag pins, clipPaths, and filters.
export function flagPinDefsGxml(w=100, h=100) {
    const clip = {el: 'clipPath', id: "flag-clipper", els: [
        {el: 'circle', cx: w/2, cy: h/2, r: w/2}
    ]}

    // Lighting filter for flag 
    const filter = {el: 'filter', id: 'flag-lighting', els: [
        {el: 'feGaussianBlur', in: "SourceAlpha", stdDeviation: 4, result: "blur1"},
        {el: 'feSpecularLighting', result: "specOut", in: "blur1", specularExponent: 100,
            'lighting-color': "#aaaaaa", els: [
                {el: 'fePointLight', x: 40, y: 40, z: 40}
            ]
        },
        {el: 'feComposite', in: "SourceGraphic", in2: "specOut",
            operator: "arithmetic", k1: 0, k2: 1, k3: 1, k4: 0}
    ]}
    
    // Text paths for flag buttons
    const tpath1 = {el: 'path', id: 'text-path-lower', d: 'M 5 45 A 45 45 0 1 0 95 45'}
    const tpath2 = {el: 'path', id: 'text-path-upper', d: 'M 5 70 A 45 45 0 1 1 95 70'}

    const defs = {el: 'defs', id: 'flag-pins-defs', els: [
        clip, tpath1, tpath2, filter,
        belgium(w,h,0),
        canada(w,h,0),
        england(w,h,0),
        france(w,h,0),
        germany(w,h,0),
        ireland(w,h,0),
        netherlands(w,h,0),
        norway(w,h,0),
        scotland(w,h,0),
        sweden(w,h,0),
        usa(w,h,0),
        wales(w,h,0),
        unknown(w,h,0),
    ]}
    return defs
}

/**
 * Returns a <svg> el defining a circular flag image.
 * Requires that the flagPinDefsGxml.js els are loaded
 * into the top-level <svg>
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
    }]}
}

// Example of how to creates an <svg> with the flag pin defs
export function flagPinsGxml(w=200, h=400) {
    const table = {el: 'svg', width: w, height: h, style: 'background: grey',
        els:[flagPinDefsGxml()]}
    // @ts-ignore
    table.els.push(flagPinGxml('#flag-usa', 0, 0))
    return table
}

// TO DO! - this is from the old implementation
/**
 * @param {number} x
 * @param {number} y
 * @param {number} diam
 */
// export function flagPinsLegendGxml(x, y, diam, scale=1) {
//     const s = scale * diam/100
//     const els = []
//     let row = 0
//     for(const [, country] of Countries.entries()) {
//         if (country.legend) {
//             const href = '#' + country.flag
//             els.push({el: 'g',
//                 transform: `translate(${x}, ${y}) scale(${s})`,
//                 els: [
//                     {el: 'use', x: 0, y: row*120,
//                         href: href,
//                         filter: "url(#flag-lighting)",
//                         'clip-path': "url(#flag-clipper)"
//                     },
//                     {el: 'text', x: 120, y: row*120+60, 'font-size': 48, els: [
//                         {el: 'inner', content: country.label}]
//                     }
//                 ]
//             })
//             row++
//         }
//     }
//     return els
// }
