<script>
    import { NavLi, NavUl, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    export let activeUrl
</script>
                            
<NavLi class="cursor-pointer">
    <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
    Flowbite Examples
</NavLi>
<Dropdown class="w-full z-20" placement="left-start">
    <DropdownItem href="/flowbite/accordion">Accordion Examples</DropdownItem>
    <DropdownItem href="/flowbite/drawer">Drawer Examples</DropdownItem>
    <DropdownItem href="/flowbite/forms">Form Examples</DropdownItem>
</Dropdown>
