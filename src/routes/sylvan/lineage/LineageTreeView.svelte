<script>
    import { Badge } from 'flowbite-svelte'
    import TreeView from '$lib/svelte//TreeView.svelte'

    export let person = null
    export let tree_data = []
</script>

<div class="border-2 border-black mt-4 mb-4 pt-2 pb-2 rounded overflow-hidden shadow-lg shadow-slate-500 bg-blue-100">
    <!-- NOTE that 'let:item' is a component directive that gives us
        local access to a TreeView named slot 'item'-->
    <TreeView {tree_data} let:item>
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