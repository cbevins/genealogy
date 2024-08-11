<script lang="ts">
    import { tree_data } from './treeviewData.js'
    import TreeView from './TreeView.svelte'
    import Card from '$lib/svelte/Card.svelte'
	import H5c from '$lib/svelte/H5c.svelte'

    $: editable_data = tree_data

    function addItem(list, id) {

    }

    function renameItem(list, id, name) {

    }
    function duplicateItem(list: any[], id: number) {
        list.splice(id + 1, 0, JSON.parse(JSON.stringify(list[id])))
        editable_data = editable_data
    }

    function deleteItem(list: any[], id: number) {
        list.splice(id, 1)
        editable_data = editable_data
    }
</script>

<Card>
    <H5c>Unstyled TreeView</H5c>
    <TreeView tree_data={tree_data} />
</Card>

<Card>
    <H5c>TreeView with Basic Styling</H5c>
<TreeView tree_data={tree_data} let:item>
    <div class="flex w-full group border-b border-b-blue-700 py-2">
        {#if item.children}
            <div class="grow">
                📁 {item.name}
            </div>
        {:else}
            <div class="grow">
                📝 {item.name}
            </div>
        {/if}
    </div>
</TreeView>
</Card>

<Card>
    <H5c>TreeView with Editable Content</H5c>
    <TreeView tree_data={editable_data} let:item={item} let:list={list} let:id={id}>
        <div class="flex w-full group border-b border-b-green-900 py-2">
            <div class="grow flex gap-2">
            {#if item.children && item.children.length > 0}
                📁 <div class="text-neutral-500">{ item.children.length }</div>
            {:else}
                📄
            {/if}
            <input
                type= "text"
                value={item.name}
                class="grow shrink w-full bg-transparent px-1 focus:outline-none focus:ring-0"
                style="width: fit-content;"
                on:input={(ev) => { renameItem(list, id, ev.target.value) }}>
            <div class="flex rounded-md overflow-hidden text-xs bg-neutral-900 opacity-0 group-hover:opacity-100 transition-all border border-neutral-700 text-neutral-500">
                <button on:click={() => { addItem(list, id) }} class="transition-all hover:text-green-100/50 hover:bg-green-800/50 px-2 py-1">Add File</button>
                <button on:click={() => { duplicateItem(list, id) }} class="transition-all hover:text-blue-100/50 hover:bg-blue-800/50 px-2 py-1">Duplicate</button>
                <button on:click={() => { deleteItem(list, id) }} class="transition-all hover:text-red-100/50 hover:bg-red-800/50 px-2 py-1">Delete</button>
            </div>
        </div>
    </TreeView>
</Card>