<script>
    import { Button } from 'flowbite-svelte'
    import { ancestorPerson } from '$lib/sylvan/store'
    import { lineagePathwaySubjectToAncestor } from '$lib/index.js'
    import AncestorSelectorDrawer from './AncestorSelectorDrawer.svelte'

    export let items    // AncestorSelector items
    export let subject
    let hidden = true   // show/hide Drawer
    // console.clear()
    // console.log('LineagePathway entered')
    
    const fontHt = 16
    const labelWd = 450
    const labelHt = 50
    const gutterWd = 20
    const gutterHt = 20
    const marginWd = 10
    const marginHt = 10
    const width = 2 * marginWd + 2 * labelWd + gutterWd
    const x1 = marginWd
    const x2 = x1 + labelWd + gutterWd
    const t1 = x1 + 0.5 * labelWd
    const t2 = x2 + 0.5 * labelWd
    function fill(person) {
        if (! person) return "white"
        return person.isMale() ? 'lightblue' : 'pink'
    }
    function y(row) { return marginHt + row * (labelHt+gutterHt) }
    function ty(row) { return y(row) + 0.5 * labelHt + 0.25 * fontHt }

    let selected = items[0]
    let pairs = lineagePathwaySubjectToAncestor(subject, $ancestorPerson)
    let height = pairs.length * (labelHt + gutterHt) + 2 * marginHt

    $: {
        pairs = lineagePathwaySubjectToAncestor(subject, $ancestorPerson)
        height = pairs.length * (labelHt + gutterHt) + 2 * marginHt
    }
</script>

<AncestorSelectorDrawer items={items} selected={selected} bind:hidden={hidden}/>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<h2 class="mb-3 text-center text-2xl font-semibold leading-tight">
        Lineage Pathway <br>
        from Subject {subject.fullName()}<br>
        to Ancestor {$ancestorPerson.fullName()}
		<!-- Button that shows/hides the TargetSelectorDrawer -->
        <Button on:click={() => (hidden = false)} class="p-2" size="sm">Change</Button>
    </h2>

    <svg width={width} height={height}>
        <rect x=0 y=0 width={width} height={height} rx="15" ry="15"
            fill="none" stroke="black" stroke-width="1"/>

        <line x1={t1} x2={t1} y1={y(0)} y2={height-marginHt-labelHt} stroke="black" stroke-width="4"/>
        {#each pairs as [ancestor, spouse], i}
            <rect x={x1} y={y(i)} width={labelWd} height={labelHt} rx="15" ry="15"
                fill={fill(ancestor)} stroke="black" stroke-width="2"/>
            <text text-anchor="middle" x={t1} y={ty(i)} font-size={fontHt}>
                {ancestor.label()}
            </text>
            <text text-anchor="middle" x={x1+fontHt} y={y(i)+fontHt} font-size={fontHt}>
                {i}
            </text>
            {#if spouse}
                <line x1={x2-gutterWd} x2={x2} y1={y(i)+0.5*labelHt} y2={y(i)+0.5*labelHt} stroke="black" stroke-width="4"/>
                <rect x={x2} y={y(i)} width={labelWd} height={labelHt} rx="15" ry="15"
                    fill={fill(spouse)} stroke="black" stroke-width="2"/>
                <text text-anchor="middle" x={t2} y={ty(i)} font-size={fontHt}>
                    {spouse.label()}
                </text>
            {/if}
        {/each}
    </svg>
</div>