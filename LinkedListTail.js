class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedListTail {
    constructor(){
        this.head = null
        this.size = 0
        this.tail = null
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    // O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    print(){
        if(this.isEmpty()) {
            console.log("The list is empty.")
        }
        else {
            let curr = this.head
            let listValues = ""
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

module.exports = LinkedListTail;


// const list = new LinkedList();

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()
// list.removeFromFront()
// list.print()
// list.removeFromEnd()
// list.print()