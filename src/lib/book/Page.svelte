<script>
    import PageBot from './PageBot.svelte'
    import PageContent from './PageContent.svelte'
    import PageTop from './PageTop.svelte'
    export let pageno = ''    // page number (displayed in bottom-right)
    export let margins
    margins.bot.right = pageno
</script>
<!--
    Unit   1"  8.5"  11.0"
    px   496   4216  5456
    pt    72    612   792
    h     24    204   264
    rem    4     34    44
-->

<div class="relative h-[11in] w-[8.5in] border-4">
    <PageTop margins={margins.top}/>
        <PageContent pageno={pageno}>
            <slot></slot>
        </PageContent>
    <PageBot margins={margins.bot}/>
</div>