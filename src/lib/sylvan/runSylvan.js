import { Sylvan } from './Sylvan.js'
import { intFmt } from '../helpers/formatters.js'
import { personProfile } from './personProfile.js'
import { reviewAll } from './sylvanReviews.js'
import { _gedcomData } from '../gedcom/_gedcomDataRootsMagic.js'

const wlbKey = 'WilliamLongfordBevins1815'

const Args = [
    ['personlist', `displays list of all peron labels for use in a PersonSelector Combobox`],
    ['profile', `displays Person profile for '${wlbKey}'`],
    ['summary', `displays Sylvan records summary`],
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
    if (parms.personlist) console.log(JSON.stringify(personlist(sylvan), null, 2))
    if (parms.profile) display(profile(sylvan, wlbKey))
    if (parms.summary) display(summary(sylvan))
}

function personlist(sylvan) {
    const people = sylvan.people()
    const options = []
    let id = 0
    for (const [gedKey, person] of people.gedKeyMap().entries()) {
        options.push({index: id++, gedkey: gedKey, label: person.label()})
    }
    return options
}

function display(lines) { console.log(lines.join('\n')) }

// Illustrates how to hydrate the entire GEDCOM Tree
function profile(sylvan, nameKey) {
    const person = sylvan.people().find(nameKey)
    return personProfile(person)
}

function summary(sylvan) {
    const reviews =  reviewAll(sylvan)
    return [`Sylvan Summary`,
        `GEDCOM    : ${sylvan.source()}`,
        `Created   : ${sylvan.created()}`,
        `People    : ${intFmt(sylvan.people().size(), 6)}`,
        `Places    : ${intFmt(sylvan.places().size(), 6)}`,
        `Families  : ${intFmt(sylvan.families().size(), 6)}`,
        `Locations : ${intFmt(sylvan.locations().size(), 6)}`,
        `Reviews   : ${intFmt(reviews.length, 6)}`,
        `Top Levels: ${intFmt(sylvan.topLevels().length, 6)}`,
        `Contexts  : ${intFmt(sylvan.contexts().length, 6)}`]
}
