<script>
	import '../app.css'
    import FlowbiteNavbar from './FlowbiteNavbar.svelte'
    import { Button } from 'flowbite-svelte'
	import PersonSelectorDrawer from '$lib/svelte/PersonSelectorDrawer.svelte'
    // BE SURE TO DEREFERENCE STORE VALUES USING '$subjectPerson'
    import { subjectPerson } from '$lib/sylvan/store.js'

	let hidden = true
</script>

<PersonSelectorDrawer bind:hidden={hidden}/>

<!-- mx-auto centers the div -->
<div class="mx-auto border-8 border-indigo-800 ml-4 mr-4 px-2 py-2 rounded-lg">

    <div class="mx-auto border-4 mb-2 border-red-500 rounded-lg">
		<FlowbiteNavbar/>
		<!-- Button that shows.hides the PersonSelectorDrawer -->
		<div class="flex p-1">
			<Button on:click={() => (hidden = false)} class="p-2" size="sm">
				Current subject: {$subjectPerson.fullName()}
			</Button>
		</div>
	</div>

	<!-- All +page.svelte content goes in the following slot -->
	<div class="mx-auto border-4 border-green-500 px-2 pt-2 pb-2 rounded-lg">
		<slot></slot>
	</div>
</div>