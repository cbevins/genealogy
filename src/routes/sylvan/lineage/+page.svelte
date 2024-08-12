<script lang="ts">
    import { Tabs, TabItem } from 'flowbite-svelte'

    import { Lineage } from '$lib/index.js'
    import LineageDemographics from './LineageDemographics.svelte'
    import LineageOrigins from './LineageOrigins.svelte'
    import { LineageTreeData } from './LineageTreeData.js'
    import LineageTreeView from './LineageTreeView.svelte'
    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'

    const subject = $subjectPerson // preserve original person
    $: person = $subjectPerson

    let lineage = null
    let lineageTreeData = null
    let tree_data = []
    $: {
        lineage = new Lineage(person)
        lineageTreeData = new LineageTreeData(person)
        tree_data = lineageTreeData.treeData()
        // const stats = new GenerationStats(getSylvan(), person)
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

    <TabItem title="National Origins">
        <LineageOrigins person={person} />
    </TabItem>

    <TabItem title="Demographics">
        <LineageDemographics lineage={lineage}/>
    </TabItem>
</Tabs>