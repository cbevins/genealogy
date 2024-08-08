<script>
    import { ButtonGroup, Fileupload, Helper, Input, InputAddon, Label } from 'flowbite-svelte'
    import { Checkbox, MultiSelect, Radio, Select, Textarea, Toggle } from 'flowbite-svelte'
    import { UserCircleSolid } from 'flowbite-svelte-icons'
    import { EnvelopeSolid } from 'flowbite-svelte-icons'

    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'
    import Tty from '$lib/svelte/Tty.svelte'

    $: checked1 = false
    $: checked2 = true
    $: radio1 = ""
    let files
    $: fileinfo = "no file chosen"

$: if (files) {
    // Note that `files` is of type `FileList`, not an Array:
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    const file = files[0]
    fileinfo = `${file.name}: ${file.size} bytes`
}

    function getfile() {
        const file = files[0]
        fileinfo = `${file.name}: ${file.size} bytes`
    }

    // Select Input
    let selected = 'us'
    let countries = [
        { value: 'us', name: 'United States' },
        { value: 'ca', name: 'Canada' },
        { value: 'fr', name: 'France' }
    ];

    // MultiSelect
    $: multiselected = ['Canada'];
    let morecountries = [
        { value: 'us', name: 'United States of America' },
        { value: 'ca', name: 'Canada' },
        { value: 'fr', name: 'France' },
        { value: 'jp', name: 'Japan' },
        { value: 'en', name: 'England' }
        ];

    // Textarea
    let textareaprops = {
        id: 'message',
        name: 'message',
        label: 'Your message',
        rows: 4,
        placeholder: 'Leave a comment...'
    };

    // File Uploads
    let fileuploadprops = {
        id: 'user_avatar'
    }
    let fileuploadprops2 = {
        id: 'user_avatar2'
    }
</script>

<Card>
    <H5c>Input Sizes</H5c>
    <div class="mb-6">
        <Label for="large-input" class="block mb-2">Large input</Label>
        <Input id="large-input" size="lg" placeholder="Large input" />
    </div>
    <div class="mb-6">
        <Label for="default-input" class="block mb-2">Default input</Label>
        <Input id="default-input" placeholder="Default input" />
    </div>
    <div class="mb-6">
        <Label for="small-input" class="block mb-2">Small input</Label>
        <Input id="small-input" size="sm" placeholder="Small input" />
    </div>
</Card>

<Card>
    <H5c>Disabled</H5c>
    <Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
    <Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
</Card>

<Card>
    <H5c>Helper Text</H5c>
    <Label class="block mb-2">Your email</Label>
    <Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />
    <Helper class="text-sm mt-2">
        We’ll never share your details. Read our
        <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Privacy Policy </a>.
    </Helper>
</Card>

<Card>
    <H5c>Input Element with Icon</H5c>
    <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Your Email</Label>
        <Input id="email" type="email" placeholder="name@flowbite.com">
        <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Input>
    </div>  
</Card>

<Card>
    <H5c>Input Element with Addon</H5c>
    <div class="mb-6">
        <Label for="website-admin" class="block mb-2">Username</Label>
        <ButtonGroup class="w-full">
        <InputAddon>
            <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </InputAddon>
        <Input id="website-admin" placeholder="elonmusk is a dick" />
        </ButtonGroup>
    </div>
</Card>

<Card>
    <H5c>Form Validation</H5c>
    <div class="mb-6">
        <Label for="success" color="green" class="block mb-2">Your name</Label>
        <Input id="success" color="green" placeholder="Success input" />
        <Helper class="mt-2" color="green">
        <span class="font-medium">Well done!</span>
        Some success message.
        </Helper>
    </div>
    <div class="mb-6">
        <Label for='error' color='red' class='block mb-2'>Your name</Label>
        <Input id='error' color='red' placeholder="Error input" />
        <Helper class='mt-2' color='red'><span class="font-medium">Not so well done!</span> Some error message.</Helper>
    </div>
</Card>

<Card>
    <H5c>Text Area</H5c>
    <Textarea {...textareaprops} />
</Card>

<Card>
    <H5c>Select Input</H5c>
    <Label>
        Select an option
        <Select class="mt-2" items={countries} bind:value={selected} />
    </Label>
</Card>

<Card>
    <H5c>Multi Select</H5c>
    <MultiSelect items={countries} bind:value={multiselected} />
</Card>

<Card>
    <H5c>Checkbox</H5c>
    <p class="p-4">First is [{checked1}] and second is [{checked2}]</p>
    <Checkbox bind:checked={checked1}>Default checkbox is set {checked1}</Checkbox>
    <Checkbox bind:checked={checked2}>Checked state is set to {checked2}</Checkbox>
</Card>

<Card>
    <H5c>Radio Buttons</H5c>
    <p class="p-4">Radio value is [{radio1}]</p>
    <Radio name="example" bind:group={radio1} value="First">Default radio</Radio>
    <Radio name="example" bind:group={radio1} checked={true} value="Second">Checked state</Radio>
</Card>

<Card>
    <H5c>Toggle Switch</H5c>
    <Toggle>Toggle me</Toggle>
    <Toggle checked={true}>Checked toggle</Toggle>
    <Toggle disabled>Disabled toggle</Toggle>
    <Toggle checked disabled>Disabled checked</Toggle>
</Card>

<Card>
    <H5c></H5c>
</Card>

<Card>
    <H5c>File Upload using Flowbite-Svelte</H5c>
    <Label class="pb-2">Upload file</Label>
    <Fileupload {...fileuploadprops2} />
</Card>

<Card>
    <H5c>File Upload using Flowbite-TailwindCSS</H5c>
    <p class="p-4">{fileinfo}</p>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input">Upload file</label>
    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        on:change={getfile}
        bind:files
        >
</Card>

<Card>
    <H5c></H5c>
</Card>
