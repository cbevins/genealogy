import { Sylvan } from '$lib/sylvan/Sylvan.js'
import { _gedcomData } from '$lib/gedcom/_gedcomDataRootsMagic.js'

// BE SURE TO DEREFERENCE VALUE USING '$subjectNameKey'
import { subjectPerson } from '$lib/sylvan/store.js'

export const __Singletons = {
    personSelectors: null,
    sylvan: null
}

export function getPersonSelectors() {
    if (! __Singletons.sylvan) getSylvan()
    return __Singletons.personSelectors
}
// export function setPersonSelectors(personSelectors) { __Singletons.personSelectors = personSelectors }

export function getSylvan() {
    if (! __Singletons.sylvan) {
        const started = new Date()

        // Create SYlvan and persons list
        __Singletons.sylvan = new Sylvan(_gedcomData)
        __Singletons.personSelectors = __Singletons.sylvan.people().selectors()
        
        // Set initial subjectPerson
        const person = __Singletons.sylvan.people().find('CollinDouglasBevins1952')
        subjectPerson.update(() => person)

        console.log(`Created new Sylvan and PersonSelector in `, new Date()-started, 'msec with', person.label())
    }
    return __Singletons.sylvan 
}
// export function setSylvan(sylvan) { __Singletons.sylvan = sylvan }
