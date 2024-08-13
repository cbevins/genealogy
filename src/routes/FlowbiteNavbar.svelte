<script>
    import { page } from '$app/stores'
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    import Collin from "$lib/images/Collin.jpg"

	$: activeUrl = $page.url.pathname
</script>

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
