<script>
    import Book from '$lib/book/Book.svelte'
    import Chapter1 from './chapter1/Chapter1.svelte'
    
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

</script>

<Book id={id}>
    <Chapter1 id={id+'-'+'chapter1'} margins={margins} page='13'
        ordinal='Chapter 1' title='The Bevins Lineage'/>
</Book>
