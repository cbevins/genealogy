<script>
    import { Li, List, Heading } from 'flowbite-svelte';
    import Card from '$lib/svelte/Card.svelte'
    import H from '$lib/svelte/H.svelte'

    import { gxmlStr } from '$lib/index.js'
    import { flagLegendGxml, flagDefsGxml } from '$lib'
    import { flagsTableGxml } from './flagsTableGxml.js'
    import { flagPinsTableGxml } from './flagPinsTableGxml.js'
    import { nestedFlagsGxml } from './nestedFlagsGxml.js'
    import { registeredElementsGxml } from './registeredElsGxml.js'

    const flagLegend = flagDefsGxml()
    // @ts-ignore
    flagLegend.push(flagLegendGxml(10, 10, 50, 0.4))
</script>

<Card><div class="text-xl"><H>Flag Pins from SVG Elements V2</H></div>
    <List>
        <Li>National flag SVGs are created by individual functions in flagsGxml.js.</Li>
        <Li>flagPinDefsGxml() calls those functions to create a set of SVG &lt;defs&gt;s
        along with a circular clip path and specular lighting.</Li>
        <Li>The small script flagPinsTableGxml.js creates an SVG wrapper that includes
        the flag pin &lt;defs&gt;, then calls flagPinGxml() to nest each country's flag into the SVG.</Li>
    </List>
    {@html gxmlStr(flagPinsTableGxml(100, 100))}
</Card>

<Card><div class="text-xl"><H>Flags from SVG GXML Elements V2</H></div>
    <List>
        <Li>National flag SVGs are created by individual functions in flagsGxml.js.</Li>
        <Li>The small script flagsTableGxml.js creates an SVG wrapper and uses nestTl()
        to nest each country's flag into the SVG</Li>
    </List>
    {@html gxmlStr(flagsTableGxml(100, 50))}
</Card>

<Card><div class="text-xl"><H>SVG Nested and Transformed Elements (using Updated nestedFlagsGxml.js)</H></div>
    <List>
        <Li>National flag SVGs are created by individual functions in flagsGxml.js.</Li>
        <Li>flagPinDefsGxml() calls those functions to create a set of SVG &lt;defs&gt;s
            along with a circular clip path and specular lighting.</Li>
        <Li>The small script nestedFlagsGxml.js creates an SVG wrapper that includes
            the flag pin &lt;defs&gt;, and uses nest(), nestMid(), and nestTl()
            to demonstrate how entire scenes can be nested and transformed within larger scenes.
        </Li>
    </List>
    {@html gxmlStr(nestedFlagsGxml())}
</Card>

<Card><div class="text-xl"><H>SVG Registered and Transformed Elements (using Updated registeredElsGxml.js)</H></div>
    <p>Demonstrates registration placement and transformation of non-nested elements</p>
    {@html gxmlStr(registeredElementsGxml())}
</Card>

<Card><div class="text-xl"><H>SVG Flag Pins Legend V1</H></div>
    <p>This uses the Legacy $lib/flagLegendGxml and $lib/flagDefGxml code that should be
        replaced by flagsGxml.js, flagPinsGxml.js, approach.</p>
    <svg width="600" height="300" transform="scale(1)" style="background: grey">
        {@html gxmlStr(flagLegend)}
    </svg>
</Card>

<Card><div class="text-xl"><H>Responsive SVG Demo (hand coded in page)</H></div>
    <svg width="100%" height="100%" style="background: grey">
        <rect x="25%" y="25%" width="50%" height="50%" fill="red"/>
        <text x="50%" y="50%" text-anchor="middle">Responsive Rectangle</text>
        <rect x="25" y="25" width="200" height="100" fill="blue"/>
        <text x="125" y="75" text-anchor="middle">Fixed Rectangle</text>
        <rect x="425" y="25" width="200" height="100" fill="green"/>
        <text x="525" y="75" text-anchor="middle">Fixed Rectangle</text>
    </svg>
</Card>
