<script>
	import '../app.css'
    import FlowbiteNavbar from './FlowbiteNavbar.svelte'
</script>

<!-- mx-auto centers the div -->
<div class="mx-auto border-8 border-indigo-800 ml-4 mr-4 px-2 py-2 rounded-lg">

    <div class="mx-auto border-4 mb-2 border-red-500 rounded-lg">
		<FlowbiteNavbar/>
	</div>

	<!-- All +page.svelte content goes in the following slot -->
	<div class="mx-auto border-4 border-green-500 px-2 pt-2 pb-2 rounded-lg">
		<slot></slot>
	</div>
</div>