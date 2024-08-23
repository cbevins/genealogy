import { fit, nest, textEl } from "./gxmlSvg"

export function posterGxml() {
    const svg = {el: 'svg', width: 850, height: 1100, style: "background: grey", els: []}

    const border = {el: 'rect',  id: 'poster-border',
        x: 0, y: 0, width: 850, height: 1100,
        fill: "white", stroke: "black",  'stroke-width': 4}
    
    const head = {el: 'rect', id: 'poster-header',
        x: 0, y: 0, width: 850, height: 100, fill:"cyan"}
    
    const foot = {el: 'rect', id: 'poster-footer',
        x: 0, y: 1000, width: 850, height: 100, fill:"cyan"}
    
    const left = {el: 'rect', id: 'poster-left',
        x: 0, y: 100, width: 100, height: 900, fill:"magenta"}
    
    const right = {el: 'rect', id: 'poster-left',
            x: 750, y: 100, width: 100, height: 900, fill:"magenta"}

    const cw = svg.width - left.width - right.width
    const ch = svg.height - head.height - foot.height
    const cx = left.width   // 650
    const cy = head.height  // 900
    const content = {el: 'svg', x: cx, y: cy, width: cw, height: ch,
        style: 'background: "green"', els: []}

    const grid1 = gridGxml(10, 20, 12, 12, 'blue', 'Small Grid')
    const grid2 = gridGxml(10, 20, 120, 120, 'green', 'Large Grid')

    const grid = grid2
    nest(grid, 0, 0, content, 0, 0)
    fit(grid, content, 'height')

    svg.els = [border, head, foot, left, right, content]
    return svg
}

function gridGxml(cols, rows, colWd, rowHt, color, label) {
    const w = cols * colWd
    const h = rows * rowHt 
    const line = {el: 'line', stroke: color, 'stroke-width': 1, els: []}
    const grid = {el: 'svg', width: w, height: h, els: []}
    for (let row=0; row<=rows; row++) {
        const y = row * rowHt
        grid.els.push({...line, x1: 0, y1: y, x2: w, y2: y})
        grid.els.push(textEl(colWd/2, y+rowHt, row.toString()))
    }
    for (let col=0; col<=cols; col++) {
        const x = col * colWd
        grid.els.push({...line, x1: x, y1: 0, x2: x, y2: h})
        grid.els.push(textEl(x+colWd/2, rowHt, col.toString()))
    }
    grid.els.push(textEl(w/2, h/2, label))
    return grid
}