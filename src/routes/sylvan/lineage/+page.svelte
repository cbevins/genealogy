<script lang="ts">
    import { Lineage, Demographics, GenerationStats, getPersonSelectors, getSylvan } from '$lib/index.js'

    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
</script>

<Card>
    <H5c>Lineage</H5c>
</Card>