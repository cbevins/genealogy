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
    // preset poster dimensions
    const w = 8500      // page width
    const t = 100       // Height of top (header) region
    const b = 100       // Height of bottom (footer) region
    const l = 100       // Width of left region
    const r = 100       // width of right region
    
    // Determine poster full height when the content must fit to the page width
    const cw = w - l - r            // poster content region width
    const scale = cw / geom.fullWd  // width fit scale factor
    const ch = scale * geom.fullHt  // poster content region height
    const h = t + ch + b            // poster full ht
    console.log('geom wd', geom.fullWd, 'ht', geom.fullHt,
        'content wd', cw, 'ht', ch,
        'poster wd', w, 'ht', h) 

    const svg = {el: 'svg', id: id+'-svg', width: w, height: h,
        style: "background: green", els: []}

    const border = {el: 'path',  id: id+'-poster-border',
        d: `M 0 0 H ${w} V ${h} H 0 V 0`,
        fill: 'none', stroke: "black",  'stroke-width': 40, els: []}
    
    const head = {el: 'rect', id: id+'-poster-header',
        x: 0, y: 0, width: w, height: t, fill:"cyan", els: []}

    const foot = {el: 'rect', id: id+'-poster-footer',
        x: 0, y: h-b, width: w, height: b, fill:"red", els: []}

    const left = {el: 'rect', id: id+'-poster-left',
        x: 0, y: t, width: l, height: h-t-b, fill:"magenta", els: []}
    
    const right = {el: 'rect', id: id+'-poster-right',
        x: w-r, y: t, width: r, height: h-t-b, fill:"magenta", els: []}

    const contentRegion = {el: 'svg', x: l, y: t, width: cw, height: ch,
        id: id+'-poster-content', style: 'background: "green"', els: []}

    const content = posterContent(geom)
    fit(content, contentRegion, 'width')
    svg.els = [head, foot, left, right, contentRegion, border]
    return svg
}

function ctext(x, y, size, content) { return text(x, y, size, content, 'middle') }

function ltext(x, y, size, content) { return text(x, y, size, content, 'start') }

function text(x, y, size, content, anchor) {
    return {el: 'text', x: x, y: y, 'text-anchor': anchor, 'font-size': size,
        els: [{el: 'inner', content: content}]}
}

// Create Gxml for the content using its on user space based on geom
function posterContent(geom) {
    const content = {el: 'svg', width: geom.fullWd, height: geom.fullHt,
        els: []}

    const upper = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'yellow', stroke: 'black'}]}

    const chart = {el: 'svg',
            width: geom.fullWd, height: geom.chartHt, els: [
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.chartHt,
            fill: 'white', stroke: 'black'}]}
        
    const lower = {el: 'svg',
        width: geom.fullWd, height: geom.timelineHt, els:[
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
