<script>
    import H from '$lib/svelte/H.svelte'
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'

    import { gxmlStr } from '$lib'
    import { belgium, canada, england, france, germany, ireland, netherlands,
        norway, scotland, sweden, unknown, wales, usa } from './svgFlags.js'
    import { flagLegendGxml, flagDefsGxml, flagGxml } from '$lib'
    import {nest, nestMid, nestTl, register, registerCenters, textEl } from './svgHelpers.js'

    //-----------------------------------------------------------
    // Flags Legend
    const flagLegend = flagDefsGxml()
    flagLegend.push(flagLegendGxml(10, 10, 50, 0.4))

    //-----------------------------------------------------------
    // Simple table of flags
    const table = {el: 'svg', width: 700, height: 450, style: 'background: grey', els:[]}
    const w = 100
    const h = 50
    nestTl(belgium(w, h), table, 50, 50)
    // place(textEl(50, 50, 'Belgium'), table)
    nestTl(canada(w, h), table, 200, 50)
    nestTl(england(w, h), table, 350, 50)
    nestTl(france(w, h), table, 500, 50)
    nestTl(germany(w, h), table, 50, 150)
    nestTl(ireland(w, h), table, 200, 150)
    nestTl(netherlands(w, h), table, 350, 150)
    nestTl(norway(w, h), table, 500, 150)
    nestTl(scotland(w, h), table, 50, 250)
    nestTl(sweden(w, h), table, 200, 250)
    nestTl(unknown(w, h), table, 350, 250)
    nestTl(wales(w, h), table, 500, 250)
    nestTl(usa(w, h), table, 50, 350)

    //-----------------------------------------------------------
    // Flag nested transforms
    //-----------------------------------------------------------
    const stage = {el: 'svg', width: 700, height: 500, style: 'background: grey', els:[]}
    const flagFra = france(200,100)
    const flagEng = england(200,100)
    const flagUsa = usa(200,100)
    nestMid(flagFra, flagEng, 100, 50, 0.5, 45)
    nestMid(flagEng, flagUsa, 100, 50, 0.5, 45)
    nestMid(flagUsa, stage, 350, 250, 2, -15)
    nestTl(scotland(200,100), stage, 50, 10, 0.75, 45) 
    
    // Add flag defs (these are all preset at 100x100)
    stage.els.push(flagDefsGxml())
    // make sure to add 'width' and 'height' to the 'use'
    const use = {el: 'use', href: '#USA', x: 0, y: 0, width: 100, height: 100,
        filter: "url(#flag-lighting)", 'clip-path': "url(#flag-clipper)"}
    nestMid(use, stage, 350, 50, 0.5, 45)

    nest(belgium(200,100), 0, 0, stage, 0, 0, 0.5)
    nest(ireland(200,100), 200, 0, stage, 700, 0, 0.5)
    nest(netherlands(200,100), 200, 100, stage, 700, 500, 0.5)
    nest(norway(200,100), 0, 100, stage, 0, 500, 0.5)
    nest(canada(200,100), 0, 0, stage, 0, 250, 0.5)

    //-----------------------------------------------------------
    // USA rosette with no center
    for (let degrees=0; degrees<359; degrees+=45) {
        nest(usa(200,100), 0, 0, stage, 350, 400, 0.5, degrees)
    }
    // Germany rosette with 20 pixel center
    for (let degrees=0; degrees<359; degrees+=45) {
        nest(germany(200,100), -20, -20, stage, 550, 300, 0.5, degrees)
    }
    
    //-----------------------------------------------------------
    // Overlays
    //-----------------------------------------------------------
    const overlays = {el: 'svg', x: 0, y: 0, width: 700, height: 500, style: 'background: grey', els:[]}
    const subject = {el: 'rect', x: 100, y: 50, width: 100, height: 50, fill: 'red'}
    const refer = {el: 'rect', x: 300, y: 200, width: 200, height: 100, fill: 'green'}
    
    // Rect manually registered over reference element
    const subject1 = {...subject}
    const refer1 = {...refer}
    register(subject1, 50, 25, refer1, 100, 50)
    overlays.els.push(refer1)
    overlays.els.push(subject1)

    // Same as above, but also scale and rotate the subject
    const subject2 = {...subject}
    const refer2 = {...refer, x: 50, y: 50}
    register(subject2, 50, 25, refer2, 100, 50, 1.25, 45)
    overlays.els.push(refer2)
    overlays.els.push(subject2)

    // Rect manually registered over parent SVG
    const subject3 = {...subject}
    register(subject3, 50, 25, overlays, 400, 50)
    overlays.els.push(subject3)
    
    // Rect programatically centered over reference element
    const refer4 = {...refer, x: 50, y: 350}
    const rect4 = registerCenters({...subject}, refer4)
    const circ4 = registerCenters({el: 'circle', cx: 50, cy: 50, r: 50, fill: 'yellow'},
        refer4, 0.5)
    const text4 = textEl(10, 100, 'Text Element')
    text4['font-size'] = 16
    registerCenters(text4, refer4)
    overlays.els.push(refer4)
    overlays.els.push(rect4)
    overlays.els.push(circ4)
    overlays.els.push(text4)
</script>

<Card><H5c>SVG Flags Table</H5c>
    {@html gxmlStr(table)}
</Card>

<Card><H5c>SVG Flag Nested Placement & Transforms</H5c>
        {@html gxmlStr(stage)}
</Card>

<Card><H5c>SVG Element Placement & Transforms</H5c>
    {@html gxmlStr(overlays)}
</Card>

<Card><H5c>Responsive SVG</H5c>
    <svg width="100%" height="100%" style="background: grey">
        <rect x="25%" y="25%" width="50%" height="50%" fill="red"/>
        <text x="50%" y="50%" text-anchor="middle">Responsive Rectangle</text>
        <rect x="25" y="25" width="200" height="100" fill="blue"/>
        <text x="125" y="75" text-anchor="middle">Fixed Rectangle</text>
        <rect x="425" y="25" width="200" height="100" fill="green"/>
        <text x="525" y="75" text-anchor="middle">Fixed Rectangle</text>
    </svg>
</Card>

<Card><H5c>SVG Flags Legend</H5c>
    <svg width="600" height="300" transform="scale(1)" style="background: grey">
        {@html gxmlStr(flagLegend)}
    </svg>
</Card>
