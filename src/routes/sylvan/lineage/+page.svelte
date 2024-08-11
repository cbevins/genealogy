<script lang="ts">
    import LineageTreeView from './LineageTreeView.svelte'
    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
</script>

<LineageTreeView person={$subjectPerson}/>
