<script>
    import { Demographics } from '$lib/index.js'
    import { ButtonGroup, Button, GradientButton } from 'flowbite-svelte'

    export let lineage  // Lineage instance

    const Prop = ['Age at Death', 'Number of Spouses', 'Number of Children']

    $: dem = new Demographics(lineage.persons())
    $: propIdx = 0

    function age() {propIdx = 0}
    function spouses() {propIdx = 1}
    function children() {propIdx = 2}

    function stat(row, col, propId, field) {
        let idx = row * dem.cols().length + col
        const prop = dem.stat(idx).props[propId]
        return (field === 'n') ? prop[field] : prop[field].toFixed(2)
    }
</script>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<div class="mb-3 text-center">
    <ButtonGroup class="space-x-px mb-2">
        <Button pill color="yellow" on:click={age}>Age at Death</Button>
        <Button pill color="yellow" on:click={children}>Number of Children</Button>
        <Button pill color="yellow" on:click={spouses}>Number of Spouses</Button>
    </ButtonGroup>
    </div>
	<h2 class="mb-3 text-center text-2xl font-semibold leading-tight">{Prop[propIdx]}</h2>
	<div class="overflow-x-auto">
        <table class="min-w-full rounded-lg border-collapse bg-amber-500">
			<thead class=" dark:bg-red-700">
                <tr class="text-center text-lg">
                    <th class="p-2 text-left font-semibold">Gender</th>
                    <th class="p-2 text-left font-semibold">Stat</th>
                    {#each dem.cols() as col}
                        <th class="p-2 text-right font-semibold">{col}</th>
                    {/each}
                </tr>
            </thead>
    <tbody>
        {#each dem.rows() as row, r}
            <tr class="border-t border-opacity-80 dark:border-gray-300 dark:bg-gray-100">
                <td class="px-2 text-left font-semibold"></td>
                <td class="px-2 text-left font-semibold">Mean</td>
                {#each dem.cols() as col, c}
                    <td class="px-2 text-right">{stat(r, c, propIdx, 'mean')}</td>
                {/each}
            </tr>
            <tr>
                <td class="px-2 text-left font-semibold">{row}</td>
                <td class="px-2 text-left font-semibold">Max</td>
                {#each dem.cols() as col, c}
                    <td class="px-2 text-right">{stat(r, c, propIdx, 'max')}</td>
                {/each}
            </tr>
            <tr>
                <td class="px-2 text-left font-semibold"></td>
                <td class="px-2 text-left font-semibold">Numb</td>
                {#each dem.cols() as col, c}
                    <td class="px-2 text-right">{stat(r, c, propIdx, 'n')}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
</div>
</div>
