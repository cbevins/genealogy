<script>
    import { Channels } from '$lib/index.js'
    import { gxmlStr, nest, register, textEl } from '$lib/index.js'
    import { lineageTrainPosterGxml } from './lineageTrainPosterGxml.js'
    import { lineageTrainGeometry } from './lineageTrainGeometry.js'

    import H5c from '$lib/svelte/H.svelte'
    import {Radio} from 'flowbite-svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
    console.clear()
    $: singlePage = true
    $: pageWd = 68
    $: pageHt = 11.0
    $: channels = new Channels($subjectPerson, true)

    function html(subject, pageWd) {
        channels = new Channels(subject, true)
        // Pass in just the Channels nodes to be displayed
        const geom = lineageTrainGeometry(channels.nodesBySeq())
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
<p class="mb-4 font-semibold text-gray-900 dark:text-white">
    Page {pageWd}" x {pageHt.toFixed(3)}"</p>
<ul class="items-center w-80 rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={8.5} checked={true} >8.5"</Radio></li>
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={11} checked={true} >11"</Radio></li>
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={17}>17"</Radio></li>
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={34}>34"</Radio></li>
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageWd} value={68}>68"</Radio></li>
    </ul>
{@html gxmlStr(html($subjectPerson, pageWd))}
