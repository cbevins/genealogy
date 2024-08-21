<script>
	import { createEventDispatcher } from 'svelte'
    
    const colorToggled = 'green'
    const colorUntoggled = 'gray'

    const strokeInactive = 'black'
    const strokeHighlight = 'pink'
    const strokePressed = 'red'

    $: strokeColor = strokeInactive
    $: bgcolor = colorUntoggled
    $: toggled = false
    $: label = "Off"

    function doToggle() {
        toggled = ! toggled
        label = toggled ? 'On' : 'Off'
        bgcolor = toggled ? colorToggled : colorUntoggled
    }

    // These are used only to provide table data on positions
    let x ={clientX: '0', clientY: '0'}
    let b = {...x}  // blur
    let c = {...x}  // click
    let f = {...x}  // focus
    let fi = {...x} // focus in
    let fo = {...x} // focus out
    let md = {...x}
    let me = {...x}
    let ml = {...x}
    let mm = {...x}
    let mo = {...x}
    let mu = {...x}
    let mv = {...x}
    let pc = {...x} // pointer cancel
    let pd = {...x} // pointer down
    let pe = {...x} // pointer enter
    let pl = {...x} // pointer leave
    let pm = {...x} // pointer move
    let po = {...x} // pointer out
    let pu = {...x} // pointer up
    let pv = {...x} // pointer over

    // Mouse and Pointer event labels
    const events = ['*down', '*enter', '*leave', '*move', '*out', '*up', '*over']

    // Mouse and pointer event coordinates
    $: mpCoords = [
        [md, me, ml, mm, mo, mu, mv],
        [pd, pe, pl, pm, po, pu, pv]
    ]
    // Focus event coordinates for blur (b), focus (f), focusin (fi), focusout (fo), pc
    const fevents = ['blur', 'focus', 'focusin', 'focusout']
    $: fCoords = [b, f, fi, fo]
    console.clear()

    function efmt(e) {
        return `type: ${e.type}, clientX: ${e.clientX.toFixed(0)}, clientY: ${e.clientY.toFixed(0)}`
    }
    function fmt(val, dec=2) { return parseFloat(val).toFixed(dec) }

    /*
        Event firing sequence (* indicates bubbles=true)

        - pointer first enters element:
        pointerover*
        pointerenter
        mouseover*
        mouseenter

        - pointer/mouse is pressed and released over the element
        pointerdown*
        mousedown*
        focus
        focusin*
        pointerup*
        mouseup*

        - pointer/mouse is moved outside the element
        pointerout*
        pointerleave
        mouseout*
        mouseleave

        - pointer/mousse is pressed outside the element
        blur
        focusout*
    */

    // --------------------------
    // Focus events
    // --------------------------

    // 'blur' fires when element loses focus, before the 'focusout' event, but DOES NOT BUBBLE (opposite of 'focus')
    function blur(e) {
        b = e
        console.log(e.type, e)
    }
    // 'focus' fires when element recieves focus, BEFORE the 'focusin' event, and DOES NOT BUBBLE (opposite of 'blur')
    function focus(e) {
        f = e
        console.log(e.type, e)
    }
    // 'focusin' fires when element recieves focus, AFTER the 'focus' event, and BUBBLEs
    function focusin(e) {
        fi = e
        console.log(e.type, e)
    }
    // 'focusout' fires when element loses focus, AFTER the 'blur' event, and BUBBLEs
    function focusout(e) {
        fo = e
        console.log(e.type, e)
    }

    // --------------------------
    // Pointer device events
    // --------------------------

    // Click sequence

    // An element receives a click event when any of the following occurs:
    // - a pointing-device button (such as a mouse's primary button) is both pressed and released while the pointer is located inside the element.
    // - a touch gesture is performed on the element
    // - the Space key or Enter key is pressed while the element is focused
    // If the button is pressed on one element and the pointer is moved outside the element
    // before the button is released, the event is fired on the most specific ancestor element
    // that contained both elements.
    // 'click' fires after both the 'mousedown' and 'mouseup' events have fired, in that order.
    // The event is a device-independent event — meaning it can be activated by touch, keyboard,
    // mouse, and any other mechanism provided by assistive technology.
    function click(e) {
        c = e
        console.log('CLICKED', e.type, e)
    }

    // The 'mousedown' event is fired at an Element when a pointing device button is pressed
    // while the pointer is inside the element.
    // Note: This differs from the 'click' event in that 'click' is fired after a full click action occurs;
    // that is, the mouse button is pressed and released while the pointer remains inside the same element.
    // 'mousedown' is fired the moment the button is initially pressed.
	function mousedown(e) { md = e }
	function mouseenter(e) { me = e }

    // The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse)
    // is moved out of it.
    // 'mouseleave' and 'mouseout' are similar but differ in that 'mouseleave' does not bubble and 'mouseout' does.
    // This means that 'mouseleave' is fired when the pointer has exited the element and all of its descendants,
    // whereas 'mouseout' is fired when the pointer leaves the element or leaves one of the element's descendants
    // (even if the pointer is still within the element).
	function mouseleave(e) { ml = e }
	function mousemove(e) { mm = e }
    // The 'mouseout' event BUBBLES
	function mouseout(e) { mo = e }
	function mouseover(e) { mv = e }
	function mouseup(e) { mu = e }

	// The 'pointercancel' event is fired when the browser determines that there are unlikely
    // to be any more pointer events, or if after the pointerdown event is fired,
    // the pointer is then used to manipulate the viewport by panning, zooming, or scrolling.
    function pointercancel(e) {
        pc = e
        console.log(e.type, e)
    }

    // The 'pointerdown' event is fired when a pointer becomes active (before the 'mousedown')
    // For mouse, it is fired when the device transitions from no buttons pressed to at least one button pressed.
    // For touch, it is fired when physical contact is made with the digitizer.
    // For pen, it is fired when the stylus makes physical contact with the digitizer.
    // Note: For touchscreen browsers that allow direct manipulation, a pointerdown event triggers
    // *implicit pointer capture*, which causes the target to capture all subsequent pointer events
    // as if they were occurring over the capturing target.
    // Accordingly, 'pointerover', 'pointerenter', 'pointerleave', and 'pointerout' will not fire
    // as long as this capture is set.
    // The capture can be released manually by calling element.releasePointerCapture on the target element,
    // or it will be implicitly released after a 'pointerup' or 'pointercancel' event.
    function pointerdown(e) {
        strokeColor = strokePressed
        pd = e
    }
	function pointerenter(e) {
        strokeColor = strokeHighlight
        pe = e
    }
	function pointerleave(e) {
        strokeColor = strokeInactive
        pl = e
    }
	function pointermove(e) { pm = e }
	function pointerout(e) {
        strokeColor = strokeInactive
        po = e
    }
	function pointerover(e) {
        strokeColor = strokeHighlight
        pv = e
    }
    
    // The 'pointerup' event is fired when a pointer is no longer active.
    // Remember that it is possible to get a 'pointercancel' event instead.
	function pointerup(e) {
        strokeColor = strokeHighlight
        doToggle()
        pu = e
    }

    function input(e) {
        console.log(e.type, e.key)
    }

    function keydown(e) {
        console.log(e.type, e.key)
    }

    function keyup(e) {
        console.log(e.type, e.key)
    }
