<script>
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'

    $: fileName = '[No file Selected]'
    $: fileSize = 0
    $: text = 'None'
    $: outputFileName = 'output.json'

    $: settings0 = {email: 'email', password: 'password', name: 'name', age: 0, color: 'red'}
    $: settings1 = {email: 'email', password: 'password', name: 'name', age: 0, color: 'red'}
    $: dataBlob = new Blob([JSON.stringify(settings1, null, 2)], {
            type: "application/json",})
    $: dataUrl = URL.createObjectURL(dataBlob)
    $: checked1 = false

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
        type="file" id="file_input" on:change={readLines} bind:files>
</Card>

<Card>
    <H5c>Last Saved Settings</H5c>
    <p class='p-4'>{text}</p>
</Card>

<Card>
    <H5c>Settings Editior</H5c>

<form class="max-w-sm mx-auto">
    <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name</label>
        <input id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={settings0.name}
            required />
    </div>

    <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email</label>
        <input type="email" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={settings0.email}
            required />
    </div>

    <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password</label>
        <input type="password" id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={settings0.password}
            required />
    </div>

    <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value=""
                bind:checked={settings0.remember}
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me ({checked1})</label>
    </div>

    <div class="mb-5">
        <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Age</label>
        <input id="age" type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={settings0.age}
            required />
    </div>

    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Preferred Color {settings0.color}</h3>
    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            {#each [['red', 'Red'], ['blue', 'Blue'], ['green', 'Green']] as item}
                <div class="flex items-center ps-3">
                    <input id={"list-radio-"+item[0]} type="radio" value={item[0]} name="preferred-color"
                    bind:group={settings0.color} 
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for={"list-radio-"+item[0]}
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {item[1]}
                    </label>
                </div>
            {/each}
    </ul>

    <div class="w-full mx-auto border-4 m-4 p-4 border-green-500">
        <p class='p-2 text-center'>
            <a id="dwn" href={dataUrl} download={outputFileName}
                class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Save Edited Settings</a>
        </p>

        <div class="mb-5">
            <label for="file-output" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Output File Name</label>
            <input id="file_output" bind:value={outputFileName}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div>
    </div>
</form>
</Card>

