<script>
    import { NavLi, NavUl, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    export let activeUrl

    const items = [
        {href: "/svg/svg-controller", label: 'SVG Flags (controller)'},
        {href: "/svg/svg-events", label: 'SVG Button with Event Handlers'},
        {href: "/svg/svg-flags", label: 'SVG Flas (flags)'},
        {href: "/svg/svg-scene", label: 'SVG Scene Builder'},
        {href: "/svg/svg-transforms", label: 'SVG Transforms'},
    ]
</script>

<NavLi class="cursor-pointer">
    <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
    SVG Components
</NavLi>
<Dropdown class="w-full z-20 border-0" placement="right-start">
    {#each items as item}
        <DropdownItem href={item.href} 
            class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            {item.label}
        </DropdownItem>
    {/each}
</Dropdown>
