<script>
    import { onMount } from 'svelte'
    import Book from '$lib/book/Book.svelte'
    import Chapter1 from './chapter1/Chapter1.svelte'

    let printEl
    // Book attributes
    const id = 'oattap'     // book id
    const title = 'Our Ancestors through Time and Place'
    const subs = [          // book subtitle lines
        'The Story of the Bevins-Riley Family',
        'Origins and Migrations',
        'Across History and Geography'
    ]
    const margins = {
        top: {left: '', center: '', right: ''},
        bot: {left: title, center: '', right: ''},
    }
    onMount(() => {
		console.log('MOUNTED', printEl)
        // html2pdf(printEl)
	})
</script>
<!-- 
<Book id={id}>
    <Chapter1 id={id+'-'+'chapter1'} margins={margins} page='13'
        ordinal='Chapter 1' title='The Bevins Lineage'/>
</Book> -->
<button onclick="window.print();">Print this Page</button>
<div bind:this={printEl}>
{#each [1,2,3,4,5,6,7,8,9] as page}
<!-- Page header -->
<div style="page-break-before: always"/>
<div class='relative w-[8.5in] h-[11in] border-2 border-slate-400'>
    <div class='relative left-[0.75in] w-[7in] h-[0.75in] border-2 border-green-400'>
        <div class="float-left mt-8">Header Left Text</div>
        <div class="float-right mt-8">Header Right Text</div>
        <div class="mx-auto w-[3in] mt-8 text-center">Header Some Longer Text Centered</div>
    </div>

    <!-- Page body -->
    <div class='relative left-[0.75in] w-[7in] h-[9.5in] border-2 border-blue-400'>
    </div>

    <!-- Page footer -->
    <div class='relative left-[0.75in] w-[7in] h-[0.75in] border-2 border-green-400'>
        <div class="float-left mt-4">Footer Left Text</div>
        <div class="float-right mt-4">Page {page}</div>
        <div class="mx-auto w-[3in] mt-4 text-center">Footer Some Longer Centered Text</div>
    </div>
</div>
<div style="page-break-after: always"/>
{/each}
</div>