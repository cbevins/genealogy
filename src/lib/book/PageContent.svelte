<script>
    // id is the unique page number
    // it is used for ToC and other page-level hrefs
    export let pageno
</script>

<div id={'page'+pageno} class="absolute inset-x-[0.75in] top-[0.75in] h-[9.5in] w-[7in]">
    <slot></slot>
</div>
