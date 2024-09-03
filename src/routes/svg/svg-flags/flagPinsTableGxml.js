// Sandbox
// Simple table of flag pins
import { nestMid, nestTl, textEl } from '$lib'
import { flagPinDefsGxml, flagPinGxml } from './flagPinsGxml.js'

const flags = ['belgium', 'canada', 'england', 'france', 'germany', 'ireland', 'netherlands',
    'norway', 'scotland', 'sweden', 'unknown', 'usa',  'wales']
    
export function flagPinsTableGxml(w=100, h=50) {
    const pad = 50
    const width = 4 * (pad + w) + pad
    const height = (Math.trunc(flags.length/4)+1) * (pad + h) + pad
    const table = {el: 'svg', width: width, height: height, style: 'background: grey',
        els:[flagPinDefsGxml()]}
    for (let i=0; i<flags.length; i++) {
        const row = Math.trunc(i/4)
        const col = i % 4
        const flag = flagPinGxml(`#flag-${flags[i]}`)
        // console.log(flag.id, i, row, col)
        nestTl(flag, table, pad + col*(pad + w), pad + row*(pad + h))
    }
    return table
}
    
// Returns a Gxml that can be nested or placed somewhere else
export function flagPinsLegendGxml(diam=100) {
    const fontSize = 38
    const r = diam / 2
    const pad = 0.2 * diam
    const width = 4 * diam + pad
    const height = flags.length * (diam+pad) + pad
    const table = {el: 'svg', width: width, height: height, style: 'background: grey',
        els:[flagPinDefsGxml()]}
    for (let i=0; i<flags.length; i++) {
        const cy = pad + r + i * (pad + diam)
        const flag = flagPinGxml(`#flag-${flags[i]}`)
        nestTl(flag, table, pad, i*(pad+diam) + pad)
        // Put a circular border around the pin
        const circ = {el: 'circle', cx: r, cy: r, r: r, fill: 'none', stroke: 'black', 'stroke-width': 2}
        nestMid(circ, table, pad+r, cy)
        // Add the label
        const text = textEl(0, 0, flags[i], 'text-start')
        // @ts-ignore
        text['font-size'] = fontSize
        nestTl(text, table, (2*pad+diam), cy + fontSize/10)
    }
    return table
}
