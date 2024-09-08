/**
 * Lineage Train Route Chart
 */
import { nest } from '$lib'
import { flagPinDefsGxml } from './flagPinDefsGxml.js'
import { flagPinGxml } from './flagPinGxml.js'
import { subjectGxml } from './subjectGxml.js'
import { trackNameGxml } from './trackNameGxml.js'
import { trainStationGxml } from './trainStationGxml.js'
import { trainTracksGxml } from './trainTracksGxml.js'

function ctext(x, y, size, content) { return text(x, y, size, content, 'middle') }

function gen(node) {
    const gen = node.gen
    const female = node.person.isFemale()
    const p = female ? 'M' : 'F'
    if (gen === 0) return 'Subject'
    else if (gen === 1) return female ? 'Mother' : 'Father'
    else if (gen === 2) return female ? 'Grand Mother' : 'Grand Father'
    else if (gen === 3) return '1st GG' + p
    else if (gen === 4) return '2nd GG' + p
    else if (gen === 5) return '3rd GG' + p
    return `${gen-2}th GG` + p
}

function ltext(x, y, size, content) { return text(x, y, size, content, 'start') }

function text(x, y, size, content, anchor) {
    return {el: 'text', x: x, y: y, 'text-anchor': anchor,
        'font-size': size, 'font-weight': 'bold',
        els: [{el: 'inner', content: content}]}
}

function trackPath(geom, x1, y1, x2, y2) {
    const r = geom.radius / 2
    if (y1 === y2) {
        return `M ${x1} ${y1} L ${x2-r} ${y1} L ${x2} ${y2}`
    } else if (y1 > y2) {
        return `M ${x1} ${y1} L ${x2-r} ${y1} A ${r} ${r} 0 0 0 ${x2} ${y1-r} L ${x2} ${y2}`
    } else {
        return `M ${x1} ${y1} L ${x2-r} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y1+r} L ${x2} ${y2}`
    }
}

// Create Gxml for the content using its on user space based on geom
export function lineageTrainChartGxml(geom) {
    const content = {el: 'svg', width: geom.fullWd, height: geom.fullHt,
        els: []}
    // Add flag defs (these are all preset at 100x100)
    content.els.push(flagPinDefsGxml())

    const upper = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'yellow', stroke: 'black'}]}
    nest(upper, 0, 0, content, 0, geom.upperY)

    const chart = {el: 'svg',
            width: geom.fullWd, height: geom.chartHt, els: [
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.chartHt,
            fill: 'white', stroke: 'black'}]}
    nest(chart, 0, 0, content, 0, geom.chartY)
        
    const lower = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'yellow', stroke: 'black'}]}
    nest(lower, 0, 0, content, 0, geom.lowerY)

    // 1: Chart decade lines
    const line = {el: 'line', stroke: 'gray', 'stroke-width': 4, els: []}
    for (let year = geom.yearMin; year<=geom.yearMax; year+=geom.yearsPerTic) {
        const x = geom.yearX(year)
        chart.els.push({...line, x1: x, y1: 0, x2: x, y2: geom.fullHt})
        chart.els.push(ctext(x, geom.rowHt, 64, year.toString()))
    }

    // 2: Chart train tracks
    const trackWidth = 16
    for(let i=1; i<geom.nodes.length; i++) {
        const node = geom.nodes[i]
        const color = geom.color(node)
        if (node.child) {
            const path = trackPath(geom, node.x, node.y, node.child.x, node.child.y)
            chart.els.push(trainTracksGxml(path, trackWidth, color))
        }
    }

    // 3: Birth year flag pins, name
    // Each node has {channel, birthCountry, birthState, birthYear, label, person} properties
    for (let i=1; i<geom.nodes.length; i++) {
        const node = geom.nodes[i]
        chart.els.push(trainStationGxml(node, geom,
            geom.color(node), node.birthYear.toString(), gen(node)))
        chart.els.push(trackNameGxml(node, trackWidth, geom.fontSize))
    }
    
    // 4: Special handling for subject and siblings
    chart.els.push(subjectGxml(geom, trackWidth))
    return content
}
