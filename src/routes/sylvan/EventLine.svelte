<script>
    import { Badge } from 'flowbite-svelte'
    export let label = 'Birth'
    export let content
    export let notes = []
    export let sourceKeys = []
</script>

<em class="font-italic">{label}:</em> {content}
        <Badge class="bg-green-700 text-slate-300">
            {notes.length} Notes
        </Badge>
        <Badge class="bg-green-700 text-slate-300">
            {sourceKeys.length} Sources
        </Badge>
