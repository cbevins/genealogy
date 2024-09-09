export function timelineGxml(geom, events, isUpper=true) {
    const lines = 4
    const fontSize = 3 * geom.fontSize
    const ybase = isUpper ? geom.timelineHt : 0.8 * fontSize
    const ystep = isUpper ? -fontSize : fontSize
    const yline = []
    for(let i=0; i<lines; i++) yline.push(ybase + i * ystep)

    const timeline = {el: 'svg', width: geom.fullWd, height: geom.timelineHt, els:[
        {el: 'rect', x: 0, y: 0, width: geom.fullWd, height: geom.timelineHt,
            fill: 'gray', stroke: 'black', 'stroke-width': 2}]}
    
    // Year labels
    for (let year = geom.yearMin; year<=geom.yearMax; year+=geom.yearsPerTic) {
        const x = geom.yearX(year)
        timeline.els.push({el: 'text', x: x, y: yline[0], 'text-anchor': 'middle',
            'font-size': fontSize, 'font-weight': 'bold',
            els: [{el: 'inner', content: year.toString()}]})
    }

    // Event labels
    let atLine = 1
    for (let i=0; i<events.length; i++) {
        const event = events[i]
        const fromYear = event.from[0]
        const thruYear = event.thru ? event.thru[0] : fromYear
        if(fromYear >= geom.yearMin && thruYear <= geom.yearMax) {
            const x1 = geom.yearX(fromYear)
            const x2 = geom.yearX(thruYear)
            const xmid = (x1 + x2) / 2
            const y = yline[atLine]
            const y1a = isUpper ? y : y - 0.8 * fontSize
            const y2a = isUpper ? yline[0] - 25 : 25
            const d = `M ${x1} ${y2a} L ${x1} ${y1a} L ${x2} ${y1a} L ${x2} ${y2a}`
            timeline.els.push({el: 'path', d: d,
                stroke: "red",
                fill: "none",
                'stroke-opacity': 0.6,
                'stroke-width': 0.5 * geom.fontSize,
                'marker-start': "url(#arrowhead)",
                'marker-end': "url(#arrowhead)"
            })
            timeline.els.push({el: 'text',
                x: xmid,
                y: y,
                'text-anchor': event.align,
                'font-family': "sans-serif",
                'font-weight': "lighter",
                'font-size': 3 * geom.fontSize,
                els: [{el: 'inner', content: event.label}]
            })
            atLine = (atLine >= lines) ? 1 : atLine+1
        }
    }
    return timeline
}
