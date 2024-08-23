// Simple table of flags
import {nestTl } from './gxmlSvg.js'
import { belgium, canada, england, france, germany, ireland, netherlands,
    norway, scotland, sweden, unknown, wales, usa } from './svgFlags.js'

export function flagsTableGxml(w=100, h=50) {
    const table = {el: 'svg', width: 700, height: 450, style: 'background: grey', els:[]}
    nestTl(belgium(w, h), table, 50, 50)
    // place(textEl(50, 50, 'Belgium'), table)
    nestTl(canada(w, h), table, 200, 50)
    nestTl(england(w, h), table, 350, 50)
    nestTl(france(w, h), table, 500, 50)
    nestTl(germany(w, h), table, 50, 150)
    nestTl(ireland(w, h), table, 200, 150)
    nestTl(netherlands(w, h), table, 350, 150)
    nestTl(norway(w, h), table, 500, 150)
    nestTl(scotland(w, h), table, 50, 250)
    nestTl(sweden(w, h), table, 200, 250)
    nestTl(unknown(w, h), table, 350, 250)
    nestTl(wales(w, h), table, 500, 250)
    nestTl(usa(w, h), table, 50, 350)
    return table
}