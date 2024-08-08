<script>
    import { Button } from 'flowbite-svelte'
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'

    $: fileName = '[No file Selected]'
    $: fileSize = 0
    $: text = 'None'
    $: settings0 = {name: 'No one', age: 0, city: 'Nowhere'}
    $: settings1 = {name: 'No one', age: 0, city: 'Nowhere'}
    $: dataBlob = new Blob([JSON.stringify(settings1, null, 2)], {
            type: "application/json",})
    $: dataUrl = URL.createObjectURL(dataBlob)

    async function readLines(ev) {
        text = await readTextFile(ev.target.files[0])
        try {
            settings0 = JSON.parse(text)
        } catch (e) {
            return console.error(e)
        }

        // The following should got in an editor onChange callback function
        // Pretend user has edited the downloaded settings...
        settings1 = {...settings0, updated: new Date(), age: 73, name: 'Bumpa'}

        dataBlob = new Blob([JSON.stringify(settings1, null, 2)], {
            type: "application/json",})
        URL.revokeObjectURL(dataUrl)
        dataUrl = URL.createObjectURL(dataBlob)
    }

    // Generic function that reads a File from an <input type="file"> into an JSON record array.
    async function readTextFile(file) {
        // Not supported in Safari for iOS.
        fileName = file.name ? file.name : 'NOT SUPPORTED'
        // Unknown cross-browser support.
        fileSize = file.size ? file.size : 'NOT SUPPORTED'

        // File.text() (e.g., Blob.text()) is supported by:
        // Chrome >= 76, Jul 2019
        // Chrom for Android >= 126, Jun 10, 2024
        // Edge >= 79, Jan 2020
        // Firefox >= 69, Sep 2019
        // Firefox for Android >= 127, Jun 10, 2024
        // IE - NOT SUPPORTED
        // Opera >= 63, Aug 2019
        // Opera Mini, All
        // Opera Mobile, >= 80, Mar 6, 2024
        // Safari >= 14, Sep 2020
        // Safari for iOS >= 14.5, Apr 25, 2021
        // Samsung Internet >= 12, Jun 29, 2020
        const text = await file.text()
        return text
    }

    let files
</script>


<Card>
    <H5c>File Upload using Flowbite-TailwindCSS</H5c>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input">Upload file</label>
    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        on:change={readLines}
        bind:files
        >
</Card>

<Card>
    <H5c>Last Saved Settings</H5c>
    <p class='p-4'>{text}</p>
</Card>

<Card>
    <H5c>Settings Editior</H5c>
    {settings1.name} is {settings1.age} years old and lives in {settings1.city}.
</Card>

<Card>
    <p class='p-2 text-center'>
        <a id="dwn" href={dataUrl} download
        class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >Save Edited Settings</a>
    </p>
    <p class='p-2'>
        The settings will be downloaded to your device as <b>{dataUrl}</b>
    </p>
</Card>
