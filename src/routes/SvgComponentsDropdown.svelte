<script>
    import { NavLi, Dropdown, DropdownItem } from 'flowbite-svelte'
    import { ChevronDownOutline } from 'flowbite-svelte-icons'
    export let activeUrl

    const items = [
        {href: "/svg/svg-events", label: 'SVG Button with Event Handlers'},
        {href: "/svg/svg-fit", label: 'SVG Poster Fit'},
        {href: "/svg/svg-flags", label: 'SVG Flags Updated'},
        {href: "/svg/svg-transforms", label: 'SVG Transforms'},
        {href: "/svg/svg-scene", label: 'SVG Scene Builder (DEPRECATED)'},
        {href: "/svg/svg-controller", label: 'SVG Flags (DEPRECATED)'},
    ]
</script>

<NavLi class="cursor-pointer">
    <ChevronDownOutline class="w-6 h-6 ms-1 text-primary-800 dark:text-white inline" />
    SVG Components
</NavLi>
    <Dropdown class="w-full z-20" placement="left-start">
    {#each items as item}
        <DropdownItem href={item.href} 
            class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
            {item.label}
        </DropdownItem>
    {/each}
</Dropdown>
