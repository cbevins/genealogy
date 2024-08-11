<script>
    import { Badge } from 'flowbite-svelte'
    import { LineageTreeData } from './LineageTreeData.js'
    import TreeView from '$lib/svelte//TreeView.svelte'

    export let person
    const subject = person// preserve original person

    let lineage_data = []
    let lineage = null
    $: {
        lineage = new LineageTreeData(person)
        lineage_data = lineage.treeData()
    }
</script>

<div class="border-2 border-black mt-4 mb-4 pt-2 pb-2 rounded overflow-hidden shadow-lg shadow-slate-500 bg-blue-100">

    <!-- [View Subject] button -->
    <div class="relative text-center mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <!-- parent <div> must be 'relative', and child <div> must be absolute -->
        <button class="absolute left-2 top-0 text-xs border-2 rounded px-1 text-slate-300 bg-green-700"
            on:click={()=>person=subject}>View Subject</button>
            {person.fullName()}
    </div>
    <div class="relative text-center mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
        {lineage.count} Known Direct Ancestors
    </div>

    <!-- NOTE that 'let:item' is a component directive that gives us
        local access to a TreeView named slot 'item'-->
    <TreeView tree_data={lineage_data} let:item>
        <div class="flex w-full group border-b border-b-blue-700 py-2">
            {#if item.children}
                <div class="pl-2 grow">
                    <Badge class="bg-neutral-700 text-slate-300">
                        {item.gen}
                    </Badge>
                        {item.person.label()}
                    <Badge class="bg-amber-700 text-slate-300">
                        {item.person.ageString()}
                    </Badge>
                    <Badge class="bg-green-700 text-slate-300">
                        {item.person.birthCountry()}
                    </Badge>
                </div>
            {:else}
                <div class="pl-2 grow">
                    📝 {item.name}
                </div>
            {/if}
        </div>
    </TreeView>

</div>