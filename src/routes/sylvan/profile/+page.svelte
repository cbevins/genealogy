<script lang="ts">
    import PersonProfile from './PersonProfile.svelte'
    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'
</script>

<PersonProfile person={$subjectPerson}/>
