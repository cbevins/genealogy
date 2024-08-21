
// Step 1:  get a 'stage' onto which we can place various scenes
// A 'stage' is an outer <svg> element with width, height, and background
export function getStage(w, h, bg='white') {
    return {el: 'svg', width: w, height: h, style: `background: ${bg}`, els: []}
}

// Step 2: get a 'scene' onto which we can add props and other scenes
// A 'scene' is a collections of els enclosed by:
//      <g><svg> <rect/> <additional els> </svg></g>
// The initial <rect> under <svg> provides background, borders, etc.
// All elements within a scene use their parent <svg>'s' coordinate system
// The scene itself is placed, scaled, and rotated onto the stage
// or into other scenes using addScene()
export function getScene(width, height, fill="none",  stroke="", strokeWidth=0) {
    return {el: 'g', els: [
        {el: 'svg', width: width, height: height, els: [
            {el: 'rect', width: '100%', height: '100%', fill: fill,
                stroke: stroke, 'stroke-width': strokeWidth}
        ]}
    ]}
}

// Step 3: add some elements to the scene

// Adds one or more elements to the scene
export function addEls(scene, els) { scene.els[0].els.push(els) }

// Adds text element (and inner HTML) to the scene
export function textEl(x, y, content, anchor="middle") {
    return {el: 'text', x: x, y: y, 'text-anchor': anchor,
        els: [{el: 'inner', content: content}]}
}

// Step 4: add the scene to the stage (or into another scene)
// The scene is first cloned then its center is placed on the stage
// (or within another scene) at the stage's coordinates position,
// and then scaled, and rotated, if requested. This way, the same scene
// can be added multiple times to the stage under different transforms
export function addScene(source, dest, cx=0, cy=0, s=1, r=0) {
    // Get source scene's dimensions as required for center transform
    const svg = source.els[0]
    const transform = center(svg.width, svg.height, cx, cy, s, r)
    const clone = {...source, transform: transform}
    // If the destination is a stage...
    if (dest.el === 'svg') {
        dest.els.push(clone)
    } else if (dest.el === 'g') {
        dest.els[0].els.push(clone)
    } else {
        throw new Error('Attempt to addScene() to non-stage or non-scene')
    }
}

/**
 * Returns a 'transform' attribute that places the center of the scene
 * at position px,py on the stage
 * @param w Scene's <svg> width
 * @param h Scene's <svg> height
 * @param px Scene's parent <svg> x
 * @param py Scene's parent <svg> y
 * @param s Scale factor > 0
 * @param r Rotation degrees
 */
export function center(w, h, px, py, s=1, r=0) {
    const tx = (px - w/2) + (px - s * px) / s
    const ty = (py - h/2) + (py - s * py) / s
    return `rotate(${r} ${px} ${py}) scale(${s}) translate(${tx}, ${ty})`
}
