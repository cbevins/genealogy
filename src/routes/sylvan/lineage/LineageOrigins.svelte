<script>
    import { Popover } from 'flowbite-svelte'
    import { InfoCircleSolid } from 'flowbite-svelte-icons'
    import { blur, fade, slide } from 'svelte/transition'
    import { nationalOrigins } from '$lib/index.js'
    export let person
    
    let origins = []
    $: {
        const originsMap = nationalOrigins(person)
        origins = Array.from(originsMap).sort((a,b) => {return b[1] - a[1]})
    }
</script>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<h2 class="mb-3 text-center text-2xl font-semibold leading-tight">National Origins</h2>
	<div class="overflow-x-auto">
        <table class="min-w-full rounded-lg border-collapse bg-amber-500">
			<thead class=" dark:bg-red-700">
                <tr class="text-center text-lg">
                    <th class="p-2 text-left font-semibold">Birth<br>Country</th>
                    <th class="p-2 text-left font-semibold">Representative<br>Fraction
                        <InfoCircleSolid id="originsInfo"
                                class="inline text-green-700 dark:text-white w-5 h-5 me-1.5" />
                            <Popover class="w-64 text-sm font-light text-center"
                                    placement="right" transition={slide}
                                    title="Representational Fraction"
                                    triggeredBy="#originsInfo">
                                What it is...
                            </Popover>
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each origins as [country, value], i}
                <tr class="border-t border-opacity-80 dark:border-gray-300 dark:bg-gray-100">
                    <td class="px-2 text-left font-semibold">{country}</td>
                    <td class="px-2 text-left font-semibold">{value.toFixed(6)}</td>
                {/each}
            </tbody>
        </table>
    </div>
</div>
