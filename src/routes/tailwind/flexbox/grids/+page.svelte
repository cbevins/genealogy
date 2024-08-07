<script>
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'
</script>
<Card>
    <H5c>Basic Grid</H5c>

<!-- Full width column -->
<div class="text-center text-black text-2xl">
    <div class="flex mb-4">
        <div class="w-full bg-gray-500 h-12">1</div>
    </div>

    <!-- Two columns -->
    <div class="flex mb-4">
        <div class="w-1/2 bg-gray-400 h-12">1</div>
        <div class="w-1/2 bg-gray-500 h-12">2</div>
    </div>
    
    <!-- Three columns -->
    <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400 h-12">1</div>
        <div class="w-1/3 bg-gray-500 h-12">2</div>
        <div class="w-1/3 bg-gray-400 h-12">3</div>
    </div>
    
    <!-- Four columns -->
    <div class="flex mb-4">
        <div class="w-1/4 bg-gray-500 h-12">1</div>
        <div class="w-1/4 bg-gray-400 h-12">2</div>
        <div class="w-1/4 bg-gray-500 h-12">3</div>
        <div class="w-1/4 bg-gray-400 h-12">4</div>
    </div>
    
    <!-- Five columns -->
    <div class="flex mb-4">
        <div class="w-1/5 bg-gray-500 h-12">1</div>
        <div class="w-1/5 bg-gray-400 h-12">2</div>
        <div class="w-1/5 bg-gray-500 h-12">3</div>
        <div class="w-1/5 bg-gray-400 h-12">4</div>
        <div class="w-1/5 bg-gray-500 h-12">5</div>
    </div>
    
    <!-- Six columns -->
    <div class="flex">
    <div class="w-1/6 bg-gray-400 h-12">1</div>
    <div class="w-1/6 bg-gray-500 h-12">2</div>
    <div class="w-1/6 bg-gray-400 h-12">3</div>
    <div class="w-1/6 bg-gray-500 h-12">4</div>
    <div class="w-1/6 bg-gray-400 h-12">5</div>
    <div class="w-1/6 bg-gray-500 h-12">6</div>
    </div>
</div>
</Card>

<Card>
    <H5c>Responsive Grid</H5c>
    <p>Visit the TailwindCSS
        <a href="https://v1.tailwindcss.com/components/flexbox-grids"
            class="underline text-red-500 visited:text-blue-500">
        Responive Grid</a>
        live example.
    </p>
<div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"></div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"></div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500"></div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400"></div>
</div>
</Card>

<Card>
    <H5c>Mixed Column Sizes</H5c>
<div class="text-center text-black text-2xl">
    <!-- Narrower side column -->
    <div class="flex mb-4">
        <div class="w-3/4 bg-gray-500 h-12">1</div>
        <div class="w-1/4 bg-gray-400 h-12">2</div>
    </div>

    <!-- Wide center column -->
    <div class="flex">
        <div class="w-1/5 bg-gray-500 h-12">1</div>
        <div class="w-3/5 bg-gray-400 h-12">2</div>
        <div class="w-1/5 bg-gray-500 h-12">3</div>
    </div>
</div>
</Card>

<Card>
    <H5c>Wrapping Columns</H5c>
    <div class="text-center text-black text-2xl">
        <div class="flex flex-wrap -mb-4">
            <div class="w-1/3 mb-4 bg-gray-400 h-12">1</div>
            <div class="w-1/3 mb-4 bg-gray-500 h-12">2</div>
            <div class="w-1/3 mb-4 bg-gray-400 h-12">3</div>
            <div class="w-1/3 mb-4 bg-gray-500 h-12">4</div>
            <div class="w-1/3 mb-4 bg-gray-400 h-12">5</div>
        </div>
    </div>
</Card>

<Card>
    <H5c>Column Spacing and Gutters</H5c>
    <p class="p-2">
        Add a negative horizontal margin like -mx-2 to your column container and an equal horizontal padding like px-2 to each column to add gutters.
    </p>
    <p class="p-2">
        To prevent horizontal scrolling in full width layouts, add overflow-hidden to another parent container, or compensate for the negative margin with matching horizontal padding.
    </p>

    <div class="text-center text-black text-2xl">
        <div class="px-2">
            <!-- Add a negative -mx-2 here, then offset it with px-2 for each column -->
            <div class="flex -mx-2">
                <div class="w-1/3 px-2">
                    <div class="bg-gray-400 h-12 pt-2">1</div>
                </div>
                <div class="w-1/3 px-2">
                    <div class="bg-gray-500 h-12 pt-2">2</div>
                </div>
                <div class="w-1/3 px-2">
                    <div class="bg-gray-400 h-12 pt-2">3</div>
                </div>
                </div>
            </div>
        </div>
</Card>

<Card>
    <H5c>Automatic Column Widths Using flex-1</H5c>
    <div class="text-center text-black text-2xl">
        <!-- Full width column -->
        <div class="flex mb-4">
            <div class="flex-1 bg-gray-500 h-12 pt-2">1</div>
        </div>
        
        <!-- Five columns -->
        <div class="flex mb-4">
            <div class="flex-1 bg-gray-400 h-12 pt-2">1</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">2</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">3</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">4</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">5</div>
        </div>
        
        <!-- Seven columns -->
        <div class="flex mb-4">
            <div class="flex-1 bg-gray-400 h-12 pt-2">1</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">2</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">3</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">4</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">5</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">6</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">7</div>
        </div>
        
        <!-- Eleven columns -->
        <div class="flex mb-4">
            <div class="flex-1 bg-gray-400 h-12 pt-2">1</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">2</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">3</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">4</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">5</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">6</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">7</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">8</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">9</div>
            <div class="flex-1 bg-gray-500 h-12 pt-2">10</div>
            <div class="flex-1 bg-gray-400 h-12 pt-2">11</div>
        </div>
    </div>
</Card>

 <Card>
    <H5c>Simple Offsets</H5c>
    <div class="text-center text-black text-2xl">
        <div class="flex flex-wrap">
            <div class="w-1/3 ml-auto bg-gray-500 h-12 pt-2">1</div>
            <div class="w-1/3 mr-auto bg-gray-400 h-12 pt-2">2</div>
        </div>
    </div>
</Card>
