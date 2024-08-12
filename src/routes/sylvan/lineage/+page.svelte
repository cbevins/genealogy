<script lang="ts">
    import { Tabs, TabItem } from 'flowbite-svelte'
    import { getSylvan, Lineage } from '$lib/index.js'
    import { lineagePathway, nationalOrigins } from '$lib/index.js'
    import LineageDemographics from './LineageDemographics.svelte'
    import { LineageTreeData } from './LineageTreeData.js'
    import LineageTreeView from './LineageTreeView.svelte'
    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'

    const subject = $subjectPerson // preserve original person
    $: person = $subjectPerson

    // let stats = null
    let origins = []
    let lineage = null
    let lineageTreeData = null
    let tree_data = []
    $: {
        lineage = new Lineage(person)
        lineageTreeData = new LineageTreeData(person)
        tree_data = lineageTreeData.treeData()
        // const stats = new GenerationStats(getSylvan(), person)

        const originsMap = nationalOrigins(person)
        origins = Array.from(originsMap).sort((a,b) => {return b[1] - a[1]})
    }

</script>

<!-- [View Subject] button -->
<div class="relative text-center mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <!-- parent <div> must be 'relative', and child <div> must be absolute -->
    <button class="absolute left-2 top-0 text-xs border-2 rounded px-1 text-slate-300 bg-green-700"
        on:click={()=>person=subject}>View Subject</button>
        {person.fullName()}
</div>
<div class="relative text-center mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
    {lineageTreeData.count} Known Direct Ancestors
</div>

<Tabs>
    <TabItem open title="Lineage Tree">
        <LineageTreeView person={person} tree_data={tree_data}/>
    </TabItem>
    <TabItem title="Origins">
    <p class="text-sm text-gray-500 dark:text-gray-400">
        {#each origins as [country, value], i}
            <p>{country.padEnd(16)} {value.toFixed(6)}</p>
        {/each}
    </p>
    </TabItem>
    <TabItem title="Demographics">
        <LineageDemographics lineage={lineage}/>
    </TabItem>
</Tabs>