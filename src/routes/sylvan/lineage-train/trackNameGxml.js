function birthPlace(node) {
    const place = node.person.birthPlace()
    // const text = place.text()
    // return text
    return node.person.birthState() + ', ' + node.person.birthCountry()
}

function children(node) {
    let str = ''
    let n = 0
    if (node.person.isFemale()) {
        n = node.person.children().length
        str = (n===1) ? ' (1 known child)' : ` (${n} known children)`
    }
    return str
}

function suffixNoSeq(node) {
    return node.person.nameSuffixNoSeq()
    // let idx = suffix.search("#")
    // return (idx >= 0) ? (suffix.slice(0, idx-1)).trim() : suffix.trim()
}

function name(node) {
    return node? 
        (node.person.namePrefix() + ' '
            + node.person.nameGiven() + ' '
            + node.person.nameSurnames() + ' '
            + suffixNoSeq(node)).trim()
        : ''
}

function life(node) {
    return node ?
        (node.person.lifeSpan() + ' [#' + node.seq + ']')
    : ''
}

export function trackNameGxml(node, trackWidth, fontSize) {
    const els = []
    const xpt = node.child ? (node.x + node.child.x)/2 : node.x + trackWidth
    const anchor = node.child ? 'middle' : 'start'

    els.push({el: 'text',
        x: xpt,
        y: node.y - 1.6 * fontSize - 0.5 * trackWidth,
        'text-anchor': anchor,
        'font-family': "sans-serif",
        'font-weight': "bold",
        'font-size': 2 * fontSize,
        els: [{el: 'inner', content: name(node)}]
    })

    els.push({el: 'text',
        x: xpt,
        y: node.y - 0.2 * fontSize - 0.5 * trackWidth,
        'text-anchor': anchor,
        'font-family': "sans-serif",
        'font-weight': "light",
        'font-size': fontSize,
        els: [{el: 'inner', content: life(node)}]
    })

    els.push({el: 'text',
        x: xpt,
        y: node.y + 1.6 * fontSize,
        'text-anchor': anchor,
        'font-family': "sans-serif",
        'font-weight': "lighter",
        'font-size': 1.2 * fontSize,
        els: [{el: 'inner', content: birthPlace(node)}]
    })
    
    els.push({el: 'text',
        x: xpt,
        y: node.y + 3 * fontSize,
        'text-anchor': anchor,
        'font-family': "sans-serif",
        'font-weight': "lighter",
        'font-size': 1.2 * fontSize,
        els: [{el: 'inner', content: children(node)}]
    })
    return els
}
