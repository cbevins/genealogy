<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte'
    export let person

    function noteLines(notes) {
        let a = []
        for (let i=0; i<notes.length; i++) a = a.concat(notes[i].split('/n'))
        return a
    }

    function notesStr(notes, pad) {
        const lines = noteLines(notes)
        const padding = ''.padStart(pad)
        let str = ''
        for (let i=0; i<lines.length; i++) str += padding + lines[i] + '\n'
        return str
    }

    $: siblings = person.siblings()
    $: families = person.familySpouses()

    function spouse(family, subject) {
        return (subject === family.xParent()) ? family.yParent() : family.xParent()
    }
</script>

<div class="border-2 border-black mt-4 mb-4 pt-2 pb-2 rounded overflow-hidden shadow-lg shadow-slate-500 bg-blue-100">
    <p>{person.label()}</p>
    <p>Born: {person.birthLine()} [{person.birthNotes()}] [{person.birthSourceKeys()}]</p>
    <p>Died: {person.deathLine()} [{person.deathNotes()}] [{person.deathSourceKeys()}]</p>
    <p>Notes: {notesStr(person.notes(), 8)}</p>
    <p>Source Keys: {person.sourceKeys()}</p>

    <Accordion>
        <AccordionItem>
            <span slot="header">Childhood Family</span>
            <p>Father: {person.father().fullName()}</p>
            <p>Mother: {person.mother().fullName()}</p>
            <p>Siblings: {siblings.length}</p>
            {#each siblings as sibling, i}
            <p>{i+1}: {sibling.fullName()}</p>
            {/each}
        </AccordionItem>

        {#each families as family, i}
        <AccordionItem>
            <span slot="header">Spouse {i+1}: {spouse(family, person).fullName()}</span>
            <p>{i+1}: {spouse(family, person).fullName()}</p>
            <p>Union: {family.unionLine()} [{family.unionNotes()}] [{family.unionSourceKeys()}]</p>
            <p>Children: {family.children().length}</p>
            {#each family.children() as child, j}
                <p>{j+1}: {child.fullName()}</p>
            {/each}
        </AccordionItem>
        {/each}
</Accordion>
</div>
