// Adds subject and siblings
import { flagPinGxml } from './flagPinGxml.js'
import { trainStationGxml } from './trainStationGxml.js'
import { trainTracksGxml } from './trainTracksGxml.js'

export function subjectGxml(geom, trackWidth) {
    const nodes = geom.nodes
    // First get siblings and their birth ranges
    const subject = nodes[0]
    const children = subject.mother.person.children()
    let yearMin = 9999
    let yearMax = 0
    let subjectIdx = 0
    for(let i=0; i<children.length; i++) {
        const child = children[i]
        yearMin = Math.min(yearMin, child.birthYear())
        yearMax = Math.max(yearMax, child.birthYear())
        if (child === nodes[0].person) subjectIdx = i
    }

    // Since children[] is an array of *Person*s, not *node*s,
    // we need to assign x-y coordinates and birth country
    const offset = geom.radius
    
    const els = []
    for(let i=0; i<children.length; i++) {
        const child = children[i]
        const birthYear = child.birthYear()
        let birthPlace = child.birthPlace().text()
        const x1 = geom.yearX(birthYear)

        let endYear = child.deathYear()
        endYear = endYear ? endYear : geom.yearMax
        const x2 = geom.yearX(endYear)

        const y = subject.y + (i - subjectIdx) * geom.chanHt
        
        // train tracks
        const color = child.isFemale() ? geom.femaleColor : geom.maleColor
        const path = `M ${subject.x} ${y+offset} L ${x2} ${y+offset}`
        els.push(trainTracksGxml(path, trackWidth, color))

        // train names and signage
        els.push({el: 'text',
            x: x1 + 1.5 * geom.radius,
            y: y - 1.5 * geom.fontSize + geom.chanHt / 2,
            'text-anchor': "start",
            'font-family': "sans-serif",
            'font-weight': "bold",
            'font-size': 1.5 * geom.fontSize,
            els: [{el: 'inner', content: child.fullName()}]
        })

        els.push({el: 'text',
            x: x1 + 1.5 * geom.radius,
            y: y + geom.fontSize + geom.chanHt / 2,
            'text-anchor': 'start',
            'font-family': "sans-serif",
            'font-weight': "lighter",
            'font-size': 1.2 * geom.fontSize,
            els: [{el: 'inner', content: birthPlace}]
        })
    
        // train stations
        const fake = {x: x1, y: y+geom.radius, birthCountry: child.birthCountry()}
        els.push(trainStationGxml(fake, geom, color, birthYear.toString(), 'Sibling'))
    }
    return els
}
