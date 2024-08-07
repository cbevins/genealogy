<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea, P, A, Checkbox } from 'flowbite-svelte'
  import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte'
  import { ArrowRightOutline, InfoCircleSolid, UserAddOutline, CalendarEditSolid } from 'flowbite-svelte-icons'
  import { ChartPieSolid, CartSolid, GridSolid, MailBoxSolid, UsersSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons'
  import { sineIn } from 'svelte/easing';
  import Collin from '$lib/images/Collin.jpg'
  import Card from '$lib/svelte/Card.svelte'
  import H5c from '$lib/svelte/H5c.svelte'
  import Tty from '../accordion/Tty.svelte'

  const transitionParamsLeft = {
    x: -320,
    y: 0,
    duration: 200,
    easing: sineIn
  }
  const transitionParamsRight = {
    x: 320,
    y: 0,
    duration: 200,
    easing: sineIn
  }
  const transitionParamsTop = {
    x: 0,
    y: -320,
    duration: 200,
    easing: sineIn
  }
  let transitionParamsBottom = {
    x: 0,
    y: 320,
    duration: 200,
    easing: sineIn
  }

  // Default Drawer Example
  let hidden1 = true;
  $: fromSide = "left"
  $: transitionParams = {...transitionParamsLeft}

  // Drawer Navigation Example
  let hidden2 = true
  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  // Drawer Contact Form
  let hidden3 = true
  // Drawer Form Example
  let hidden4 = true
  // Right Drawer Example
  let hidden6 = true;
  
  function fromBottom() {
    fromSide = "bottom"
    transitionParams = {...transitionParamsBottom}
    hidden6 = false
  }
  function fromLeft() {
    fromSide = "left"
    transitionParams = {...transitionParamsLeft}
    hidden6 = false
  }
  function fromRight() {
    fromSide = "right"
    transitionParams = {...transitionParamsRight}
    hidden6 = false
  }
  function fromTop() {
    fromSide = "top"
    transitionParams = {...transitionParamsTop}
    hidden6 = false
  }
</script>
  
  <Card>
    <H5c>1 - Default Drawer</H5c>
    <div class="text-center">
      <Button on:click={() => (hidden1 = false)}>Show drawer</Button>
    </div>
    
    <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
      <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
        </h5>
        <CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
      </div>
      <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
        for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
      </p>
      <div class="grid grid-cols-2 gap-4">
        <Button color="light" href="/">Learn more</Button>
        <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
      </div>
    </Drawer>
  </Card>

  <Card>
    <H5c>2 - Drawer Navigation</H5c>
    <div class="text-center">
      <Button on:click={() => (hidden2 = false)}>Show navigation</Button>
    </div>
    <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id="sidebar2">
      <div class="flex items-center">
        <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
        <CloseButton on:click={() => (hidden2 = true)} class="mb-4 dark:text-white" />
      </div>
      <Sidebar>
        <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
          <SidebarGroup>
            <SidebarItem label="Dashboard">
              <svelte:fragment slot="icon">
                <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarDropdownWrapper label="E-commerce">
              <svelte:fragment slot="icon">
                <CartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
              <SidebarDropdownItem label="Products" />
              <SidebarDropdownItem label="Billing" />
              <SidebarDropdownItem label="Invoice" />
            </SidebarDropdownWrapper>
            <SidebarItem label="Kanban" {spanClass}>
              <svelte:fragment slot="icon">
                <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Inbox" {spanClass}>
              <svelte:fragment slot="icon">
                <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Users">
              <svelte:fragment slot="icon">
                <UsersSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Products">
              <svelte:fragment slot="icon">
                <ShoppingBagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign In">
              <svelte:fragment slot="icon">
                <ArrowRightToBracketOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign Up">
              <svelte:fragment slot="icon">
                <EditOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
            </SidebarItem>
          </SidebarGroup>
        </SidebarWrapper>
      </Sidebar>
    </Drawer>
  </Card>

  <Card>
    <H5c>3 - Contact Form</H5c>
    <div class="text-center">
      <Button on:click={() => (hidden3 = false)}>Show contact form</Button>
    </div>
    <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden3} id="sidebar3">
      <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          <InfoCircleSolid class="w-5 h-5 me-2.5" />Contact us
        </h5>
        <CloseButton on:click={() => (hidden3 = true)} class="mb-4 dark:text-white" />
      </div>
      <form action="#" class="mb-6">
        <div class="mb-6">
          <Label for="email" class="block mb-2">Your email</Label>
          <Input id="email" name="email" required placeholder="name@company.com" />
        </div>
        <div class="mb-6">
          <Label for="subject" class="block mb-2">Subject</Label>
          <Input id="subject" name="subject" required placeholder="Let us know how we can help you" />
        </div>
        <div class="mb-6">
          <Label for="message" class="mb-2">Your message</Label>
          <Textarea id="message" placeholder="Your message..." rows="4" name="message" />
        </div>
        <Button type="submit" class="w-full">Send message</Button>
      </form>
      <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">info@company.com</A>
      </P>
      <P class="text-sm text-gray-500 dark:text-gray-400">
        <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">212-456-7890</A>
      </P>
    </Drawer>
  </Card>

  <Card>
    <H5c>4 - Drawer with Form Elements</H5c>
  <div class="text-center">
    <Button on:click={() => (hidden4 = false)}>Show drawer form</Button>
  </div>
  <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden4} id="sidebar4">
    <div class="flex items-center">
      <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        <InfoCircleSolid class="w-5 h-5 me-2.5" />New event
      </h5>
      <CloseButton on:click={() => (hidden4 = true)} class="mb-4 dark:text-white" />
    </div>
    <form action="#" class="mb-6">
      <div class="mb-6">
        <Label for="title" class="block mb-2">Title</Label>
        <Input id="title" name="title" required placeholder="Apple Keynote" />
      </div>
      <div class="mb-6">
        <Label for="description" class="mb-2">Description</Label>
        <Textarea id="message" placeholder="Write event description..." rows="4" name="message" />
      </div>
      <div class="mb-6">
        <Input id="date" name="date" required type="date" />
      </div>
      <div class="mb-4">
        <div class="relative">
          <Input noBorder id="search" placeholder="Add guest email" class="p-3" />
          <Button textSize="text-sm" class="absolute inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-primary-700 rounded-lg end-2 bottom-2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">
            <UserAddOutline class="w-3 h-3 me-1.5 text-white" />Add
          </Button>
        </div>
      </div>
      <div class="flex mb-4 -space-x-4 rtl:space-x-reverse">
        <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Collin} alt="" />
        <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Collin} alt="" />
        <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Collin} alt="" />
        <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Collin} alt="" />
      </div>
      <Button type="submit" class="w-full">
        <CalendarEditSolid class="w-3.5 h-3.5 me-2.5 text-white" />
        Create event
      </Button>
    </form>
  </Drawer>
</Card>

<Card>
  <H5c>6 - Right Drawer</H5c>
  <p class="p-4">Use this example to show the drawer component on the right side of the page.
    Set the <Tty>transitionParams</Tty> object variable to new variables.</p>
    
    <div class="text-center spacing-x-4">
      <Button on:click={fromRight}>Show from Right</Button>
      <Button on:click={fromLeft}>Show from Left</Button>
      <Button on:click={fromTop}>Show from Top</Button>
      <Button on:click={fromBottom}>Show from Bottom</Button>
    </div>
    
    <Drawer placement={fromSide}
        width={(fromSide==='left' || fromSide==='right') ? "w-80" : "w-full"}
        transitionType="fly"
        transitionParams={transitionParams}
        bind:hidden={hidden6} id="sidebar6">
      <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
        </h5>
        <CloseButton on:click={() => (hidden6 = true)} class="mb-4 dark:text-white" />
      </div>
      <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
        for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
      </p>
      <div class="grid grid-cols-2 gap-4">
        <Button color="light" href="/">Learn more</Button>
        <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
      </div>
    </Drawer>
</Card>
