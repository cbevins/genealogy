<script>
    import { Channels, Lineage } from '$lib/index.js'
    import { gxmlStr, nest } from '$lib/index.js'
    import { lineageTrainPosterGxml } from './lineageTrainPosterGxml.js'
    import { lineageTrainGeometry } from './lineageTrainGeometry.js'
    import H5c from '$lib/svelte/H.svelte'
    import {Label, Select, Radio} from 'flowbite-svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
    let ancestorKeys = []   // array of $subjectPerson ancestor {value:, name:} objects
    let ancestorKey = null  // nameKey string of current display ancestor
    let channels = null
    let channelNodes = []

    const pageWds = [8.5, 11, 17, 34, 68]
    $: singlePage = true
    let pageWd = 11
    let pageHt = 11.0

    // 'subject' is a Person instance
    $: subject = changeSubject($subjectPerson) 
    // 'ancestorKey' is the nameKey of one of the subject's direct ancestors 
    $: posterGxml = createPosterGxml($subjectPerson, ancestorKey) 
    // $: channels = new Channels(subject, true, null)
    // $: channelNodes = channels.channelNodesBySeq()
    $: displayGxml = createDisplayGxml(posterGxml, pageWd)

    function createPosterGxml(s, a) {
        console.log(`createPosterGxml() for subject ${s.fullName()} ancestor(${a})`)
        channels = new Channels(s, true, a)
        channelNodes = channels.channelNodesBySeq()
        const geom = lineageTrainGeometry(channelNodes)
        // console.log(geom)
        return lineageTrainPosterGxml(geom)
    }

    function createDisplayGxml(poster, displayWd) {
        console.log(`createDisplayGxml() for display width ${displayWd}`)
        // If fitting entire chart on one page, determine its height
        if (singlePage) {
            const viewBox = `0 0 ${posterGxml.width} ${posterGxml.height}`
            // console.log('viewBox', viewBox)
            pageHt = posterGxml.height * pageWd / posterGxml.width
            displayGxml = {el: 'svg', style: 'background: white',
                width: `${pageWd}in`, height: `${pageHt}in`,
                viewBox: viewBox, els: []}
            nest(posterGxml, 0, 0, displayGxml, 0, 0, 1, 0)
        }
        return displayGxml
    }

    function changeSubject(s) {
        console.log(`changeSubject(${s.fullName()})`)
        loadAncestorKeys(s)
        ancestorKey = ancestorKeys[0].value
        channels = new Channels(s, true, ancestorKey)
        channelNodes = channels.channelNodesBySeq()
        return s
    }

    function loadAncestorKeys(person) {
        ancestorKeys = []
        const lineage = new Lineage(person)
        const nodes = lineage.nodesBySeq()
        for (let i=0; i<nodes.length; i++) {
            const p = nodes[i].person
            ancestorKeys.push({value: p.nameKey(), name: p.label()})
        }
        console.log(`  -- loadAncestorKeys(${person.label()}) loaded ${ancestorKeys.length} ancestors`)
    }
</script>

<H5c>Lineage Train Map for Root Person: {subject.fullName()}</H5c>
<H5c>{channelNodes.length} Routes Displayed for Ancestor: '{ancestorKey}'</H5c>

<Label>
    <Select class="mt-2" items={ancestorKeys} bind:value={ancestorKey} />
</Label>

<p class="mb-2 font-semibold text-gray-900 dark:text-white">
    Page {pageWd}" x {pageHt.toFixed(3)}"</p>
<ul class="items-center w-80 rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
    {#each pageWds as wd}
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={wd} checked={pageWd===wd} >{wd}"</Radio></li>
    {/each}
</ul>

{@html gxmlStr(displayGxml)}