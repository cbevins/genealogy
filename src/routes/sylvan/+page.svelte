<script>
    import { sineIn } from 'svelte/easing';
    import { Drawer, Button, CloseButton, Popover } from 'flowbite-svelte'
    import { Sylvan } from '$lib/sylvan/Sylvan.js'
    import { _gedcomData } from '$lib/gedcom/_gedcomDataRootsMagic.js'
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'
    import Selector from './Selector.svelte'

    const sylvan = new Sylvan(_gedcomData)
    const items = sylvan.people().selectors()
    $: selected = items[0]

    // Default Drawer Example
    let hidden1 = true;
    const transitionParams = {
        x: -320,
        y: 0,
        duration: 200,
        easing: sineIn
    }
    console.clear()
</script>

<Card>
    <H5c>SYLVAN has {items.length} Persons</H5c>
    <H5c>Currently Selected Subject is {selected.label}</H5c>

    <div class="text-center">
        <Button on:click={() => (hidden1 = false)}>Change Current Subject</Button>
    </div>
    
    <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
        <div class="flex items-center">
            <h5 id="drawer-label"
                class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            </h5>
            <CloseButton on:click={() => (hidden1 = true)}
                class="mb-4 dark:text-white border-4" />
        </div>
        <Selector items={items}  bind:selected={selected}/>
    </Drawer>
</Card>
