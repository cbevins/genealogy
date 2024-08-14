<script>
    import { Badge } from 'flowbite-svelte'
    
    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { ancestorPerson } from '$lib/sylvan/store.js'

    // Items is an array of objects with at least  the following fields:
    // {index: <array index>, label: <display string>}
    export let items = []
    export let selected
    let filteredItems = []

    let searchTerm = ''
    // console.log('Selector on entry has', items.length, 'items and selected=', selected)

    $: filteredItems = items.filter((item) => 
        item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    function clear(e) {
        document.getElementById('ancestor-search-combobox').value = ''
        searchTerm = ''
        // console.log('clear()')
    }

    function click(e) {
        const pos1  = e.target.id.lastIndexOf('-')
        selected = items[e.target.id.substring(pos1+1)]
        console.log(`click(): e.target.id='${e.target.id}', selected=`, selected)
        ancestorPerson.update(() => selected.person)
        console.log(`ancestorPerson UPDATED to '${selected.person.label()}'`)
    }

    function changed(e) {
        searchTerm = e.target.value
        filteredItems = items.filter((item) => 
            item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        console.log('changed(): e.target.value=', e.target.value, 'e=', e)
    }
</script>

<!-- A pure tailwindcss table -->
<table class="text-center text-black w-full">
    <thead>
        <tr>
            <th class="bg-sky-300 w-full">
                <Badge rounded color="dark">{filteredItems.length}</Badge>
                Current is: {selected.label}
            </th>
        </tr>
        <tr>
            <th class="p-2 bg-red-300 w-full">
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search"
                        id="person-search-combobox"
                        on:input={changed}
                        class="block w-full h-10 p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for..."
                    />
                    <button class="absolute end-1.5 bottom-1.5 bg-gray-50 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        on:pointerdown={clear}>
                        <span class="text-lg font-bold text-red-700">X</span>
                    </button>
                </div>
            </th>
        </tr>
    </thead>
    <!-- Use 'max-h-*' to limit size -->
    <tbody class="flex flex-col items-center justify-between w-full">
        {#each filteredItems as item}
            <tr class="bg-sky-500 flex w-full mb-1 text-black text-center">
                <td class="hover:bg-sky-700 w-full"
                    id={'item-'+item.index}
                    on:click="{click}"
                >
                    {item.label}
                </td>
            </tr>
        {/each}
    </tbody>
</table>
