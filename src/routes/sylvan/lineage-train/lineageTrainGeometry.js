// Determines year, channel, and generation ranges for the array of Channels nodes
export function nodeRanges(nodes) {
    let chanMin = 9999
    let chanMax = 0
    let genMin = 9999
    let genMax = 0
    let birthMin = 9999
    let birthMax = 0
    for (let i=0; i<nodes.length; i++) {
        const node = nodes[i]
        birthMax = Math.max(birthMax, node.birthYear)
        birthMin = Math.min(birthMin, node.birthYear)
        chanMax = Math.max(chanMax, node.channel)
        chanMin = Math.min(chanMin, node.channel)
        genMax = Math.max(genMax, node.gen)
        genMin = Math.min(genMin, node.gen)
    }
    return [birthMin, birthMax, chanMin, chanMax, genMin, genMax]
}

/**
 * Determines the geometry of the Lineage Train poster content region, which contains:
 * - an upper timeline of 1 channel height,
 * - a chart of n channels by y years, and
 * - a lower timeline of 1 channel height,
 * @param {array} nodes 
 * @returns {geom}
 */
export function lineageTrainGeometry(nodes) { // width=1000, height=2000) {
    // Preset parameters on which all others are calculated
    
    // SVG width and height basis
    // The native diameter of the flag pin serves as the basis of all poster content units
    const basis = 100
    const chanPad = 0               // padding between channels
    const chanHt = basis + chanPad  // channel (row) height
    const yearWd = basis / 5        // the flag pin spans 5 years horizonatlly
    const yearsPerTic = 10          // years per column tic mark

    const addYears = 30             // number of years to add to max birth year
    const femaleColor = "magenta"
    const maleColor = "blue"
    const fontSize = 10
    const timelineHt = chanHt

    // Determine range of years, channels, generations
    const [birthMin, birthMax, chanMin, chanMax, genMin, genMax] = nodeRanges(nodes)
    const yearMax = Math.trunc((birthMax+addYears) / yearsPerTic) * yearsPerTic
    const yearMin = Math.trunc((birthMin-1) / yearsPerTic) * yearsPerTic

    const geom = {
        addYears: addYears,
        birthMax: birthMax,
        birthMin: birthMin,
        birthYears: birthMax - birthMin + 1,
        chanHt: chanHt,
        chanMax: chanMax,
        chanMin: chanMin,
        channels: chanMax - chanMin + 1,
        diam: basis,
        femaleColor: femaleColor,
        fontSize: fontSize,
        genMax: genMax,
        genMin: genMin,
        gens: genMax - genMin + 1,
        maleColor: maleColor,
        nodes: nodes.sort((a, b) => { return a.seq - b.seq }),
        radius: basis / 2,      // 0.4 * rowHt,
        timelineHt: timelineHt,
        trackWidth:  0.2 * chanHt,
        yearMax: yearMax,
        yearMin: yearMin,
        years: yearMax - yearMin,
        yearsPerTic: yearsPerTic,
        yearWd: yearWd,
        // Calculate final sizes based on year and channel ranges
        rows: chanMax - chanMin + 3,     // 1 extra chanHt padding at top and bottom for links
        chartHt: (chanMax - chanMin + 3) * chanHt,
        fullHt: (chanMax - chanMin + 1) * chanHt + 2 * timelineHt,
        fullWd: (yearMax - yearMin) * yearWd,
    }

    // Function that returns x-coordinate given the calendar year
    geom.yearX = function (year) { return (year - this.yearMin) * this.yearWd }
    // Function that returns y-coordinate given a channel index
    geom.chanY = function (chanIdx) { return (chanIdx-this.chanMin+1) * this.chanHt + this.timelineHt }
    // Function that returns the person's gender color
    geom.color = function (node) { return node.person.isFemale() ? geom.femaleColor : geom.maleColor }

    positionNode(geom, geom.nodes[0])
    return geom
}

// Adds each node's prop.x and prop.y properties
function positionNode(geom, node) {
    // traverse to the end
    if (node.father) positionNode(geom, node.father)
    if (node.mother) positionNode(geom, node.mother)
    node.x = geom.yearX(node.birthYear)
    node.chany = geom.chanY(node.channel)
    node.y = node.chany
    if (node.father && node.mother) {
        node.y = (node.father.y + node.mother.y) / 2
        console.log(`Changed y from ${node.chany} to ${node.y})`)
    }
}
