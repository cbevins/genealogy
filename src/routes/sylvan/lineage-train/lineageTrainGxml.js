/**
 * Lineage Train Route Poster
 */
import { fit, nest, textEl } from '$lib'

/**
 * This defines a 'poster' with header, footer, left and right regions,
 * and a central 'content region into which the contents is fitted.
 * 
 * @param {object} geom Lineage chart geometry
 * @param {string} id Prefix for all element ids
 * @returns Gxml <svg> element
 */
export function lineageTrainGxml(geom, id='lineage') {
    const w = 8500      // page width
    const h = 11000     // page height
    const t = 100       // height of top (header) region
    const b = 100       // Height of bottom (footer) region
    const l = 100       // Width of left region
    const r = 100       // width of righht region

    const svg = {el: 'svg', id: id+'-svg', width: w, height: h,
        style: "background: gray", els: []}

    const border = {el: 'rect',  id: id+'-poster-border',
        x: 0, y: 0, width: w, height: h,
        fill: "white", stroke: "black",  'stroke-width': 4, els: []}
    
    const head = {el: 'rect', id: id+'-poster-header',
        x: 0, y: 0, width: w, height: t, fill:"cyan", els: []}

    const foot = {el: 'rect', id: id+'-poster-footer',
        x: 0, y: h-b, width: w, height: b, fill:"cyan", els: []}

    const left = {el: 'rect', id: id+'-poster-left',
        x: 0, y: t, width: l, height: h-t-b, fill:"magenta", els: []}
    
    const right = {el: 'rect', id: id+'-poster-right',
        x: w-r, y: t, width: r, height: h-t-b, fill:"magenta", els: []}

    const cw = svg.width - left.width - right.width
    const ch = svg.height - head.height - foot.height
    const cx = left.width   // 650
    const cy = head.height  // 900
    const contentRegion = {el: 'svg', x: cx, y: cy, width: cw, height: ch,
        id: id+'-poster-content', style: 'background: "green"', els: []}

    const content = posterContent(geom)

    // the following overlays the original view without any fit ...
    // nest(content, 0, 0, contentRegion, 0, 0)

    // the 'fit' view
    fit(content, contentRegion, 'height')
    // fit(content, contentRegion, 'width')
    svg.els = [border, head, foot, left, right, contentRegion]
    return svg
}

function ctext(x, y, size, content) {
    return {el: 'text', x: x, y: y, 'text-anchor': 'middle', 'font-size': size,
        els: [{el: 'inner', content: content}]}
}

function ltext(x, y, size, content) {
    return {el: 'text', x: x, y: y, 'text-anchor': 'start', 'font-size': size,
        els: [{el: 'inner', content: content}]}
}

function posterContent(geom) {
    const content = {el: 'svg', width: geom.fullWd, height: geom.fullHt, els: []}

    const upper = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'yellow', stroke: 'black'}]}

    const lower = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'yellow', stroke: 'black'}]}

    const chart = {el: 'svg', width: geom.fullWd, height: geom.chartHt, els: [
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.chartHt,
            fill: 'none', stroke: 'black'}]}

    nest(upper, 0, 0, content, 0, 0)
    nest(chart, 0, 0, content, 0, geom.timelineHt)
    nest(lower, 0, 0, content, 0, geom.fullHt - geom.timelineHt)

    // grid line template
    const line = {el: 'line', stroke: 'red', 'stroke-width': 1, els: []}
    for (let year = geom.yearMin; year<=geom.yearMax; year+=geom.yearsPerTic) {
        const x = geom.yearX(year)
        chart.els.push({...line, x1: x, y1: 0, x2: x, y2: geom.fullHt})
        chart.els.push(ctext(x, geom.rowHt, 64, year.toString()))
    }

    // Each node has {channel, birthCountry, birthState, birthYear, label, person} properties
    for (let i=0; i<geom.nodes.length; i++) {
        const node = geom.nodes[i]
        const x = node.x
        const y = node.y
        chart.els.push({el: 'circle', cx: x, cy: y, r: geom.radius, fill: 'none', stroke: 'red', 'stroke-width': 1})
        chart.els.push(ctext(x, y, 16, 'y:'+node.birthYear.toString()))
        chart.els.push(ctext(x, y+24, 16, 'chan:'+node.channel.toString()))
        chart.els.push(ltext(x+geom.radius, y+8, 16, node.label))
    }
    return content
}
