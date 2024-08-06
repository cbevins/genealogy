<script>
  $: count0 = 0
  $: count1 = 0
  $: count2 = 0
  $: count3 = 0
  $: count4 = 0
  function click0() {count0++}
  function click1() {count1++}
  function click2() {count2++}
  function click3() {count3++}
  function click4() {count4++}
</script>

<p>
For good tailwindcss examples, go
<a href="https://v1.tailwindcss.com/components/flexbox-grids">HERE</a>
</p>

<div class="mx-auto border border-yellow-500 px-4">
  
  <button on:click={click0}>
    Unstyled Button 0 ({count0})
  </button>
  
  <button class="border-4 border-red-600 bg-blue-500 hover:bg-blue-700 text-slate-700 hover:text-slate-900 font-bold py-2 px-4 rounded"
    on:click={click1}>
    Button 1 ({count1})
  </button>
</div>

<!-- colored buttons -->
<div class="bg-gray-400 flex items-center">
  <div class="container mx-auto bg-white rounded-lg shadow-lg">
    <div class="md:h-24 py-20 md:py-0 flex justify-center items-center">
      <div class="md:space-x-12 space-y-10 md:space-y-0">
        <button class="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block"
          on:click={click1}>
          Button 1 ({count1})
        </button>
        <button class="py-3 px-6 text-white rounded-lg bg-yellow-400 shadow-lg block md:inline-block"
          on:click={click2}>
          Button 2 ({count2})
        </button>
        <button class="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block md:inline-block"
            on:click={click3}>
          Button 3 ({count3})
        </button>
        <button class="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"
          on:click={click4}>
          Button 4 ({count4})</button>
      </div>
    </div>
  </div>
</div>

<!-- buttons with fontawesome icons -->
<div class="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <button class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button">
    <i class="fas fa-heart"></i>
    text-xs
  </button>

  <button class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button">
    <i class="fas fa-heart"></i>
    text-sm
  </button>

  <button class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-md px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button">
    <i class="fas fa-heart"></i>
    text-md
  </button>			

  <button class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-lg px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button">
    <i class="fas fa-heart"></i>
    text-lg
  </button>			

  <button class="text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-xl px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button">
    <i class="fas fa-heart"></i>
    text-xl
  </button>			
</div>

<!-- pills -->
<div class="justify-center my-8 select-none flex">
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-500 focus:outline-none active:shadow-none mr-2"
  >Primary</button>
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-orange-500 text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-400 focus:outline-none active:shadow-none mr-2"
  >Alert</button>
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-500 focus:outline-none active:shadow-none"
  >Danger</button>	
</div>