<script>
    import { Fileupload, Label, Helper } from 'flowbite-svelte';

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
</script>

<div class="container mx-auto border border-indigo-500 px-4">
    <div class="flex flex-wrap mx-4">
        <h1 class='mb-4 text-2xl md:text-2xl lg:text-2xl font-bold'>Select a Settings File</h1>
        <input type="file" id="file-selector" accept="*" on:change={readLines}>
        <hr>

        
        <h1  class='mb-4 text-2xl md:text-2xl lg:text-2xl font-bold'>Last Saved Settings</h1>
        {text}
        <hr>
        
        <h1 class='mb-4 text-2xl md:text-2xl lg:text-2xl font-bold'>Settings Editor</h1>
        <p>
            {settings1.name} is {settings1.age} years old and lives in {settings1.city}.
        </p>
        <hr>
        <a id="dwn" href={dataUrl} download><h3>Save Edited Settings</h3></a>
        The settings will be downloaded to your device as <b>{dataUrl}</b>
    </div>
</div>
