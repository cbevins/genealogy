
// Example of how to creates an <svg> with the flag pin defs
export function flagPinsGxml(w=200, h=400) {
    const table = {el: 'svg', width: w, height: h, style: 'background: grey',
        els:[flagPinDefsGxml()]}
    // @ts-ignore
    table.els.push(flagPinGxml('#flag-usa', 0, 0))
    return table
}
