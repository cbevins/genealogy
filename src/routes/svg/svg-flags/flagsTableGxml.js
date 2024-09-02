// Sandbox
// Simple table of flags
import {nestTl } from '$lib'
import { belgium, canada, england, france, germany, ireland, netherlands,
    norway, scotland, sweden, unknown, wales, usa } from './flagsGxml.js'

const flags = [belgium, canada, england, france, germany, ireland, netherlands,
    norway, scotland, sweden, unknown, wales, usa]
    
export function flagsTableGxml(w=100, h=50) {
    const pad = 50
    const width = 4 * (pad + w) + pad
    const height = (Math.trunc(flags.length/4)+1) * (pad + h) + pad
    const table = {el: 'svg', width: width, height: height, style: 'background: grey', els:[]}
    for (let i=0; i<flags.length; i++) {
        const row = Math.trunc(i/4)
        const col = i % 4
        const flag = flags[i](w,h)
        // console.log(flag.id, i, row, col)
        nestTl(flag, table, pad + col*(pad + w), pad + row*(pad + h))
    }
    return table
}
