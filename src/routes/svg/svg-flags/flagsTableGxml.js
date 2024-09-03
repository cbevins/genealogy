// Sandbox
// Simple table of flags, 4 flags per row
import {nestTl } from '$lib'
import { flagMethods } from './flagsGxml.js'
export function flagsTableGxml(w=100, h=50) {
    const pad = 50
    const width = 4 * (pad + w) + pad
    const height = (Math.trunc(flagMethods.length/4)+1) * (pad + h) + pad
    const table = {el: 'svg', width: width, height: height, style: 'background: grey', els:[]}
    for (let i=0; i<flagMethods.length; i++) {
        const row = Math.trunc(i/4)
        const col = i % 4
        const flag = flagMethods[i].method(w,h)
        nestTl(flag, table, pad + col*(pad + w), pad + row*(pad + h))
    }
    return table
}
