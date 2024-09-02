<script>
    import Card from '$lib/svelte/Card.svelte'
    import H5c from '$lib/svelte/H5c.svelte'

    import { gxmlStr } from '$lib/index.js'
    import { posterGxml } from './posterGxml.js'
</script>

<Card><H5c>SVG Poster Using Element Fit (posterFxml.js)</H5c>
    {@html gxmlStr(posterGxml())}
</Card>
