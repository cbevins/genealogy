<script>
    import { Channels } from '$lib/index.js'
    import { gxmlStr, nest, register, textEl } from '$lib/index.js'
    import { lineageTrainGxml } from './lineageTrainGxml.js'
    import { lineageTrainGeometry } from './lineageTrainGeometry.js'

    import H5c from '$lib/svelte/H.svelte'
    import {Radio} from 'flowbite-svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
    
    const subject = $subjectPerson // preserve original person
    $: person = $subjectPerson
    $: channels = new Channels($subjectPerson, true)
    // Pass in just the Channels nodes to be displayed
    $: geom = lineageTrainGeometry(channels.nodesBySeq())
    // $: console.log(geom)
    $: chartGxml = lineageTrainGxml(geom)
    
    $: displaySvg = {el: 'svg', width: 850, height: 1100,
        style: 'background: gray', els: []}
    $: nest(chartGxml, 0, 0, displaySvg, 0, 0, 0.15, 0)
    $: pageSize = "8.5"
</script>

<H5c>Lineage Train Map for {channels.rootPerson().label()}</H5c>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Page Size {pageSize}</p>
<ul class="items-center w-48 rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageSize} value="8.5" checked={true} >8.5"</Radio></li>
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageSize} value="17">17"</Radio></li>
    <li class="w-16"><Radio name="page-size" class="p-3"
        bind:group={pageSize} value="34">34"</Radio></li>
</ul>
{@html gxmlStr(displaySvg)}
