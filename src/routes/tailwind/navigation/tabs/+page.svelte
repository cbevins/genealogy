<script>
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'
</script>

<Card>
    <H5c>Navigation - Simple</H5c>
    <ul class="flex">
        <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
        </li>
        <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
        </li>
    </ul>
</Card>

<Card>
    <H5c>Navigation - Tabs</H5c>
<ul class="flex border-b">
    <li class="-mb-px mr-1">
        <a class="bg-sky-500 inline-block border-l border-t border-r rounded-t hover:border-red-700 border-red-500 py-2 px-4 text-blue-700 font-semibold"
            href="#">Active</a>
    </li>

    <li class="mr-1">
        <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            href="#">Tab</a>
    </li>

    <li class="mr-1">
        <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            href="#"> Tab</a>
    </li>

    <li class="mr-1">
        <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
            href="#">Tab</a>
    </li>
</ul>
</Card>

<Card>
    <H5c>Navigation - Pills</H5c>
    <ul class="flex">
        <li class="mr-3">
        <a class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#">Active Pill</a>
        </li>
        <li class="mr-3">
        <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
        </li>
        <li class="mr-3">
        <a class="inline-block py-1 px-3 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
        </li>
    </ul>
</Card>

<Card>
    <H5c>Navigation - Stretched</H5c>
    <ul class="flex">
        <li class="flex-1 mr-2">
        <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Item</a>
        </li>
        <li class="flex-1 mr-2">
        <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
        </li>
        <li class="text-center flex-1">
        <a class="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Item</a>
        </li>
    </ul>
</Card>

<Card>
    <H5c>Navigation - Justified</H5c>
    <ul class="flex justify-between">
        <li class="mr-3">
        <a class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Pill</a>
        </li>
        <li class="mr-3">
        <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Pill</a>
        </li>
        <li class="mr-3">
        <a class="inline-block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
        </li>
    </ul>
</Card>