<script>
    import { sineIn } from 'svelte/easing';
    import { Drawer, CloseButton } from 'flowbite-svelte'
    import AncestorSelector from './AncestorSelector.svelte'
    // BE SURE TO DEREFERENCE STORE VALUES USING '$subjectPerson'
    import { ancestorPerson } from '$lib/sylvan/store'

    export let hidden = true
    export let items
    export let selected

    const transitionParams = {x: -320, y: 0, duration: 200, easing: sineIn}
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden} id="sidebar1"
	class="bg-slate-700">
	<div class="flex items-center">
		<h5 id="drawer-label"
			class="inline-flex items-center mb-4 font-bold text-2xl text-white dark:text-white">
			Select an Ancestor<br>
		</h5>
		<CloseButton on:click={() => (hidden = true)}
			class="mb-4 text-white dark:text-white border-4 hover:bg-slate-500"/>
	</div>
	<AncestorSelector items={items}  bind:selected={selected}/>
</Drawer>
