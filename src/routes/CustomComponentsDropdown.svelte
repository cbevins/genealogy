<script>
    import { NavLi, NavUl, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    export let activeUrl

    const items = [
        {href: "/custom/combobox-1", label: 'Comboboxes'},
        {href: "/custom/fileupdown", label: 'Client File Upload - Edit - Download'},
        {href: "/custom/svgcontroller", label: 'SVG Controller'},
        {href: "/custom/svgevents", label: 'SVG Button with Event Handlers'},
        {href: "/custom/treeview", label: 'Treeview'},
    ]
</script>

<NavLi class="cursor-pointer">
    <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
    Custom Sandbox
</NavLi>
<Dropdown class="w-full z-20" placement="left-start">
    {#each items as item}
        <DropdownItem href={item.href}>{item.label}</DropdownItem>
    {/each}
</Dropdown>
