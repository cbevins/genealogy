<script>
    import { Channels, Lineage } from '$lib/index.js'
    import { gxmlStr, nest } from '$lib/index.js'
    import { lineageTrainPosterGxml } from './lineageTrainPosterGxml.js'
    import { lineageTrainGeometry } from './lineageTrainGeometry.js'
    import H5c from '$lib/svelte/H.svelte'
    import {Select} from 'flowbite-svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'

    console.clear()
    let ancestorKeys = []   // array of $subjectPerson ancestor {value:, name:} objects
    let ancestorKey = null  // nameKey string of current display ancestor
    let channels = null

    const pageWds = [8.5, 11, 17, 34, 68]
    const selectWidths = []
    pageWds.forEach((w)=>{ selectWidths.push({value: w, name: w+' in'})})

    let singlePage = true
    let pageWd = 11
    let pageHt = 11.0

    $: ancestorKeys = createAncestorKeys($subjectPerson) 
    $: channels = createChannels($subjectPerson, ancestorKey)
    $: channelNodes = channels.channelNodesBySeq()
    $: posterGxml = createPosterGxml(channelNodes) 
    $: displayGxml = createDisplayGxml(posterGxml, pageWd)

    // SIDE EFFECT - sets global 'ancestorKey'
    function createAncestorKeys(person) {
        console.log(`createAncestorKeys() for root ${person.fullName()}`)
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
        console.log(`createChannels() for root ${rootPerson.fullName()} ancestor ${ancestorNameKey}`)
        return new Channels(rootPerson, true, ancestorNameKey)
    }

    function createPosterGxml(nodes) {
        console.log(`createPosterGxml() for root ${nodes[0].person.fullName()}`)
        const geom = lineageTrainGeometry(nodes)
        // args are (geom, pageNo, nodesPerPage, id)
        return lineageTrainPosterGxml(geom)
    }

    function createDisplayGxml(poster, displayWd) {
        console.log(`createDisplayGxml() for poster display width ${displayWd}`)
        // If fitting entire chart on one page, determine its height
        if (singlePage) {
            const viewBox = `0 0 ${poster.width} ${poster.height}`
            // console.log('viewBox', viewBox)
            pageHt = poster.height * displayWd / poster.width
            displayGxml = {el: 'svg', style: 'background: white',
                width: `${pageWd}in`, height: `${pageHt}in`,
                viewBox: viewBox, els: []}
            nest(poster, 0, 0, displayGxml, 0, 0, 1, 0)
        }
        return displayGxml
    }
</script>

<H5c>Lineage Train Map for Root Person: {$subjectPerson.fullName()}</H5c>
<H5c>{channelNodes.length} Routes Displayed for Ancestor: '{ancestorKey}'</H5c>

<div class='flex'>
    <div class='font-semibold text-lg m-4 mr-1'>Ancestor</div>
    <Select id='select-ancestor' class="w-80 m-2" items={ancestorKeys} bind:value={ancestorKey}/>
    <div class='font-semibold text-lg m-4 mr-1'>Page Width</div>
    <Select id='select-width' class="w-24 m-2" items={selectWidths} bind:value={pageWd}/>
</div>

{@html gxmlStr(displayGxml)}