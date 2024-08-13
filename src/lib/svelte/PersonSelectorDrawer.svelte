<script>
    import { sineIn } from 'svelte/easing';
    import { Drawer, Button, CloseButton } from 'flowbite-svelte'
    import { getPersonSelectors } from '$lib/index.js'
    import PersonSelector from '$lib/svelte/PersonSelector.svelte'
    // BE SURE TO DEREFERENCE STORE VALUES USING '$subjectPerson'
    import { subjectPerson } from '$lib/sylvan/store.js'

    export let hidden = true

    const items = getPersonSelectors()
    let selected = items[0]
    // Make subjectPerson the current selection
    for(let i=0; i<items.length; i++) {
        if ($subjectPerson.label() === items[i].person.label()) {
            selected = items[i]
            break
        }
    }

    const transitionParams = {x: -320, y: 0, duration: 200, easing: sineIn}
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden} id="sidebar1"
	class="bg-slate-700">
	<div class="flex items-center">
		<h5 id="drawer-label"
			class="inline-flex items-center mb-4 font-bold text-2xl text-white dark:text-white">
			Select a Person
		</h5>
		<CloseButton on:click={() => (hidden = true)}
			class="mb-4 text-white dark:text-white border-4 hover:bg-slate-500"/>
	</div>
	<PersonSelector items={items}  bind:selected={selected}/>
</Drawer>
