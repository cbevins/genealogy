<script>
    export let lineage  // Lineage instance

    $: nodes = lineage.nodesBySeq()

    console.clear()

    function fileid(node) {
        let idx = node.person.nameSuffix().search("#")
        if (idx < 0) return `${node.seq} <span class='bg-red-700'>Missing</span>`
        const n = parseInt(node.person.nameSuffix().slice(idx+3))
        if (n !== node.seq)  return `${node.seq} <span class='bg-red-700'>Wrong</span>`
        return node.seq
    }

    function place(p) {
        if (p.length === 0 || p==='unknown state' || p==='unknown country') p = 'unknown'
        const color = (p==='unknown') ? 'bg-red-700' : ''
        return `<span class="${color}">${p}</span>`
    }

    function year(y) {
        const color = (! year) ? 'bg-red-700' : ''
        return `<span class="${color}">${y}</span>`
    }
</script>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<h2 class="mb-3 text-center text-2xl font-semibold leading-tight">Lineage Checklist</h2>
	<div class="overflow-x-auto">
        <table class="min-w-full rounded-lg border-collapse bg-amber-500">
			<thead class=" dark:bg-red-700">
                <tr class="text-center text-lg">
                    <th class="p-2 text-left font-semibold"></th>
                    <th class="p-2 text-left font-semibold">Name</th>
                    <th class="p-2 text-left font-semibold">File #</th>
                    <th class="p-2 text-left font-semibold">Birth<br>Year</th>
                    <th class="p-2 text-left font-semibold">Birth<br>State</th>
                    <th class="p-2 text-left font-semibold">Birth<br>Country</th>
                    <th class="p-2 text-left font-semibold">Death<br>Year</th>
                    <th class="p-2 text-left font-semibold">Death<br>State</th>
                    <th class="p-2 text-left font-semibold">Death<br>Country</th>
                </tr>
            </thead>
            <tbody>
                {#each nodes as node, n}
                    {@const person = node.person}
                <tr class="border-t border-opacity-80 dark:border-gray-300 dark:bg-gray-100">
                    <td class="px-2 text-left font-semibold">{n}</td>
                    <td class="px-2 text-left font-semibold">{person.fullName()}</td>
                    <td class="px-2 text-left font-semibold">{@html fileid(node)}</td>
                    <td class="px-2 text-left font-semibold">{@html year(person.birthYear())}</td>
                    <td class="px-2 text-left font-semibold">{@html place(person.birthState())}</td>
                    <td class="px-2 text-left font-semibold">{@html place(person.birthCountry())}</td>
                    <td class="px-2 text-left font-semibold">{@html year(person.deathYear())}</td>
                    <td class="px-2 text-left font-semibold">{@html place(person.deathState())}</td>
                    <td class="px-2 text-left font-semibold">{@html place(person.deathCountry())}</td>
                {/each}
            </tbody>
        </table>
    </div>
</div>
