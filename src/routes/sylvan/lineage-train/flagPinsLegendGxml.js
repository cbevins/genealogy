// $lib candidate   
// Returns a Gxml <svg> element of a flag pins legend
// that can be nested inside or placed onto some other image.
import { nestMid, nestTl, textEl } from '$lib'
import { flagMethods } from './flagsGxml.js'
import { flagPinDefsGxml } from './flagPinDefsGxml.js'
import { flagPinGxml } from './flagPinGxml.js'

export function flagPinsLegendGxml(diam=100) {
    const fontSize = 38
    const r = diam / 2
    const pad = 0.2 * diam
    const width = 4 * diam + pad
    const height = flagMethods.length * (diam+pad) + pad
    const table = {el: 'svg', width: width, height: height, style: 'background: grey',
        els:[flagPinDefsGxml()]}
    for (let i=0; i<flagMethods.length; i++) {
        const cy = pad + r + i * (pad + diam)
        const flag = flagPinGxml(flagMethods[i].id)
        nestTl(flag, table, pad, i*(pad+diam) + pad)

        // Put a circular border around the pin
        const circ = {el: 'circle', cx: r, cy: r, r: r, fill: 'none', stroke: 'black', 'stroke-width': 2}
        nestMid(circ, table, pad+r, cy)
        
        // Add the label
        const text = textEl(0, 0, flagMethods[i].label, 'text-start')
        // @ts-ignore
        text['font-size'] = fontSize

        // Set the pin into the table
        nestTl(text, table, (2*pad+diam), cy + fontSize/10)
    }
    return table
}
