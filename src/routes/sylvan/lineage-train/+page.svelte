<script>
    import { Channels, Lineage } from '$lib/index.js'
    import H5c from '$lib/svelte/H.svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
    
    const subject = $subjectPerson // preserve original person
    $: person = $subjectPerson
    $: channels = new Channels($subjectPerson)

</script>

<H5c>Lineage Train</H5c>