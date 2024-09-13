<script>
    import { Channels, Lineage } from '$lib/index.js'
    import { gxmlStr, nest } from '$lib/index.js'
    import { lineageTrainPosterGxml } from './lineageTrainPosterGxml.js'
    import { lineageTrainGeometry } from './lineageTrainGeometry.js'
    import { gen } from './lineageTrainChartGxml.js'
    import H5c from '$lib/svelte/H.svelte'
    import {Select} from 'flowbite-svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'

    console.clear()
    const log = true  

    // Define the available page width option
    const pageWds = [8.5, 11, 17, 34, 68]
    const selectWidths = []
    pageWds.forEach((w)=>{ selectWidths.push({value: w, name: w+' in'})})

    let pageWd = 11
    let pageHt = 11
    let ancestorKeys = []   // array of $subjectPerson ancestor {value:, name:} objects
    let ancestorKey = null  // nameKey string of current display ancestor
    let channels = null
    let titles = []

    // Define computational dependencies and order
    $: ancestorKeys = createAncestorKeys($subjectPerson) 
    $: channels = createChannels($subjectPerson, ancestorKey)
    $: channelNodes = channels.channelNodesBySeq()
    $: posterGxml = createPosterGxml(channelNodes) 
    $: displayGxml = createDisplayGxml(posterGxml, pageWd)

    // SIDE EFFECT - sets global 'ancestorKey'
    function createAncestorKeys(person) {
        if (log) console.log(`createAncestorKeys() for root ${person.fullName()}`)
        const keys = []
        const lineage = new Lineage(person)
        const nodes = lineage.nodesBySeq()
        for (let i=0; i<nodes.length; i++) {
            const p = nodes[i].person
            keys.push({value: p.nameKey(), name: p.label()})
        }
        ancestorKey = keys[0].value
        return keys
    }

    function createChannels(rootPerson, ancestorNameKey) {
        if (log) console.log(`createChannels() for root ${rootPerson.fullName()} ancestor ${ancestorNameKey}`)
        return new Channels(rootPerson, true, ancestorNameKey)
    }

    function createPosterGxml(nodes) {
        if (log) console.log(`createPosterGxml() for root ${nodes[0].person.fullName()}`)
        // Create titles
        titles = []
        const a = channels.findNodeByNameKey(ancestorKey)
        const f = nodes[0].father ? nodes[0].father.person.nameSurnames() : 'UnKnown'
        const m = nodes[0].mother ? nodes[0].mother.person.nameSurnames() : 'Unknown'
        titles.push((a === nodes[0])   // root and ancestor are the same
            ? `Lineage of the ${f}-${m} Family`
            : `Lineage of ${a.person.fullName()}`)
        if (a !== nodes[0]) titles.push(`${gen(a)} of the ${f}-${m} Family Offspring`)
        const geom = lineageTrainGeometry(nodes)
        return lineageTrainPosterGxml(geom, titles)
    }

    function createDisplayGxml(poster, displayWd) {
        // Determine full page height for the current width
        pageHt = poster.height * displayWd / poster.width
        if (log) console.log(`createDisplayGxml() for poster display width ${displayWd}, height ${pageHt.toFixed(3)}`)
        // Create the enclosing display SVG
        const viewBox = `0 0 ${poster.width} ${poster.height}`
        displayGxml = {el: 'svg', style: 'background: white',
            width: `${pageWd}in`, height: `${pageHt}in`, viewBox: viewBox, els: []}
        nest(poster, 0, 0, displayGxml, 0, 0, 1, 0)
        return displayGxml
    }
</script>

{#each titles as title }
    <H5c>{title}</H5c>
{/each}
<H5c>{channelNodes.length} Routes Displayed for Ancestor: '{ancestorKey}'</H5c>

<div class='flex'>
    <div class='font-semibold text-lg m-4 mr-1'>Ancestor</div>
    <Select id='select-ancestor' class="w-80 m-2" items={ancestorKeys} bind:value={ancestorKey}/>
    <div class='font-semibold text-lg m-4 mr-1'>Page Width</div>
    <Select id='select-width' class="w-24 m-2" items={selectWidths} bind:value={pageWd}/>
    <div class='font-semibold text-lg m-4 mr-1'>Page Height is {pageHt.toFixed(2)}"</div>
</div>

{@html gxmlStr(displayGxml)}