</script>

<div>
    <h2 class="mb-3 text-2xl font-semibold leading-tight">SVG Element Events</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100"
        id="sampleSvgButton"
        role="button"
        tabindex="0"
        on:blur={blur}
        on:click={click}
        on:focus={focus}
        on:focusin={focusin}
        on:focusout={focusout}
        on:input={input}
        on:keydown={keydown}
        on:keyup={keyup}
        on:mousedown={mousedown}
        on:mouseenter={mouseenter}
        on:mouseleave={mouseleave}
        on:mousemove={mousemove}
        on:mouseout={mouseout}
        on:mouseover={mouseover}
        on:mouseup={mouseup}
        on:pointercancel={pointercancel}
        on:pointerdown={pointerdown}
        on:pointerenter={pointerenter}
        on:pointerleave={pointerleave}
        on:pointermove={pointermove}
        on:pointerout={pointerout}
        on:pointerover={pointerover}
        on:pointerup={pointerup}>
        <rect x='0' y='0' width='200' height='100'
            fill={bgcolor} stroke={strokeColor} stroke-width="4"/>
        <text x="100" y="60" text-anchor="middle">{label}</text>
        <svg width="200" height="200" viewBox="0 0 200 200" id="star">
            <title>Five Pointed Star</title>
            <path fill="red" stroke="#000" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
        </svg>
    </svg>
</div>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<div class="overflow-x-auto">
        <table class="w-128 rounded-lg border-collapse bg-amber-500">
			<thead class=" dark:bg-red-700">
                <tr class="text-center text-lg">
                    <th class="p-2 text-left font-semibold text-right">Mouse<br>Pointer<br>Event</th>
                    <th class="p-2 text-left font-semibold text-right">Mouse<br>X</th>
                    <th class="p-2 text-left font-semibold text-right">Mouse<br>Y</th>
                    <th class="p-2 text-left font-semibold text-right">Pointer<br>X</th>
                    <th class="p-2 text-left font-semibold text-right">Pointer<br>Y</th>
                </tr>
            </thead>
            <tbody>
                {#each events as event, e}
                <tr class="border-t border-opacity-80 dark:border-gray-300 dark:bg-gray-100">
                    <td class="px-2 text-left font-semibold text-right">{event}</td>
                    <td class="px-2 text-left font-semibold text-right">{fmt(mpCoords[0][e].clientX)}</td>
                    <td class="px-2 text-left font-semibold text-right">{fmt(mpCoords[0][e].clientY)}</td>
                    <td class="px-2 text-left font-semibold text-right">{fmt(mpCoords[1][e].clientX)}</td>
                    <td class="px-2 text-left font-semibold text-right">{fmt(mpCoords[1][e].clientY)}</td>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<div class="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
	<div class="overflow-x-auto">
        <table class="w-128 rounded-lg border-collapse bg-amber-500">
			<thead class=" dark:bg-red-700">
                <tr class="text-center text-lg">
                    <th class="p-2 text-left font-semibold text-right">Focus</th>
                    <th class="p-2 text-left font-semibold text-right">X</th>
                    <th class="p-2 text-left font-semibold text-right">Y</th>
                </tr>
            </thead>
            <tbody>
                {#each fevents as fevent, f}
                <tr class="border-t border-opacity-80 dark:border-gray-300 dark:bg-gray-100">
                    <td class="px-2 text-left font-semibold text-right">{fevent}</td>
                    <td class="px-2 text-left font-semibold text-right">{f}</td>
                    <td class="px-2 text-left font-semibold text-right">{fmt(fCoords[f].clientY)}</td>
                {/each}
            </tbody>
        </table>
    </div>
</div>
