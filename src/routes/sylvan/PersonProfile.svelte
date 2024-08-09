<script>
    import { AccordionItem, Accordion, Badge } from 'flowbite-svelte'
    import PersonPopover from './PersonPopover.svelte'

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
    <div class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {person.fullName()}
    </div>
    <div class="ml-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white">
        Born: {person.birthLine()}
        <Badge class="bg-green-700 text-slate-300">{person.birthNotes().length} Notes</Badge>
        <Badge class="bg-green-700 text-slate-300">{person.birthSourceKeys().length} Sources</Badge>
    </div>
    <div class="ml-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white">
        Died: {person.deathLine()}
        <Badge class="bg-green-700 text-slate-300">{person.deathNotes().length} Notes</Badge>
        <Badge class="bg-green-700 text-slate-300">{person.deathSourceKeys().length} Sources</Badge>
    </div>
    <div class="ml-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white">
        Notes: {notesStr(person.notes(), 8)}
    </div>
<!-- 
    <div class="ml-2 text-lg font-normal tracking-tight text-gray-900 dark:text-white">
        Source Keys: {person.sourceKeys()}
    </div>
     -->
    <Accordion>
        <AccordionItem>
            <span slot="header">Childhood Family</span>
            <p>Father: {person.father().fullName()}
                <PersonPopover trigger="father" person={person.father()} />
            </p>

            <p>Mother: {person.mother().fullName()}
                <PersonPopover trigger="mother" person={person.mother()} />
            </p>
            <p>Siblings: {siblings.length}</p>
            {#each siblings as sibling, i}
            <p class="pl-4">{i+1}: {sibling.fullName()}
                <PersonPopover trigger={"sibling-"+i} person={sibling} />
            </p>
            {/each}
        </AccordionItem>

        {#each families as family, i}
        <AccordionItem>
            <span slot="header">
                Spouse {i+1}: {spouse(family, person).fullName()}
                <Badge class="bg-green-700 text-slate-300">{family.children().length} Children</Badge>
            </span>
            <p>Spouse {i+1}: {spouse(family, person).fullName()}
                <PersonPopover trigger={"spouse-"+i} person={spouse(family, person)} />
            </p>
            <p>Union: {family.unionLine()} [{family.unionNotes()}] [{family.unionSourceKeys()}]</p>
            <p>Children: {family.children().length}</p>
            {#each family.children() as child, j}
                <p class="pl-4">{j+1}: {child.fullName()}
                    <PersonPopover trigger={"child-"+i+'-'+j} person={child} />
                </p>
            {/each}
        </AccordionItem>
        {/each}
</Accordion>
</div>
