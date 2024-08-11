<script>
    import { Popover } from 'flowbite-svelte'
    import { InfoCircleSolid } from 'flowbite-svelte-icons'
    import { blur, fade, slide } from 'svelte/transition';
    
    export let trigger = ''
    export let person
    $: triggeredBy = '#' + trigger
</script>

<InfoCircleSolid id={trigger}
    class="inline text-green-700 dark:text-white w-5 h-5 me-1.5" />

<Popover class="w-64 text-sm font-light text-center"
        placement="right"
        transition={slide}
        title={person.fullName()}
        triggeredBy={triggeredBy}>
    <div class="pl-8 -indent-8 text-left text-sm font-normal tracking-tight text-gray-900 dark:text-white">
        <em class="font-italic">Born:</em> {person.birthLine()}
    </div>
    <div class="pl-8 -indent-8 text-left text-sm font-normal tracking-tight text-gray-900 dark:text-white">
        <em class="font-italic">Died:</em> {person.deathLine()}
    </div>
</Popover>
