<script>
    import H from "$lib/svelte/H.svelte"
    import { el, elHtml } from './SvgElement.js'
    console.clear()

    const stage = el('svg', {width: 700, height: 500, style: 'background: grey'})
    // Add an individual element to the scene
    const rect = el('rect', {width: 200, height: 100, fill: 'red'})
    stage.add(rect, {x: 350, y: 250, scale: 0.5, deg: 45})

    const scene1 = el('svg', {width: 300, height: 200})
    // Can use percents *if* no transform
    const rect1 = el('rect', {width: 300, height: 200, fill: 'green'})
    const prop1 = el('circle', {cx: '50%', cy: '50%', r: '20%', fill: 'yellow'})
    scene1.add(rect1).add(prop1)

    stage.add(scene1, {x: 100, y: 100})
    stage.add({...scene1}, {x: '25%', y: '25%'})


    // scene.add(prop1, {method: 'center', parentX: 0})

    // stage.add(scene, 100, 100)
    console.log(stage)
    console.log(elHtml(stage))
</script>

<H>SvgElement</H>
<svg width="700" height="500" style="background: grey">
    {@html elHtml(stage)}
</svg>