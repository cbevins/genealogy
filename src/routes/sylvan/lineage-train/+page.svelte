<script>
    import { Channels } from '$lib/index.js'
    import { gxmlStr, nest, register, textEl } from '$lib/index.js'
    import { lineageTrainPosterGxml } from './lineageTrainPosterGxml.js'
    import { lineageTrainGeometry } from './lineageTrainGeometry.js'
    import { Branch } from './Branch.js'

    import H5c from '$lib/svelte/H.svelte'
    import {Radio} from 'flowbite-svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
    console.clear()

    const branchNameKeys = [
        'CollinDouglasBevins1952',
        'SamuelBevins1878',
        'HattieJaneCollins1889',
        'RalphVernonHeddens1909',
        'MargaretEvaNattrass1914'
    ]

    const pageWds = [8.5, 11, 17, 34, 68]

    $: singlePage = true
    $: pageWd = 68
    $: pageHt = 11.0
    $: channels = new Channels($subjectPerson, true)
    $: branchNameKey = branchNameKeys[0]

    function html(subject, pageWd, nameKey) {
        channels = new Channels(subject, true, nameKey)
        const channelNodes = channels.channelNodesBySeq()
        const geom = lineageTrainGeometry(channelNodes)
        // console.log(geom)
        const posterGxml = lineageTrainPosterGxml(geom)

        // If fitting entire chart on one page, determine its height
        if (singlePage) {
            const viewBox = `0 0 ${posterGxml.width} ${posterGxml.height}`
            // console.log('viewBox', viewBox)
            pageHt = posterGxml.height * pageWd / posterGxml.width
            const displaySvg = {el: 'svg', style: 'background: white',
                width: `${pageWd}in`, height: `${pageHt}in`,
                viewBox: viewBox, els: []}
            nest(posterGxml, 0, 0, displaySvg, 0, 0, 1, 0)
            return displaySvg
        }
    }
</script>

<H5c>Lineage Train Map for {channels.rootPerson().label()}</H5c>

<p class="mb-2 font-semibold text-gray-900 dark:text-white">
    Page {pageWd}" x {pageHt.toFixed(3)}"</p>
<ul class="items-center w-80 rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
    {#each pageWds as wd}
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={wd} checked={pageWd===wd} >{wd}"</Radio></li>
    {/each}
</ul>

<p class="mt-2 mb-4 font-semibold text-gray-900 dark:text-white">
    Display Lineage Branch for Branch {branchNameKey}</p>
<ul class="items-center w-300 rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
    {#each branchNameKeys as key, i}
    <li class="w-60"><Radio name="branck-name-key" class="p-3"
        bind:group={branchNameKey} value={key} checked={branchNameKey===key}>
        {key}</Radio>
    </li>
    {/each}
</ul>

{@html gxmlStr(html($subjectPerson, pageWd, branchNameKey))}
