import { Demographics } from './Demographics.js'
import { GenerationStats } from './GenerationStats.js'
import { Lineage } from './Lineage.js'
import { Sylvan } from '../sylvan/Sylvan.js'
import { lineagePathway } from './lineagePathway.js'
import { nationalOrigins } from './nationalOrigins.js'

// import { _gedcomData } from '../gedcom/_gedcomAncestry.js'
import { _gedcomData } from '../gedcom/_gedcomDataRootsMagic.js'

const cdbKey = 'CollinDouglasBevins1952'
const hhKey = 'HannahHunter1753'
const tsKey = 'ThomasSparrow1615'
const wlbKey = 'WilliamLongfordBevins1815'

const Args = [
    ['demographics', `displays some demographics for direct ancestors of '${cdbKey}'`],
    ['generations', `display generational stats for '${cdbKey}'`],
    ['lineage', `displays lineage for '${cdbKey}'`],
    ['origins', `displays national origins for '${cdbKey}'`],
    ['pathway', `displays lineage pathway from '${cdbKey}' to '${tsKey}'`],
]

const started = new Date()
const parms = getArgs()
main()
console.log(`\nElapsed : ${(new Date()-started).toString().padStart(5)} msec`)

function getArgs() {
    const parms = {}
    if (process.argv.length < 3) {
        const msg = ['***\n*** usage: node runSylvan.js <args> where <args> are 1 or more of:']
        for(let i=0; i<Args.length; i++) msg.push(`    ${Args[i][0].padEnd(12)} : ${Args[i][1]}`)
        display(msg)
    }
    for (let i=2; i<process.argv.length; i++) {
        parms[(process.argv[i]).toLowerCase()] = true
    }
    return parms
}

function main() {
    const sylvan = new Sylvan(_gedcomData)
    if (parms.demographics) display(demographics(sylvan, cdbKey))
    if (parms.generations) display(generations(sylvan, cdbKey))
    if (parms.lineage) display(lineage(sylvan, cdbKey))
    if (parms.origins) display(origins(sylvan, cdbKey))
    if (parms.pathway) display(pathway(sylvan, cdbKey, tsKey))
}

function demographics(sylvan, subjectKey) {
    const subject = sylvan.people().find(subjectKey)
    const lineage = new Lineage(subject)
    const demog = new Demographics(lineage.persons())
    const msg = [`Demographics for '${subject.label()}' ${lineage.size()} direct ancestors:`]
    return msg.concat(demog.ageDemographics(), demog.chilrenDemographics(), demog.spouseDemographics())
}

function generations(sylvan, subjectKey) {
    const subject = sylvan.people().find(subjectKey)
    const gen = new GenerationStats(sylvan, subject)
    return gen.lines()
}

function lineage(sylvan, subjectKey) {
    const subject = sylvan.people().find(subjectKey)
    const lineage = new Lineage(subject)
    const nodes = lineage.nodesBySeq()
    const msg = [`Lineage of '${subject.label()}' ${nodes.length} direct ancestors:`]
    for (let i=0; i<nodes.length; i++) {
        const node = nodes[i]
        msg.push(''.padEnd(4*node.gen) + node.gen
            + ` ${node.person.label()} [${node.person.ageString()}] [${node.person.birthCountry()}]`)
    }
    return msg
}

function pathway(sylvan, subjectKey, targetKey) {
    const subject = sylvan.people().find(subjectKey)
    const target = sylvan.people().find(targetKey)
    const path = lineagePathway(subject, target).reverse()
    const msg = [[`Lineage pathway from ${subject.fullName()} to ${target.fullName()} has ${path.length} links:`],
        [`  0. ${subject.label()}`]]
    for (let i=0; i< path.length; i++) {
        msg.push(`  ${i+1}: ${path[i][0].fullName()} by ${path[i][1].fullName()}`)
    }
    return msg
}

function display(lines) { console.log(lines.join('\n')) }

function origins(sylvan, nameKey) {
    const person = sylvan.people().find(nameKey)
    let msg = [`National Origins for ${person.label()}`]
    const map = nationalOrigins(person)
    const ar = Array.from(map).sort((a,b) => { return b[1] - a[1]})
    for (let i=0; i<ar.length; i++) {
        const [country, value] = ar[i]
        msg.push(`${country.padEnd(16)} ${value.toFixed(6)}`)
    }
    return msg
}
