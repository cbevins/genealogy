import { register, registerCenters, textEl } from '$lib'

export function registeredElementsGxml() {
    const parent = {el: 'svg', x: 0, y: 0, width: 700, height: 500, style: 'background: grey', els:[]}
    const subject = {el: 'rect', x: 100, y: 50, width: 100, height: 50, fill: 'red'}
    const refer = {el: 'rect', x: 300, y: 200, width: 200, height: 100, fill: 'green'}
    
    // Rect manually registered over reference element
    const subject1 = {...subject}
    const refer1 = {...refer}
    register(subject1, 50, 25, refer1, 100, 50)
    parent.els.push(refer1)
    parent.els.push(subject1)

    // Same as above, but also scale and rotate the subject
    const subject2 = {...subject}
    const refer2 = {...refer, x: 50, y: 50}
    register(subject2, 50, 25, refer2, 100, 50, 1.25, 45)
    parent.els.push(refer2)
    parent.els.push(subject2)

    // Rect manually registered over parent SVG
    const subject3 = {...subject}
    register(subject3, 50, 25, parent, 400, 50)
    parent.els.push(subject3)
    
    // Rect programatically centered over reference element
    const refer4 = {...refer, x: 50, y: 350}
    const rect4 = registerCenters({...subject}, refer4)
    const circ4 = registerCenters({el: 'circle', cx: 50, cy: 50, r: 50, fill: 'yellow'},
        refer4, 0.5)
    const text4 = textEl(10, 100, 'Text Element')
    text4['font-size'] = 16
    registerCenters(text4, refer4)
    parent.els.push(refer4)
    parent.els.push(rect4)
    parent.els.push(circ4)
    parent.els.push(text4)
    return parent
}
