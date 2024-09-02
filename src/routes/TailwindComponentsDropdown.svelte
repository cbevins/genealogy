<script>
    import { NavLi, NavUl, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    export let activeUrl
</script>
        
<NavLi class="cursor-pointer">
    <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
    Tailwind Examples
</NavLi>
<Dropdown class="w-full z-20" placement="left-start">
    <NavUl {activeUrl}>
        <NavLi class="cursor-pointer">
            Accordions
            <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-full z-20" placement="left-start">
            <DropdownItem href="/tailwind/accordians/SaadHasan">Accordians by Saad Hasan</DropdownItem>
            <DropdownItem href="/tailwind/accordians/Zoltan">Accordians by Zoltan</DropdownItem>
        </Dropdown>
    </NavUl>
    <DropdownItem href="/tailwind/alerts">Alerts</DropdownItem>
    <DropdownItem href="/tailwind/buttons">Buttons</DropdownItem>
    <DropdownItem href="/tailwind/cards">Cards</DropdownItem>
    <DropdownItem href="/tailwind/forms">Forms</DropdownItem>
    <DropdownDivider />
    <NavUl {activeUrl}>
        <NavLi class="cursor-pointer">
            Navigation Components
            <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-full z-20" placement="left-start">
            <DropdownItem href="/tailwind/navigation/headers">Navigation Responsive Header</DropdownItem>
            <DropdownItem href="/tailwind/navigation/tabs">Navigation Tabs</DropdownItem>
        </Dropdown>
    </NavUl>
    <NavUl {activeUrl}>
        <NavLi class="cursor-pointer">
            Containers, Flexbox
            <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-full z-20" placement="left-start">
            <DropdownItem href="/tailwind/containers">Containers Example</DropdownItem>
            <DropdownItem href="/tailwind/flexbox/grids">Flexbox Grid Examples</DropdownItem>
        </Dropdown>
    </NavUl>
    <NavUl {activeUrl}>
        <NavLi class="cursor-pointer">
            Headers, Paragraphs
            <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-full z-20" placement="left-start">
            <DropdownItem href="/tailwind/headers">Header Examples</DropdownItem>
            <DropdownItem href="/tailwind/paragraphs">Paragraph Examples</DropdownItem>
        </Dropdown>
    </NavUl>
    <DropdownItem href="/tailwind/scrollable-fixed-height-table">Scrollable Fixed-height Table</DropdownItem>
    <DropdownItem href="/tailwind/treeview">Treeview Example</DropdownItem>
</Dropdown>
