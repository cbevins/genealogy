<script lang="ts">
    import { Tabs, TabItem } from 'flowbite-svelte'
    import { Lineage } from '$lib/index.js'
    import LineageDemographics from './LineageDemographics.svelte'
    import LineageGenerations from './LineageGenerations.svelte'
    import LineageOrigins from './LineageOrigins.svelte'
    import LineageTreeView from './LineageTreeView.svelte'
    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'

    const subject = $subjectPerson // preserve original person
    $: person = $subjectPerson
    $: lineage = new Lineage(person)

</script>

<!-- [View Subject] button -->
<div class="relative text-center mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <!-- parent <div> must be 'relative', and child <div> must be absolute -->
    <button class="absolute left-2 top-0 text-xs border-2 rounded px-1 text-slate-300 bg-green-700"
        on:click={()=>person=subject}>View Subject</button>
        {person.fullName()}
</div>

<div class="relative text-center mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
    has {lineage.size()} Known Direct Ancestors
</div>

<Tabs>
    <TabItem open title="Lineage Tree">
        <LineageTreeView person={person}/>
    </TabItem>

    <TabItem title="National Origins">
        <LineageOrigins person={person} />
    </TabItem>

    <TabItem title="Demographics">
        <LineageDemographics lineage={lineage}/>
    </TabItem>

    <TabItem title="Generations">
        <LineageGenerations person={person}/>
    </TabItem>
</Tabs>