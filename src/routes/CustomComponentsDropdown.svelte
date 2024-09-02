<script>
    import { NavLi, NavUl, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    export let activeUrl

    const items = [
        {href: "/custom/combobox-1", label: 'Comboboxes'},
        {href: "/custom/document", label: 'Printable Web Document'},
        {href: "/custom/fileupdown", label: 'Client File Upload - Edit - Download'},
        {href: "/custom/treeview", label: 'Treeview'},
    ]
</script>

<NavLi class="cursor-pointer">
    <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
    Custom Sandbox
</NavLi>
<Dropdown class="w-full z-20" placement="left-start">
    {#each items as item}
        <DropdownItem href={item.href} 
            class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            {item.label}
        </DropdownItem>
    {/each}
</Dropdown>
