/**
 * Lineage Train Route Chart
 */
import { fit, nest, nestMid, textEl } from '$lib'
import { flagPinDefsGxml } from './flagPinDefsGxml.js'
import { flagPinGxml } from './flagPinGxml.js'
import { trainTracksGxml } from './trainTracksGxml.js'

function ctext(x, y, size, content) { return text(x, y, size, content, 'middle') }

function ltext(x, y, size, content) { return text(x, y, size, content, 'start') }

function text(x, y, size, content, anchor) {
    return {el: 'text', x: x, y: y, 'text-anchor': anchor, 'font-size': size,
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

    const chart = {el: 'svg',
            width: geom.fullWd, height: geom.chartHt, els: [
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.chartHt,
            fill: 'white', stroke: 'black'}]}
        
    const lower = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'yellow', stroke: 'black'}]}

    nest(upper, 0, 0, content, 0, geom.upperY)
    nest(chart, 0, 0, content, 0, geom.chartY)
    nest(lower, 0, 0, content, 0, geom.lowerY)

    // grid line template
    const line = {el: 'line', stroke: 'red', 'stroke-width': 1, els: []}
    for (let year = geom.yearMin; year<=geom.yearMax; year+=geom.yearsPerTic) {
        const x = geom.yearX(year)
        chart.els.push({...line, x1: x, y1: 0, x2: x, y2: geom.fullHt})
        chart.els.push(ctext(x, geom.rowHt, 64, year.toString()))
    }
    // 2: TrainTracks
    const trackWidth = 16
    for(let i=1; i<geom.nodes.length; i++) {
        const node = geom.nodes[i]
        const color = geom.color(node)
        if (node.child) {
            const path = trackPath(geom, node.x, node.y, node.child.x, node.child.y)
            chart.els.push(trainTracksGxml(path, trackWidth, color))
        }
    }

    // Each node has {channel, birthCountry, birthState, birthYear, label, person} properties
    for (let i=0; i<geom.nodes.length; i++) {
        const node = geom.nodes[i]
        const x = node.x
        const y = node.y
        chart.els.push({el: 'circle', cx: x, cy: y, r: geom.radius, fill: 'none', stroke: 'black', 'stroke-width': 2})
        chart.els.push(flagPinGxml(node.birthCountry, x-geom.radius, y-geom.radius))

        chart.els.push(ctext(x, y, 16, 'y:'+node.birthYear.toString()))
        chart.els.push(ctext(x, y+24, 16, 'chan:'+node.channel.toString()))
        chart.els.push(ltext(x+geom.radius, y+8, 16, node.label))
    }
    return content
}
