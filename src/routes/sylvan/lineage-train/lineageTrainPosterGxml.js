// lineageTrainPosterGxml.js - Lineage Train Route Poster Gxml
import { fit } from '$lib'
import { lineageTrainChartGxml } from './lineageTrainChartGxml.js'
import { trainTracksGxml } from './trainTracksGxml.js'

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
    const w = 8500      // Poster full sheet width
    const t = 200       // Height of poster's top (header) region
    const b = 100       // Height of poster's bottom (footer) region
    const l = 0       // Width of poster's left region
    const r = 0       // Width of poster's right region
    const m = 40        // Width of poster's margin (border) region

    // Determine poster's full height when the content must fit to the page width
    const cw = w - l - r - 2*m      // poster content region width
    const scale = cw / geom.fullWd  // width fit scale factor
    const ch = scale * geom.fullHt  // poster content region height
    const h = t + ch + b + 2*m      // poster full ht
    // console.log('geom wd', geom.fullWd, 'ht', geom.fullHt,
    //     'content wd', cw, 'ht', ch,
    //     'poster wd', w, 'ht', h) 

    const svg = {el: 'svg', id: id+'-svg', width: w, height: h,
        style: "background: white", els: []}

    const border = borderGxml(w, h, 40)
        
    const head = {el: 'rect', id: id+'-poster-header',
        x: m, y: m, width: w-2*m, height: t, fill:"cyan", els: []}

    const foot = {el: 'rect', id: id+'-poster-footer',
        x: m, y: h-b-m, width: w-2*m, height: b, fill:"cyan", els: []}

    const left = {el: 'rect', id: id+'-poster-left',
        x: m, y: t+m, width: l, height: h-t-b-2*m, fill:"magenta", els: []}
    
    const right = {el: 'rect', id: id+'-poster-right',
        x: w-r-m, y: t+m, width: r, height: h-t-b-2*m, fill:"magenta", els: []}

    const contentRegion = {el: 'svg', x: m+l, y: m+t, width: cw, height: ch,
        id: id+'-poster-content', style: 'background: "white"', els: []}

    const chart = lineageTrainChartGxml(geom)
    fit(chart, contentRegion, 'width')
    svg.els = [head, foot, left, right, contentRegion, border]
    return svg
}

export function borderGxml(sheetWd, sheetHt, borderWd) {
    const trackWd = 0.8 * borderWd
    const x1 = trackWd / 2
    const y1 = trackWd / 2
    const x2 = x1 + sheetWd - trackWd
    const y2 = y1 + sheetHt - trackWd
    const r = 2 * trackWd
    const path = `M ${x1} ${y2-r} `
        + `L ${x1} ${y1+r} A ${r} ${r} 0 0 1 ${x1+r} ${y1} `
        + `L ${x2-r} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y1+r} `
        + `L ${x2} ${y2-r} A ${r} ${r} 0 0 1 ${x2-r} ${y2} `
        + `L ${x1+r} ${y2} A ${r} ${r} 0 0 1 ${x1} ${y2-r} `
    return trainTracksGxml(path, trackWd, 'black')
}
