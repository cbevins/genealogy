<script>
</script>

	<h1 class="mb-4 mt-4 text-3xl md:text-3xl lg:text-3xl font-bold text-center">
        TailwindCSS Scrollable Fixed-Height Table
    </h1>

	<table class="text-left w-full">
		<thead class="bg-black flex text-white w-full">
			<tr class="flex w-full mb-4">
				<th class="p-4 w-1/4">Id</th>
				<th class="p-4 w-1/4">Two</th>
				<th class="p-4 w-1/4">Three</th>
				<th class="p-4 w-1/4">Four</th>
			</tr>
		</thead>
    <!-- Remove the nasty inline CSS fixed height on production
        and replace it with a CSS class — this is just for demonstration purposes! -->
		<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
            style="height: 50vh;">
            {#each Array(200) as item, i}
			<tr class="flex w-full mb-4">
				<td class="p-4 w-1/4">{i}</td>
				<td class="p-4 w-1/4">Cats</td>
				<td class="p-4 w-1/4">Birds</td>
				<td class="p-4 w-1/4">Fish</td>
			</tr>
            {/each}
		</tbody>
	</table>