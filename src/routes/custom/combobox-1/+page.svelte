<script>
    import { Button, Card, Modal, Popover } from 'flowbite-svelte'
    import Selector from './Selector.svelte'
    import { personList } from './personList.js'

    let openModal = false
    
    console.clear()

    // Items is an array of objects with at least {index: <any>, label: <string>}
    let items = []
    // for(let i=0; i<1000; i++) items.push({index: i, label: `Item ${i}`})
    for(let i=0; i<personList.length; i++) {
      items.push({...personList[i], index: i})
    }

    $: selected = items[0]
</script>

<div class="container mx-auto border border-indigo-500 px-4">
  <div class="flex flex-wrap mx-4">
  
  <!-- Start of Column 1 -->
  <div class="md:w-1/3 px-4 mb-8 md:mb-0">
    <Card>
      <h3 class="mb-4 text-md font-bold">1: Using Popover Table</h3>
      Current Selection is <Button id="selector1">{selected.label}</Button>

      <Popover triggeredBy="#selector1" trigger="click"
            class="w-full text-sm font-dark" defaultClass="">
        <div class="grid grid-cols-12">
          <div class="col-span-4 p-3">
            <div class="space-y-2">
              <Selector items={items}  bind:selected={selected}/>
            </div>
          </div>
        </div>
      </Popover>
    </Card>
  </div> <!-- End of column 1 -->

<!-- Start column 2 -->
<div class="md:w-1/3 px-4 mb-8 md:mb-0">
  <Card>
    <h3 class="mb-4 text-md font-bold">2: Using Always Visible Table</h3>
      <Selector items={items}  bind:selected={selected}/>
  </Card>
</div> <!-- End of column 2 -->

<!-- Start of Column 3 -->
<div class="md:w-1/3 px-4 mb-8 md:mb-0">
  <div class="flex">
    <Card>
      <h3 class="mb-4 text-md font-bold">3: Using Modal Dialog</h3>
      Current Selection is:
      <Button on:click={() => (openModal = true)}>
        {selected.label}
      </Button>
        <Modal title="Select a Person" size='sm' class="w-full"
            bind:open={openModal} outsideclose>
          <Selector items={items} bind:selected={selected}/>
        </Modal>
    </Card>
  </div>  </div> <!-- End of column 3 -->

</div> <!-- End of flex -->
</div> <!-- End of container layout -->