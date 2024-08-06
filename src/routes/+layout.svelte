<script>
	import '../app.css'
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    import { page } from '$app/stores'
    import Collin from "$lib/images/Collin.jpg"
    $: activeUrl = $page.url.pathname
</script>


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
						Collin
						<ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
					</NavLi>
					<Dropdown class="w-full z-20">
						<DropdownItem href="/custom/combobox-1">Comboboxes</DropdownItem>
						<DropdownItem href="/custom/fileupdown">Client File Upload - Edit - Download</DropdownItem>
						<DropdownItem href="/custom/svgbutton">SVG Button with Event Handlers</DropdownItem>
					</Dropdown>
					
					<NavLi class="cursor-pointer">
						Tailwind
						<ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
					</NavLi>
					<Dropdown class="w-full z-20">
						<DropdownItem href="/tailwind/alerts">Alert Examples</DropdownItem>
						<DropdownItem href="/tailwind/buttons">Button Examples</DropdownItem>
						<DropdownItem href="/tailwind/cards">Card Example</DropdownItem>
						<DropdownItem href="/tailwind/containers">Containers Example</DropdownItem>
						<DropdownItem href="/tailwind/flexbox-grids">Flexbox Grid Examples</DropdownItem>
						<DropdownItem href="/tailwind/headers">Header Examples</DropdownItem>
						<DropdownItem href="/tailwind/paragraphs">Paragraph Examples</DropdownItem>
						<DropdownItem href="/tailwind/scrollable-fixed-height-table">Scrollable Fixed-height Table</DropdownItem>
						<DropdownDivider />
					</Dropdown>
				
				</NavUl>
		</Navbar>
	</div>

	<div class="mx-auto border-4 border-green-500 px-2 pt-2 pb-2 rounded-lg">
		<slot></slot>
	</div>
</div>