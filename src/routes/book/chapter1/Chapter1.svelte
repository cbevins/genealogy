<script>
    import ChapterBeg from '$lib/book/ChapterBeg.svelte'
    import Intro from './Intro.svelte'
    import BevinsBolt from './BevinsBolt.svelte'
    import NewboldVerdon from './NewboldVerdon.svelte'
    import Page from '$lib/book/Page.svelte'

    // Book attributes
    export let id       // something like '<book>-<chapter>'
    export let margins
    export let ordinal  // chapter ordinal, something like 'Chapter 1'
    export let page     // first page number of the chapter
    export let title    // chapter title

    let pn = parseInt(page)
    // Update margin text
    // The book title is already in margins.bot.left
    margins.top.left = ordinal
    margins.top.center = title
    
    // Chapter subtitles
    const subs = [
        'Origins of the Bevins Surname',
        'A Dose of English History',
        'Tribal Relations'
    ]
</script>

<Page pageno={pn} {margins}>
    <ChapterBeg ordinal={ordinal} title={title} subs={subs}/>
    <Intro/>
</Page>

<Page pageno={++pn} {margins}>
    <BevinsBolt id={id+'bevins-bolt'}/>
</Page>

<Page pageno={++pn} {margins}>
    <NewboldVerdon id={id+'newbold-verdon'}/>
</Page>