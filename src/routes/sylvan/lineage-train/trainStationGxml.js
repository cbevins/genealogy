import { flagPinGxml } from './flagPinGxml.js'

// node = {x:, y:, birthCountry:, }
export function trainStationGxml(node, geom, color, upperText, lowerText) {
    const fontColor = (node.birthCountry === 'Germany') ? 'white' : 'black'

    // Flag pin [x,y] are for the upper-left corner, NOT for the center,
    // so translate it based on the flag pin radius
    const flagPin = flagPinGxml(node.birthCountry,
        node.x - geom.radius, node.y - geom.radius)

    // Birth year on a curved path along inside top of disc
    const upperPath = {el: 'text',
        'text-anchor': 'middle',
        'font-size': 2*geom.fontSize,
        'font-weight': 'bold',
        stroke: fontColor,
        fill: fontColor,
        els: [
            {el: 'textPath', href: '#text-path-upper', startOffset: '50%', els: [ 
                {el: 'inner', content: upperText }
            ]},
        ]
    }

    const lowerPath = {el: 'text',
        'text-anchor': 'middle',
        'font-size': 1.5 * geom.fontSize,
        'font-weight': 'bold',
            els: [
                {el: 'textPath',
                    href: '#text-path-lower', startOffset: '50%', els: [ 
                    {el: 'inner', content: lowerText}
                ]},
        ]}

    const border = {el: 'circle',
        cx: node.x,
        cy: node.y,
        r: geom.radius,
        fill: 'none',
        stroke: color,
        'stroke-width': 6}
        
    flagPin.els.push(upperPath)
    flagPin.els.push(lowerPath)
    return {el: 'g', els: [border, flagPin]}
}