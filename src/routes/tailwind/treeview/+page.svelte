<script>
    import Collapsible from './Collapsible.svelte'
</script>

<!-- The First FAQ -->
<Collapsible title="Collin DOuglas Bevins">
    <Collapsible title="William Collins Bevins"></Collapsible>
    <Collapsible title="Meartia Margaret Heddens"></Collapsible>
</Collapsible>


<details class="bg-gray-300 open:bg-amber-500 duration-300">
    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">
        The first requently asked question
    </summary>
    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
        <p>Praesent posuere nisi vel diam congue varius. Praesent lacus nulla, congue nec rhoncus nec,
            suscipit et enim. Donec ultrices nec arcu et pharetra.</p>
    </div>
</details>

<!-- The Second FAQ -->
<details class="bg-gray-300 open:bg-amber-500 duration-300">
    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">
        Just another question
    </summary>
    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
        <p>Just some dummy content. Just some dummy content. Just some dummy content. Just some dummy content
            Just some dummy content. Just some dummy content</p>
    </div>
</details>

<!-- The Third FAQ -->
<details class="bg-gray-300 open:bg-amber-500 duration-300">
    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">
        How is the weather today?
    </summary>
    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
        <ul>
            <li>
                <details class="bg-gray-300 open:bg-amber-500 duration-300">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">
                        List Item 1
                    </summary>
                    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <p>Just some dummy content. Just some dummy content. Just some dummy content. Just some dummy content
                            Just some dummy content. Just some dummy content</p>
                    </div>
                                </details>
            </li>
            <li>List Item 2</li>
        </ul>
    </div>
</details>
