<script>
    export let ordinal = '' // 'Chapter 1'
    export let title = ''
    export let subs = []
    if (!Array.isArray(subs)) subs = [subs]
</script>

<div>
<div class='text-center text-black font-serif'>
    <div class="text-lg mt-3 font-semibold">{ordinal}</div>
    <div class="text-2xl mt-2 mb-2 font-bold">{title}</div>
    {#if subs.length}
        <hr class="w-48 h-1 mx-auto my-2 bg-gray-400 border-0 rounded">
    {/if}
    {#each subs as sub}
        <div class="text-lg font-normal">{sub}</div>
    {/each}
    <hr class="w-48 h-1 mx-auto my-2 bg-gray-400 border-0 rounded">
    <hr class="w-48 h-1 mx-auto my-2 mb-8 bg-gray-400 border-0 rounded">
</div>
</div>