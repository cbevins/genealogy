<script>
    import Collin from '$lib/images/Collin.jpg'
    /*
    The 'container' class sets the 'max-width' of our <div> to the 'min-width'
    of the current breakpoint. This is useful if you’d prefer to design for a
    fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.

    While 'mx-auto' centers the div, 'border' creates a border, and 'border-indigo-500'
    adds border color and other styling details:

    There are two section elements on the images above. The first section contains
    two images, while the second section contains six (three images per row).

    The first 'section' has class 'py-8', which adds padding to the top and bottom,
    and 'px-4' for padding to the left and right. Then, there is an inner,
    surrounding <div> that contains Tailwind classes 'flex', 'flex-wrap', and 'mx-4'.
    These classes set the display to flex, set flex-wrap to wrap,
    and add a margin to the left and right.

    For the images themselves, they are individually surrounded by a <div>
    with Tailwind classes *class*="md:w-1/2 px-4 mb-8 md:mb-0".
    This determines the width of each image, which is 1/2 of the parent <div>.
    It also styles the padding and margin.

    The images themselves now have the rounded class, which applies border radius sizes.
    shadow-md adds box shadows to the element. The second section has the same styles.
    The only difference is that the immediate <div> surrounding each image
    has the Tailwind class md:w-1/3, which ensures the width of each image is 1/3 of the parent div,
    making it three images per row.
    */
</script>

<div class="container mx-auto border border-indigo-500 px-4">

<section class="py-8 px-4">
    <div class="flex flex-wrap mx-4">
      <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src={Collin} alt=""></div>
      <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src={Collin} alt=""></div>
    </div>
  </section>

  <section class="pt-8 px-4">
    <div class="flex flex-wrap mx-4">
      <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src={Collin} alt=""></div>
      <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src={Collin} alt=""></div>
      <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src={Collin} alt=""></div>
      <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src={Collin} alt=""></div>
      <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src={Collin} alt=""></div>
      <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src={Collin} alt=""></div>
    </div>
  </section>

  </div>
