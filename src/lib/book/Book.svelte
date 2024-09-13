<script>
    
    /**
     * Parts of a Book
     * 
     * <Book>
     *  <FrontCover/>
     * 
     *  Front Matter...
     *  <Fontispiece/> on left side of title page
     *  <TitlePage/> with copyright
     *  <CopyrightPage>
     *  <DedicationPage>
     *  <TableContents/>
     * 
     * Body...
     *  <Foreward> written by someone else
     *  <Introduction> if non-fiction, <Preface> if fiction; written by the author
     *  <Epigraph> usually a quote, poem, or excerpt
     *  <Part> optional, provides an ordianl and title
     *      <Chapter>
     *          <Section>
     *              <Subsection>
     *                  <P>
     *                  <Callout>
     *              <Subsection>
     *          </Section>
     *      </Chapter>
     *  </Part>
     *  <Conclusion> if non-fiction, or <Epilogue> if fiction
     *  <BackCover/>
     * 
     * Back Matter...
     * <Addendum/>
     * <Acknowledgments/>
     * <Bibliography/> or <ReferenceList/>
     * <Glossary/>
     * <Index/>
     * <About/>
     * </Book>
     */

    export let id = 'book'
</script>

<!-- Set basic font attributes -->
<div id={id} class="text-base mt-3 text-black font-normal indent-8 font-serif">
    <slot></slot>
</div>
