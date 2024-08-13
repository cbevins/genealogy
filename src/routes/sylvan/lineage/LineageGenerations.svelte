<script>
    import { getSylvan } from '$lib/index.js'
    import { GenerationStats } from '$lib/index.js'
    import { GenerationsData } from '$lib/helpers/generations.js'

    export let person   // Person reference
    let gens = []
    let countries = []
    $: {
        const gen = new GenerationStats(getSylvan(), person)
        gens = gen.gens()
        countries = gen.countries()
    }
</script>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<h2 class="mb-3 text-center text-2xl font-semibold leading-tight">
        Generational Info
    </h2>
	<div class="overflow-x-auto">
        <table class="min-w-full rounded-lg border-collapse bg-amber-500">
			<thead class=" dark:bg-red-700">
                <tr class="text-center text-lg">
                    <th class="p-2 text-right font-semibold">Gen</th>
                    <th class="p-2 text-right font-semibold">Size</th>
                    <th class="p-2 text-right font-semibold">Count</th>
                    <th class="p-2 pr-0 text-right font-semibold">Birth</th>
                    <th class="p-2 pl-1 text-left font-semibold">Years</th>
                    <th class="p-2 pr-0 text-right font-semibold">Death</th>
                    <th class="p-2 pl-1 text-left font-semibold">Years</th>
                    {#each countries as country}
                        <th class="p-2 text-right font-semibold">{country.substring(0, 3)}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each gens as gen, g}
                {#if gen.count}
                <tr class="border-t border-opacity-80 dark:border-gray-300 dark:bg-gray-100">
                    <td class="px-2 text-right font-normal">{g}</td>
                    <td class="px-2 text-right font-normal">{GenerationsData[g].count}</td>
                    <td class="px-2 text-right font-normal">{gen.count}</td>
                    <td class="px-2 pr-0 text-right font-normal">{gen.birthMin}-</td>
                    <td class="px-2 pl-0 text-left font-normal">{gen.birthMax}</td>
                    <td class="px-2 pr-0 text-right font-normal">{gen.deathMin}-</td>
                    <td class="px-2 pl-0 text-left font-normal">{gen.deathMax}</td>

                    {#each gen.country.entries() as [country, count]}
                        <th class="p-2 text-right font-normal">{count}</th>
                    {/each}
                    
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
</div>
