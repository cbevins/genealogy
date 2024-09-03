<script>
// @ts-nocheck

    import { page } from '$app/stores'
    import { Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, MegaMenu } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
	import PersonSelectorDrawer from '$lib/svelte/PersonSelectorDrawer.svelte'
    import CustomComponentsDropdown from './CustomComponentsDropdown.svelte'
    import SvgComponentsDropdown from './SvgComponentsDropdown.svelte'
    import TailwindComponentsDropdown from './TailwindComponentsDropdown.svelte'
    import FlowbiteComponentsDropdown from './FlowbiteComponentsDropdown.svelte'
    import Collin from "$lib/images/Collin.jpg"
    // BE SURE TO DEREFERENCE STORE VALUES USING '$subjectPerson'
    import { subjectPerson } from '$lib/sylvan/store.js'

    // Utilize the href prop within the NavLi component to incorporate a hyperlink.
    // To initiate the application of the active class, include the activeUrl prop within the NavUl component:
    $: activeUrl = $page.url.pathname
    let hidden = true
</script>

<PersonSelectorDrawer bind:hidden={hidden}/>

<Navbar class="mt-0">
    <NavBrand href="/">
        <img src={Collin} class="me-2 h-6 sm:h-9" alt="Collin in hat" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Collin's Genealogy Sandbox</span>
    </NavBrand>

    <NavHamburger />
    
    <NavUl {activeUrl}>
        <NavLi class="cursor-pointer">
            Sylvan
            <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-full z-20">
            <DropdownItem href="/sylvan/lineage">Person Lineage</DropdownItem>
            <DropdownItem href="/sylvan/lineage-train">Lineage Train</DropdownItem>
            <DropdownItem href="/sylvan/profile">Person Profiles</DropdownItem>
        </Dropdown>

        <NavLi class="cursor-pointer">
            Components
            <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-full z-20">
            <DropdownItem href="/">Reference Sites</DropdownItem>
            <CustomComponentsDropdown {activeUrl}/>
            <SvgComponentsDropdown {activeUrl}/>
            <TailwindComponentsDropdown {activeUrl}/>
            <FlowbiteComponentsDropdown {activeUrl}/>
        </Dropdown>

		<!-- Button that shows/hides the PersonSelectorDrawer -->
		<div class="flex p-1">
            <Button on:click={() => (hidden = false)} class="p-2" size="sm">
                {$subjectPerson.fullName()}
			</Button>
		</div>
    </NavUl>
</Navbar>


