<script>
    import P from '$lib/book/P.svelte'
    import Page from '$lib/book/Page.svelte'
    import Section from '$lib/book/Section.svelte'
    export let id = ''
    const titles =[
        'The Immigrants',
        'William Longford Bevins and Mary Bolt (2nd GGP)']
</script>

<Section id={id} titles={titles}>
</Section>