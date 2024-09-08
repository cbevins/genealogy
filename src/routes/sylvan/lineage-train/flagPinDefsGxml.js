// $lib candidate
// Function to produce Gxml <svg> elements defining flag pin images
// from flagsGxml.js functions
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
    const tpath1 = {el: 'path', id: 'text-path-lower', d: 'M 2 45 A 45 45 0 1 0 98 45'}
    const tpath2 = {el: 'path', id: 'text-path-upper', d: 'M 5 75 A 45 45 0 1 1 95 75'}

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
