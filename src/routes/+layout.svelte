<script>
	import '../app.css'
    import { sineIn } from 'svelte/easing';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline, SearchOutline, UsersGroupSolid } from 'flowbite-svelte-icons'
    import { Drawer, Button, CloseButton, Input } from 'flowbite-svelte'
    import { page } from '$app/stores'
    import Collin from "$lib/images/Collin.jpg"
    import { getPersonSelectors } from '$lib/index.js'
    import PersonSelector from '$lib/svelte/PersonSelector.svelte'
	
    // BE SURE TO DEREFERENCE STORE VALUES USING '$subjectPerson'
    import { subjectPerson } from '$lib/sylvan/store.js'

	$: activeUrl = $page.url.pathname

    const items = getPersonSelectors()
    let selected = items[0]
    // Make subjectPerson the current selection
    for(let i=0; i<items.length; i++) {
        if ($subjectPerson.label() === items[i].person.label()) {
            selected = items[i]
            break
        }
    }

    // PersonSelector Drawer
    let hidden1 = true;
    const transitionParams = {x: -320, y: 0, duration: 200, easing: sineIn}
</script>

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
	<PersonSelector items={items}  bind:selected={selected}/>
</Drawer>

<!-- mx-auto centers the div -->
<div class="mx-auto border-8 border-indigo-800 ml-4 mr-4 px-2 py-2 rounded-lg">

    <div class="mx-auto border-4 mb-2 border-red-500 rounded-lg">
		<Navbar>
            <NavBrand href="/">
                <img src={Collin} class="me-2 h-6 sm:h-9" alt="Collin in hat" />
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Collin's Genealogy Sandbox</span>
            </NavBrand>

			<NavHamburger />
			
			<NavUl {activeUrl}>
				<NavLi href="/">Home</NavLi>

				<NavLi class="cursor-pointer">
					Sylvan
					<ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
				</NavLi>
				<Dropdown class="w-full z-20">
					<DropdownItem href="/sylvan/lineage">Lineage</DropdownItem>
					<DropdownItem href="/sylvan/profile">Person Profiles</DropdownItem>
				</Dropdown>

				<NavLi class="cursor-pointer">
					Collin
					<ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
				</NavLi>
				<Dropdown class="w-full z-20">
					<DropdownItem href="/custom/combobox-1">Comboboxes</DropdownItem>
					<DropdownItem href="/custom/fileupdown">Client File Upload - Edit - Download</DropdownItem>
					<DropdownItem href="/custom/svgbutton">SVG Button with Event Handlers</DropdownItem>
					<DropdownItem href="/custom/treeview">Treeview</DropdownItem>
				</Dropdown>
				
				<NavLi class="cursor-pointer">
					Tailwind
					<ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
				</NavLi>
				<Dropdown class="w-full z-20">
					<DropdownItem href="/tailwind/accordians/SaadHasan">Accordians by Saad Hasan</DropdownItem>
					<DropdownItem href="/tailwind/accordians/Zoltan">Accordians by Zoltan</DropdownItem>
					<DropdownDivider />
					<DropdownItem href="/tailwind/alerts">Alert Examples</DropdownItem>
					<DropdownItem href="/tailwind/buttons">Button Examples</DropdownItem>
					<DropdownItem href="/tailwind/cards">Card Example</DropdownItem>
					<DropdownItem href="/tailwind/containers">Containers Example</DropdownItem>
					<DropdownItem href="/tailwind/flexbox/grids">Flexbox Grid Examples</DropdownItem>
					<DropdownItem href="/tailwind/forms">Forms Examples</DropdownItem>
					<DropdownItem href="/tailwind/headers">Header Examples</DropdownItem>
					<DropdownDivider />
					<DropdownItem href="/tailwind/navigation/headers">Navigation Responsive Header</DropdownItem>
					<DropdownItem href="/tailwind/navigation/tabs">Navigation Tabs</DropdownItem>
					<DropdownDivider />
					<DropdownItem href="/tailwind/paragraphs">Paragraph Examples</DropdownItem>
					<DropdownItem href="/tailwind/scrollable-fixed-height-table">Scrollable Fixed-height Table</DropdownItem>
					<DropdownItem href="/tailwind/treeview">Treeview Example</DropdownItem>
				</Dropdown>

									
				<NavLi class="cursor-pointer">
					Flowbite
					<ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
				</NavLi>
				<Dropdown class="w-full z-20">
					<DropdownItem href="/flowbite/accordion">Accordion Examples</DropdownItem>
					<DropdownItem href="/flowbite/drawer">Drawer Examples</DropdownItem>
					<DropdownItem href="/flowbite/forms">Form Examples</DropdownItem>
				</Dropdown>

			</NavUl>
		</Navbar>

		<div class="flex p-1">
			<Button on:click={() => (hidden1 = false)}
				class="p-2" size="sm">
				Current subject: {$subjectPerson.fullName()}
			</Button>
		</div>
	</div>

	<div class="mx-auto border-4 border-green-500 px-2 pt-2 pb-2 rounded-lg">
		<slot></slot>
	</div>
</div>