<script>
    export let title = ""
</script>

<details class="bg-gray-300 open:bg-amber-500 duration-300">
    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">
        {title}
    </summary>
    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
        <slot></slot>
    </div>
</details>
