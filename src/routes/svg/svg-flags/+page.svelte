<script>
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'

    import { gxmlStr } from '$lib'
    import { flagLegendGxml, flagDefsGxml } from '$lib'
    import { flagsTableGxml } from './flagsTableGxml.js'
    import { nestedFlagsGxml } from './nestedFlagsGxml.js'
    import { registeredElementsGxml } from './registeredElsGxml.js'
    import { posterGxml } from './posterGxml.js'

    const flagLegend = flagDefsGxml()
    flagLegend.push(flagLegendGxml(10, 10, 50, 0.4))
</script>

<Card><H5c>Flags from SVG GXML Elements</H5c>
    {@html gxmlStr(flagsTableGxml(100, 50))}
</Card>

<Card><H5c>SVG Nested and Transformed Elements</H5c>
        {@html gxmlStr(nestedFlagsGxml())}
</Card>

<Card><H5c>SVG Registered and Transformed Elements</H5c>
    {@html gxmlStr(registeredElementsGxml())}
</Card>

<Card><H5c>SVG Flags Legend from GXML</H5c>
    <svg width="600" height="300" transform="scale(1)" style="background: grey">
        {@html gxmlStr(flagLegend)}
    </svg>
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

<Card><H5c>SVG Poster Using Element Fit</H5c>
    {@html gxmlStr(posterGxml())}
</Card>

