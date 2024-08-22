<script>
    import H from '$lib/svelte/H.svelte'
    import { Button } from 'flowbite-svelte'
    import {gxmlStr } from '$lib'
    import { center, place, textEl } from './svg.js'
    import { canada, england, france, germany, star, usa } from './flags.js'
    import { flagLegendGxml, flagDefsGxml, flagGxml } from '$lib/index.js'

    // This is the content group to be transformed
    const sampleEls = [
        {el: 'rect', x: 0, y: 0, width: 200, height: 100, fill: 'green',
            stroke: 'black', 'stroke-width': '4'},
        {el: 'circle', cx: 100, cy: 50, r: 10, fill: 'red', opacity: '50% '}
    ]

    // Flag is an <svg> that can be rotated and scaled
    const flagBg = {el: 'rect', id: 'flag-bg', x: 0, y: 0, width: 200, height: 100,
        fill: 'green', stroke: 'red', 'stroke-width': 4}
        
    const flagMotto = {el: 'text', id: 'flag-motto', x: 100, y: 60, 'text-anchor': 'middle', els: [
        {el: 'inner', content: 'Eat More Vegetables'}]}

    const star5 = {el: 'svg', id: 'star', width: 200, height: 200, 
        els: [
        {el: 'title', els: [{el: 'inner', content: 'Five Point Star'}]},
        {el: 'path', fill: 'red', stroke: '#000',
            transform: 'translate(10,10) scale(0.5)',
            d: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"}
    ]}
    const redStar = star('red', 'black')
    const flag1 = [flagBg, flagMotto, redStar]

    const flag2 = [{el: 'svg', id: 'flag2', width: 200, height: 100, els: [
        flag1, center(flag1, 100, 50, 0.60, 45)
    ]}]

    const flag3 = [{el: 'svg', id: 'flag3', width: 200, height: 100, els: [
        flagBg, flagMotto, redStar, center(flag2, 100, 50, 0.40, 45)
    ]}]

    const flagLegend = flagDefsGxml()
    flagLegend.push(flagLegendGxml(10, 10, 50, 0.4))
</script>

<Button>Left</Button>
<div class="container">
    <div class="border border-4 h-1 mb-2"/>
    <div class="container">

        <div class="text-lg text-center"><H>National Flags</H></div>
        <svg width="600" height="300" transform="scale(1)" style="background: grey">
            <!-- Create the flag to size, then center, scale, and rotate it at x,y -->
            {@html gxmlStr(center(france(200, 100), 300, 150, 1, 45))}
            <circle cx="300" cy="150" r="5" fill="blue" opacity="50%"/>

            {@html gxmlStr(place(germany(200, 100), 100, 150, 0.5, 0))}
            <circle cx="100" cy="150" r="5" fill="blue" opacity="50%"/>

            {@html gxmlStr(place(england(200, 100), 500, 150, 0.5, -45))}
            <circle cx="500" cy="150" r="5" fill="blue" opacity="50%"/>

            {@html gxmlStr(place(canada(200, 100), 50, 50, 0.5, 0))}
            <circle cx="500" cy="150" r="5" fill="blue" opacity="50%"/>

            {@html gxmlStr(place(usa(200, 100), 200, 50, 2, 0))}
            <circle cx="500" cy="150" r="5" fill="blue" opacity="50%"/>
        </svg>
        <div class="border border-4 h-1 mt-2 mb-2"/>

        <div class="text-lg text-center"><H>Flag Legend</H></div>
        <svg width="600" height="300" transform="scale(1)" style="background: grey">
            {@html gxmlStr(flagLegend)}
            {@html gxmlStr(place(flagLegend, 300, 0, .5, 0))}
            {@html gxmlStr(center(flagLegend, 100, 0, .5, 0))}
        </svg>
        <div class="border border-4 h-1 mt-2 mb-2"/>

        <div class="text-lg text-center"><H>Demo of place() v center() Demo</H></div>
        <svg width="600" height="300" transform="scale(1)" style="background: grey">
            {@html gxmlStr(center(sampleEls, 300, 150, 0.5, 45))}
            {@html gxmlStr(place(sampleEls, 300, 150, 0.5, 45))}
            <circle cx="300" cy="150" r="10" fill="blue" opacity="50%"/>
        </svg>
        <div class="border border-4 h-1 mt-2 mb-2"/>

        <div class="text-lg text-center"><H>Nested images with own scale and rotation</H></div>
        <svg width="600" height="300" transform="scale(1)" style="background: grey">
            {@html gxmlStr(center(flag3, 300, 150, 2, 45))}
            <circle cx="300" cy="150" r="10" fill="blue" opacity="50%"/>
        </svg>
        <div class="border border-4 h-1 mt-2 mb-2"/>
    </div>
</div>
