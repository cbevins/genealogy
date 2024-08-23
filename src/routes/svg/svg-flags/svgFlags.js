import { nest, nestTl, textEl } from '$lib'

export function border(w, h) {
    return {el: 'path', fill: 'none', stroke: 'black', 'stroke-width': 1,
        d: `m0,0 h${w} v${h} h-${w} v-${h}`}
}

export function belgium(w=100, h=100) {
    return {el: 'svg', id: 'flag-belgium', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: '#fdda24'},
        {el: 'rect', x: 0, y: 0, width: "33%", height: "100%", fill: "#000000"},
        {el: 'rect', x: "67%", y: 0, width: "33%", height: "100%", fill: "#ef3340"},
        border(w, h)
    ]}
}

export function canada(w=100, h=100) {
    return {el: 'svg', id: 'flag-canada', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "25%", height: "100%", fill: "red"},
        {el: 'rect', x: "75%", y: 0, width: "25%", height: "100%", fill: "red"},
        border(w, h)
    ]}
}

export function england(w=100, h=100) {
    const wd = 0.2 * Math.min(h, w)
    return {el: 'svg', id: 'flag-england', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "red", 'stroke-width': wd},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "red", 'stroke-width': wd},
        border(w, h)]}
}

export function france(w=100, h=100) {
    return {el: 'svg', id: 'flag-france', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "33%", height: "100%", fill: "#0055a4"},
        {el: 'rect', x: "67%", y: 0, width: "33%", height: "100%", fill: "#ef4135"},
        border(w, h)]}
}

export function germany(w=100, h=100) {
    return {el: 'svg', id: 'flag-germany', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "red"},
        {el: 'rect', x: 0, y: 0, width: "100%", height: "33%", fill: "black"},
        {el: 'rect', x: 0, y: "67%", width: "100%", height: "33%", fill: "#ffcc00"},
        border(w, h)]}
}

export function ireland(w=100, h=100) {
    return {el: 'svg', id: 'flag-ireland', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "33%", height: "100%", fill: "#009a49"},
        {el: 'rect', x: "67%", y: 0, width: "33%", height: "100%", fill: "#ff7900"},
        border(w, h)]}
}

export function netherlands(w=100, h=100) {
    return {el: 'svg', id: 'flag-netherlands', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "100%", height: "33%", fill: "#009a49"},
        {el: 'rect', x: 0, y: "67%", width: "100%", height: "33%", fill: "#ff7900"},
        border(w, h)]}
}

export function norway(w=100, h=100) {
    const lw = Math.min(w, h) * 2 / 22
    return {el: 'svg', id: 'flag-norway', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "#ba0c2f"},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "white", "stroke-width": 2*lw},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "white", "stroke-width": 2*lw},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "#00205b", "stroke-width": lw},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "#00205b", "stroke-width": lw},
        border(w, h)]}
}

export function scotland(w=100, h=100) {
    const lw = Math.min(w, h) * 0.2
    return {el: 'svg', id: 'flag-scotland', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "#005eb8"},
        {el: 'line', x1: 0, y1: 0, x2: "100%", y2: "100%", stroke: "white", "stroke-width": lw},
        {el: 'line', x1: 0, y1: "100%", x2: "100%", y2: "0%", stroke: "white", "stroke-width": lw},
        border(w, h)]}
}

export function sweden(w=100, h=100) {
    const lw = Math.min(w, h) * 0.2
    return {el: 'svg', id: 'flag-sweden', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "#006aa7"},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "#ffcd00", "stroke-width": lw},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "#ffcd00", "stroke-width": lw},
        border(w, h)]}
}

export function unknown(w=100, h=100) {
    return {el: 'svg', id: 'flag-unknown', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "gray"},
        textEl(w/2, h/2, "?"),
        border(w, h)]}
}

export function wales(w=100, h=100) {
    return {el: 'svg', id: 'flag-wales', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "green"},
        {el: 'rect', x: 0, y: 0, width: "100%", height: "50%", fill: "white"},
        border(w, h)]}
}

export function star(fill='white', stroke='black', sw=1) {
    return {el: 'svg', id: 'star', width: 50, height: 50, els: [
        {el: 'path', fill: fill, stroke: stroke, 'stroke-width': sw,
            d: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"}
    ]}
}

// 5 rows of 6 starts and 4 rows of 5 stars
export function usaCanton(w, h) {
    const canton = {el: 'svg', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "blue"},
    ]}

    // Canton star row ht and col width
    const dy = h / 10   // 5 + 4 rows
    const dx = w / 12   // 6 + 5 cols

    // Determine star scale from 50x50
    const scale = Math.min(dx, dy) / 50

    // 5 rows of 6 stars
    let y = -1.5*dy
    for(let row=0; row<5; row++) {
        y += 2*dy   // top edge
        let x = -1.5*dx
        for(let col=0; col<6; col++) {
            x += 2*dx // left edge
            nest(star(), 0, 0, canton, x, y, scale)
        }
    }

    // 4 rows of 5 stars
    y = -1.5*dy/2
    for(let row=0; row<4; row++) {
        y += 2*dy   // top edge
        let x = -dx/2
        for(let col=0; col<5; col++) {
            x += 2*dx // left edge
            nest(star(), 0, 0, canton, x, y, scale)
        }
    }
    return canton
}

export function usa(w=100, h=100) {
    const dy = h / 13
    const flag = {el: 'svg', id: 'flag-usa', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "red"},
    ]}

    // white stripes
    for (let i=0; i<6; i++) {
        const y = 2 * i * dy + dy
        flag.els.push({el: 'rect', x: 0, y: y, width: "100%", height: dy,
            fill: "white", 'stroke-width': 0})
    }
    // blue canton
    nestTl(usaCanton(0.5 * w, 7 * dy), flag, 0, 0)  

    // border
    flag.els.push(border(w, h))
    return flag
}
