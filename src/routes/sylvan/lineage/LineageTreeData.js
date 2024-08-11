/**
 * Creates a nested array of node objects.
 */
export class LineageTreeData {
    constructor(rootPerson, startGen=0, startSeq=1) {
        this.rootPerson = rootPerson // reference to the root's Person instance
        this.count = 0
        // reference to the root's lineage {node} instance
        this.rootNode = this._construct(rootPerson, startGen, startSeq, null)
    }

    treeData() { return [ this.rootNode ] }

    _construct(person, gen, seq, offspring) {
        const node = {
            person: person,         // subject's Person instance
            name: person.fullName(),// displayed in the TreeView
            offspring: offspring,   // subject's descendant's {node} instance
            children: [],           // father and mother Persons (if known)
            gen: gen,           // subject's generation index (root===0)
            seq: seq,           // subject's lineage sequence (root==1, father==2, mother==3)
        }
        if (person.father()) {
            node.children.push(this._construct(person.father(), gen+1, seq*2, node))
        }
        if (person.mother()) {
            node.children.push(this._construct(person.mother(), gen+1, seq*2+1, node))
        }
        this.count++
        return node
    }
}
