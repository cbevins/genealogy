// Flag nested transforms
import {nest, nestMid, nestTl, register, registerCenters, textEl } from './gxmlSvg.js'
import { belgium, canada, england, france, germany, ireland, netherlands,
    norway, scotland, sweden, unknown, wales, usa } from './svgFlags.js'
import { flagDefsGxml } from '$lib'

export function nestedFlagsGxml() {
    const stage = {el: 'svg', width: 700, height: 500, style: 'background: grey', els:[]}
    const flagFra = france(200,100)
    const flagEng = england(200,100)
    const flagUsa = usa(200,100)
    nestMid(flagFra, flagEng, 100, 50, 0.5, 45)
    nestMid(flagEng, flagUsa, 100, 50, 0.5, 45)
    nestMid(flagUsa, stage, 350, 250, 2, -15)
    nestTl(scotland(200,100), stage, 50, 10, 0.75, 45) 
    
    // Add flag defs (these are all preset at 100x100)
    stage.els.push(flagDefsGxml())
    // make sure to add 'width' and 'height' to the 'use'
    const use = {el: 'use', href: '#USA', x: 0, y: 0, width: 100, height: 100,
        filter: "url(#flag-lighting)", 'clip-path': "url(#flag-clipper)"}
    nestMid(use, stage, 350, 50, 0.5, 45)

    nest(belgium(200,100), 0, 0, stage, 0, 0, 0.5)
    nest(ireland(200,100), 200, 0, stage, 700, 0, 0.5)
    nest(netherlands(200,100), 200, 100, stage, 700, 500, 0.5)
    nest(norway(200,100), 0, 100, stage, 0, 500, 0.5)
    nest(canada(200,100), 0, 0, stage, 0, 250, 0.5)

    //-----------------------------------------------------------
    // USA rosette with no center
    for (let degrees=0; degrees<359; degrees+=45) {
        nest(usa(200,100), 0, 0, stage, 350, 400, 0.5, degrees)
    }
    // Germany rosette with 20 pixel center
    for (let degrees=0; degrees<359; degrees+=45) {
        nest(germany(200,100), -20, -20, stage, 550, 300, 0.5, degrees)
    }
    return stage
}