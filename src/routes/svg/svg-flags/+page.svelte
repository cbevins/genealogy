<script>
    import H from '$lib/svelte/H.svelte'
    import { Button } from 'flowbite-svelte'
    import { gxmlStr, center, place, textEl } from '$lib/index.js'
    import { canada, england, france, germany, star, usa } from './flags.js'
    import { flagLegendGxml, flagDefsGxml, flagGxml } from '$lib/index.js'
    import {pin, xcenter, xplace } from './SvgElement.js'

    const flagLegend = flagDefsGxml()
    flagLegend.push(flagLegendGxml(10, 10, 50, 0.4))

    //-----------------------------------------------------------
    const stage = {el: 'svg', width: 700, height: 500, style: 'background: grey', els:[]}
    const flagFra = france(200,100)
    const flagEng = england(200,100)
    const flagUsa = usa(200,100)
    xcenter(flagFra, flagEng, 100, 50, 0.5, 45)
    xcenter(flagEng, flagUsa, 100, 50, 0.5, 45)
    xcenter(flagUsa, stage, 350, 250, 2, -15)
    xplace(germany(200,100), stage, 50, 10, 0.75, 45) 
    
    // Add flag defs (these are all preset at 100x100)
    stage.els.push(flagDefsGxml())
    // make sure to add 'width' and 'height' to the 'use'
    const use = {el: 'use', href: '#USA', x: 0, y: 0, width: 100, height: 100,
        filter: "url(#flag-lighting)", 'clip-path': "url(#flag-clipper)"}
    xcenter(use, stage, 350, 50, 0.5, 45)

    pin(canada(200,100), 0, 0, stage, 0, 0, 0.5)
    pin(canada(200,100), 200, 0, stage, 700, 0, 0.5)
    pin(canada(200,100), 200, 100, stage, 700, 500, 0.5)
    pin(canada(200,100), 0, 100, stage, 0, 500, 0.5)

    // USA rosette with no center
    for (let degrees=0; degrees<359; degrees+=45) {
        pin(usa(200,100), 0, 0, stage, 350, 400, 0.5, degrees)
    }
    // Germany rosette with 20 pixel center
    for (let degrees=0; degrees<359; degrees+=45) {
        pin(germany(200,100), -20, -20, stage, 550, 300, 0.5, degrees)
    }
</script>

    <div class="border border-4 h-1 mb-2"/>
    <div class="container">

        <div class="text-lg text-center"><H>SVG Flags xcenter</H></div>
        {@html gxmlStr(stage)}

        <div class="text-lg text-center"><H>Flag Legend</H></div>
        <svg width="600" height="300" transform="scale(1)" style="background: grey">
            {@html gxmlStr(flagLegend)}
            {@html gxmlStr(place(flagLegend, 300, 0, .5, 0))}
            {@html gxmlStr(center(flagLegend, 100, 0, .5, 0))}
        </svg>
        <div class="border border-4 h-1 mt-2 mb-2"/>
</div>
