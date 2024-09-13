<script>
    export let id
    export let titles = []
    if (! Array.isArray(titles)) titles = [titles]
</script>

<div id={id} class='text-lg text-center text-black font-serif font-bold'>
    {#each titles as title}
        <div>{title}</div>
    {/each}
</div>
<slot></slot>
