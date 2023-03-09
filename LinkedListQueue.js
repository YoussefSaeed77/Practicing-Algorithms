const LinkedListTail = require(`./LinkedListTail`)

class LinkedListQueue {
    constructor(){
        this.list = new LinkedListTail()
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.size === 0
    }
    getSize(){
        return this.list.size
    }
    print(){
        return this.list.print()
    }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.getSize())
queue.dequeue()
queue.print()
console.log(queue.peek())