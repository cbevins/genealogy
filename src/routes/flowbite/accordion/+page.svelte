<script>
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte'
    import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from 'flowbite-svelte-icons'
    import { CartSolid, CogOutline } from 'flowbite-svelte-icons'

    import Card from './Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'
    import Tty from './Tty.svelte'

    // Used by Multiple Mode Example
    const items = Array(3)
    const open_all = () => items.forEach((_, i) => (items[i] = true))
    const close_all = () => items.forEach((_, i) => (items[i] = false))
</script>

<Card>
    <H5c>Default Accordion</H5c>
    <p class="p-4">
        Accordion uses the single selection mode by default i.e. it collapses every other child element when expanding a one.
        To prevent that behavior set <Tty>multiple</Tty>
        property to <Tty>true</Tty>.
    </p>
    <Accordion>
        <AccordionItem>
        <span slot="header">My Header 1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start developing websites even faster with components on top of Tailwind CSS.
        </p>
        </AccordionItem>
        <AccordionItem>
        <span slot="header">My Header 2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li>
            <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
            </li>
            <li>
            <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
            </li>
        </ul>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Always Open</H5c>
    <p class="p-4">Use the <Tty>open</Tty> prop to make an item open on mount.</p>
    <Accordion>
        <AccordionItem open>
        <span slot="header">Header 2-1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem>
        <span slot="header">Header 2-2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Color Options</H5c>
    <p class="p-4">
        You can control the look and feel of <Tty>AccordionItems</Tty>
        by overwriting the <Tty>activeClass</Tty> and <Tty>inactiveClass</Tty> 
        properties. You can define them in <Tty>Accordion</Tty>
        so that they will apply to all children or set them individually on each
        <Tty>AccordionItem</Tty>.       
    </p>
    <Accordion
            activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
            inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
        <AccordionItem class="">
            <span slot="header">Header 2-1</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">Header 2-2</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Flush Accordion</H5c>
    <p class="p-4">Use <Tty>flush</Tty> prop to remove the rounded borders.</p>
    
    <Accordion flush>
        <AccordionItem>
        <span slot="header">Header 2-1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem>
        <span slot="header">Header 2-2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Arrow Style</H5c>
    <p class="p-4">Use the <Tty>arrowup</Tty> and <Tty>arrowdown</Tty> slots
        to set up and down icons.
    </p>
    
    <Accordion>
        <AccordionItem>
        <span slot="header">Header 2-1</span>
        <div slot="arrowup">
            <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
        </div>
        <span slot="arrowdown">
            <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
        </span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem>
        <span slot="header">Header 2-2</span>
        <div slot="arrowup">
            <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
        </div>
        <span slot="arrowdown">
            <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
        </span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Icon Accordion</H5c>
    
    <Accordion>
        <AccordionItem>
        <span slot="header" class="text-base flex gap-2">
            <CartSolid class="mt-0.5" />
            <span>My Header 1</span>
        </span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
        <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start websites even faster with components on top of Tailwind CSS.
        </p>
        </AccordionItem>
        <AccordionItem>
        <span slot="header" class="text-base flex gap-2">
            <CogOutline class="mt-0.5" />
            <span>My Header 2</span>
        </span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Multiple Mode</H5c>
    <p class="p-4">Example how to use the <Tty>multiple</Tty> option together with expand all behavior.
    <div class="">
        <Button on:click={open_all}>Open all</Button>
        <Button on:click={close_all}>Close all</Button>
    </div>
    <Accordion multiple>
        <AccordionItem bind:open={items[0]}>
        <span slot="header">My Header 1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start developing websites even faster with components on top of Tailwind CSS.
        </p>
        </AccordionItem>
        <AccordionItem bind:open={items[1]}>
        <div slot="header">My Header 2</div>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        </AccordionItem>
        <AccordionItem bind:open={items[2]}>
        <div slot="header">My Header 3</div>
        <p>Something more</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Custom Transitions</H5c>
    <p class="p-4">The default transition of <Tty>AccordionItems</Tty> is <span class="underline">slide</span>.
        Use the <Tty>transitionType</Tty> and <Tty>transitionParams</Tty> prop to make custom transitions.
    </p>
    
    <Accordion>
        <AccordionItem>
        <span slot="header">My Header 1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem transitionParams={{ duration: 2000 }}>
        <span slot="header">My Header 2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
        <AccordionItem transitionType="fade" transitionParams={{ duration: 1000 }}>
        <span slot="header">My Header 3</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Nesting Accordions</H5c>
    <Accordion>
        <AccordionItem open>
        <span slot="header">My Header 1</span>
        <Accordion>
            <AccordionItem>
            <span slot="header">My Header 1</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
            </AccordionItem>
            <AccordionItem>
            <span slot="header">My Header 2</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
                <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
                <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
            </ul>
            </AccordionItem>
        </Accordion>
        </AccordionItem>
        <AccordionItem>
        <span slot="header">My Header 2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
            <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
        </AccordionItem>
    </Accordion>
</Card>

<Card>
    <H5c>Customizing Header Tag</H5c>
    <p class="p-4">The default HTML element used for the header is an <Tty>h2</Tty> tag.
        You can customize this by providing a <Tty>tag</Tty> prop to <Tty>AccordionItem</Tty> component.
    </p>
    <Accordion>
        <AccordionItem tag='h3'>
        <span slot="header">My Header 1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start developing websites even faster with components on top of Tailwind CSS.
        </p>
        </AccordionItem>
        <AccordionItem tag='h3'>
        <span slot="header">My Header 2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li>
            <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
            </li>
            <li>
            <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
            </li>
        </ul>
        </AccordionItem>
    </Accordion>
</Card>