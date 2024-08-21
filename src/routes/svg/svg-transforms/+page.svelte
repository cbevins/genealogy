<script>
	import { gxmlStr } from "$lib"
    import {getStage, getScene, addEls, textEl, addScene, center } from './svg.js'
console.clear()
const stage = getStage(700, 500, 'grey')

// Stage with midlines and center pt
const scene1 = getScene(500, 400, 'green', 'black', 1)
const circle = {el: 'circle', cx: '50%', cy: '50%', r: '2%', fill: 'yellow'}
const vline = {el: 'line', x1: '50%', y1: 0, x2: '50%', y2: '100%', stroke: 'black'}
const hline = {el: 'line', x1: 0, y1: '50%', x2: '100%', y2: '50%', stroke: 'black'}
addEls(scene1, [circle, hline, vline])

// Outer circle with nested inner circle
const outerCircle = getScene(250, 200)
addEls(outerCircle, {el: 'circle', id: 'outer', cx: '50%', cy: '50%', r: '50%', fill: 'magenta'})
// nested inner circles
const innerCircle = getScene(250, 200)
addEls(innerCircle, {el: 'circle', id: 'inner', cx: '50%', cy: '50%', r: '50%', fill: 'cyan'})
addScene(innerCircle, outerCircle, 62.5, 62.5, 0.5)

// nest outer circle in scene
addScene(outerCircle, scene1, 125, 100)

addScene(scene1, stage, 350, 250, 1, 45)
console.log(scene1)
</script>
Hello
{@html gxmlStr(stage)}
<hr>
Not Using DEFS
<svg width="700" height="500" style="background: grey">
    <g transform={center(500, 400, 350, 250, 1, 45)}>
        <svg id="scene-1" width="500" height="400">
            <!-- so add a <rect> to define its dimensions and backdrop -->
            <rect width="100%" height="100%" fill="green" stroke="black"/>
            <circle cx="50%" cy="50%" r="2%" fill="yellow"/>
            <text x="50%" y="50%" text-anchor="middle">Outer Scene</text>
            <g>
            <svg width="50%" height="50%">
                <circle cx="50%" cy="50%" r="50%" fill="magenta"/>
                <g>
                <svg width="50%" height="50%">
                    <circle cx="50%" cy="50%" r="50%" fill="cyan"/>
                </svg>
                </g>
            </svg>
            </g>
            <!-- <svg> midlines -->
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" />
        </svg>
        <g transform={center(500, 400, 350, 250, 0.5, 135)}>
            <svg id="scene-1" width="500" height="400">
                <!-- so add a <rect> to define its dimensions and backdrop -->
                <rect width="100%" height="100%" fill="green" stroke="black"/>
                <circle cx="50%" cy="50%" r="2%" fill="yellow"/>
                <text x="50%" y="50%" text-anchor="middle">Outer Scene</text>
                <svg width="50%" height="50%">
                    <circle cx="50%" cy="50%" r="50%" fill="magenta"/>
                    <svg width="50%" height="50%">
                        <circle cx="50%" cy="50%" r="50%" fill="cyan"/>
                    </svg>
                </svg>
                <!-- <svg> midlines -->
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" />
        </svg>
    </g>
    </g>
</svg>
<hr>
Using DEFS
<svg width="700" height="500" style="background: grey">
    <defs>
        <!-- style attribute is ignored on the following <svg> -->
        <svg id="scene-1" width="500" height="400">
            <!-- so add a <rect> to define its dimensions and backdrop -->
            <rect width="100%" height="100%" fill="green" stroke="black"/>
            <circle cx="50%" cy="50%" r="2%" fill="yellow"/>
            <text x="50%" y="50%" text-anchor="middle">Outer Scene</text>
            <svg width="50%" height="50%">
                <circle cx="50%" cy="50%" r="50%" fill="magenta"/>
                <svg width="50%" height="50%">
                    <circle cx="50%" cy="50%" r="50%" fill="cyan"/>
                </svg>
            </svg>
            <!-- <svg> midlines -->
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" />
        </svg>
    </defs>
    <!-- center(width, height, parentX, parentY, scale, rot) -->
    <g transform={center(500, 400, 350, 250, 1, 45)}>
        <use href="#scene-1"/>
        <g transform={center(500, 400, 350, 250, 0.5, 135)}>
            <use href="#scene-1"/>
        </g>
    </g>
    <!-- <svg> midlines -->
    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="blue" />
    <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="blue" />
</svg>
