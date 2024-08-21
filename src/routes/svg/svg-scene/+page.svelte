<script>
	import { gxmlStr } from "$lib"
    import {beginScene, add, text} from './scene'
    console.clear()
    
    // Templates
    const rect = {el: 'rect', width: 200, height: 100, fill: 'green', stroke: 'black', 'stroke-width': 4}
    const circle = {el: 'circle', r: 10, fill: 'yellow'}

    // Create a scene
    const sceneWd = 300
    const sceneHt = 300
    const scene = beginScene(sceneWd, sceneHt, 'grey')
    add({...rect}, scene, 60, 120, 135, 0.5)
    add({...rect, fill: 'cyan'}, scene, 150, 200)
    add(text('Hello, World'), scene, 150, 120, 45, 2)
    add({...circle}, scene, 150, 150)

    // Create another scene and insert it into the main scene
    const scene2 = beginScene(sceneWd, sceneHt, 'none')
    add({...rect}, scene2, 60, 120, 135, 0.5)
    add({...rect, fill: 'cyan'}, scene2, 150, 200)
    add(text('Hello, World'), scene2, 150, 120, 45, 2)
    add({...circle, fill: 'magenta'}, scene2, 150, 150)
    
    // Insert scene2 at half scale into master scene
    add(scene2, scene, 10, 10, 0, 0.5)

    // console.log(gxmlStr(scene))
    const w = 200
    const h = 200
</script>

{@html gxmlStr(scene)}