<script>
    import { sineIn } from 'svelte/easing';
    import { Drawer, Button, CloseButton, Popover } from 'flowbite-svelte'
    import { UserSettingsSolid, UsersGroupSolid, UsersSolid } from 'flowbite-svelte-icons'
    import { getPersonSelectors } from '$lib/sylvan/Singletons.js'
    import PersonProfile from './PersonProfile.svelte'

    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'
    import Selector from './Selector.svelte'

    // BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
    import { subjectPerson } from '$lib/sylvan/store.js'

    const items = getPersonSelectors()
    let selected = items[0]
    let initialSelected
    // Make subjectPerson the current selection
    for(let i=0; i<items.length; i++) {
        if ($subjectPerson.label() === items[i].person.label()) {
            selected = items[i]
            initialSelected = items[i]
            break
        }
    }

    // Default Drawer Example
    let hidden1 = true;
    const transitionParams = {
        x: -320,
        y: 0,
        duration: 200,
        easing: sineIn
    }
</script>

<div class="absolute top-40 left-0">
    <Button on:click={() => (hidden1 = false)}
        class="rounded-l-none p-2">
        <UsersGroupSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    </Button>
</div>

<div class="absolute top-52 left-0">
    <Button on:click={() => (hidden1 = false)}
        class="rounded-l-none p-2">
        <UserSettingsSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    </Button>
</div>

<Card>
    <H5c>SYLVAN has {items.length} Persons: Current Subject is:</H5c>
    <H5c><span class="font-bold">{selected.label}</span></H5c>

    <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1"
    class="bg-slate-700">
        <div class="flex items-center">
            <h5 id="drawer-label"
                class="inline-flex items-center mb-4 font-bold text-2xl text-white dark:text-white">
                Select a Person
            </h5>
            <CloseButton on:click={() => (hidden1 = true)}
                class="mb-4 text-white dark:text-white border-4 hover:bg-slate-500"/>
        </div>
        <Selector items={items}  bind:selected={selected}/>
    </Drawer>
</Card>
<PersonProfile person={$subjectPerson}/>
