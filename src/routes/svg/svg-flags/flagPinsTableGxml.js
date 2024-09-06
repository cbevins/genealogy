// Sandbox demo/example function
// Simple table of flag pins, similar to a legend, 4 pins per row
import { nestTl } from '$lib'
import { flagMethods } from './flagsGxml.js'
import { flagPinGxml } from './flagPinGxml.js'
import { flagPinDefsGxml } from './flagPinDefsGxml.js'

export function flagPinsTableGxml(w=100, h=75) {
    const pad = 50
    const width = 4 * (pad + w) + pad
    const height = (Math.trunc(flagMethods.length/4)+1) * (pad + h) + pad
    const table = {el: 'svg', width: width, height: height, style: 'background: grey',
        els:[flagPinDefsGxml()]}
    for (let i=0; i<flagMethods.length; i++) {
        const row = Math.trunc(i/4)
        const col = i % 4
        const flag = flagPinGxml(`#flag-${flagMethods[i].id}`)
        nestTl(flag, table, pad + col*(pad + w), pad + row*(pad + h))
    }
    return table
}
