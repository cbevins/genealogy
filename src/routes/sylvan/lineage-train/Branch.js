export class Branch {
    constructor(rootNode, branchNode) {
        this.rootNode = rootNode
        this.branchNode = branchNode
        this.nodes = []
        this.maxChannel = 0
        this.setBranch(rootNode, branchNode)
    }

    nodesBySeq() { this.nodes }

    // rootNode and branchNode are members of a Channels.nodes
    prune(rootNode, branchNode) {
        this.nodes = []
        // Traverse backwards for offspring and spouses
        let parent = branchNode
        while(parent.child) {
            if (parent.child.father !== parent) {
                parent.child.father = null
            } else if (parent.child.mother !== parent) {
                parent.child.mother = null
            }
        }
        // Now traverse from root
    }

    setBranch(rootNode, branchNode) {
        this.traverse(rootNode, branchNode)
        // TODO - find maximum channel and add to it

        // Traverse backwards for offspring and spouses
        let parent = branchNode
        while(parent.child) {
            this.nodes.push(parent.child)
            if (parent.child.father !== parent) {
                parent.child.father.inBranch = true
                parent.child.father.channel = ++this.maxChannel
                this.nodes.push(parent.child.father)
            }
            if (parent.child.mother !== parent) {
                parent.child.mother.inBranch = true
                parent.child.mother.channel = ++this.maxChannel
                this.nodes.push(parent.child.mother)
            }
            parent.child.inBranch = true
            parent = parent.child
        }
        // Nodes must be sorted by channel-seq for positioning to work
        this.nodes.sort((a, b) => {
            const dc = a.channel - b.channel
            if (dc !== 0) return dc
            return a.seq - b.seq })
    }

    show() {
        for(let i=0; i<this.nodes.length; i++) {
            const node = this.nodes[i]
            console.log('show', i, node.seq, node.channel, node.person.label())
        }
    }

    traverse(node, branchNode, channel=0, inBranch=false) {
        let chan = channel
        node.channel = channel // channel used to connect this {node} with its child {node}
        if (! inBranch) inBranch = (node === branchNode)
        node.inBranch = inBranch
        if (inBranch) this.maxChannel = Math.max(channel, this.maxChannel)
        if (node.inBranch) this.nodes.push(node)
        if (node.father) {
            chan = this.traverse(node.father, branchNode, channel, inBranch)
            if (node.mother) {
                chan = this.traverse(node.mother, branchNode, chan+1, inBranch)
            }
        } else if (node.mother) {
            chan = this.traverse(node.mother, branchNode, channel, inBranch)
        }
        return chan
    }
}
