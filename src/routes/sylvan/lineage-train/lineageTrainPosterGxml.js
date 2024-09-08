// lineageTrainPosterGxml.js - Lineage Train Route Poster Gxml
import { fit } from '$lib'
import { lineageTrainChartGxml } from './lineageTrainChartGxml.js'

/**
 * Defines a 'poster' with header, footer, left and right regions,
 * and a central 'content region into which the lineage train chart is fitted.
 * 
 * @param {object} geom Lineage chart geometry
 * @param {string} id Prefix for all element ids
 * @returns Gxml <svg> element
 */
export function lineageTrainPosterGxml(geom, id='lineage') {
    // preset poster dimensions
    const w = 8500      // Poster page width
    const t = 100       // Height of poster's top (header) region
    const b = 100       // Height of poster's bottom (footer) region
    const l = 100       // Width of poster's left region
    const r = 100       // Width of poster's right region
    
    // Determine poster's full height when the content must fit to the page width
    const cw = w - l - r            // poster content region width
    const scale = cw / geom.fullWd  // width fit scale factor
    const ch = scale * geom.fullHt  // poster content region height
    const h = t + ch + b            // poster full ht
    // console.log('geom wd', geom.fullWd, 'ht', geom.fullHt,
    //     'content wd', cw, 'ht', ch,
    //     'poster wd', w, 'ht', h) 

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

    const chart = lineageTrainChartGxml(geom)
    fit(chart, contentRegion, 'width')
    svg.els = [head, foot, left, right, contentRegion, border]
    return svg
}
