const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}
	
	append(data) {
		var node = new Node(data),
			currentNode = this.head;
		if (!this.length){
			this._head = node;
			this._tail = node;
		}
		
		if (this.length)
		{
			this._tail.next = node;
			node.prev = this._tail;
			this._tail = node;
		} else {
			this._head = node;
			this._tail = node;
		}
		this.length++;
		return this;
	}

    head() {
		var currentNode = this._head;
		return currentNode.data;
	}

    tail() {
		var currentNode = this._tail;
		return currentNode.data;
	}

    at(index) {
		var currentNode = this._head,
			length = this.length,
			count = 0;
			while (count < index) {
				currentNode = currentNode.next;
				count++;
			}
			return currentNode.data;			
	}

    insertAt(index, data) {
		var node = new Node(data),
			currentNode = this._head,
			length = this.length,
			bNode = null,
			aNode = null,
			count = 1;
		if (this.length > 0){
			while (count < index) {
				currentNode = currentNode.next;
				count++;
			}
		bNode = currentNode;
		aNode = currentNode.next;
		currentNode.next = node;
		node.next = aNode;
		aNode.prev = node;
		node.prev = bNode;
		this.length++;
		return node.data;
		} else {
			this._head = node;
			this._tail = node;
		}
	}

    isEmpty() {
	var length = this.length;
		if (!this.length) {
			return true;
		} else {
			return false;
		}
		
	}

    clear() {
		var currentNode = this._head;
		var node2 = this._tail;
		if (this.length > 1){
			currentNode.data = null;
			node2.data = null;
			this.length = 0;
		} else {
			this.length = 0;
		}
		return this;
	}

    deleteAt(index) {
		var currentNode = this._head,
			count = 0,
			length = this.length,
			bNode = null,
			aNode = null,
			noteDel = null;
			if (index === 0){
				this._head = currentNode.next;
				this._tail = null;
				this.length--;
			} else {
		while (count < index){
			currentNode = currentNode.next;
			count++;
		}
		bNode = currentNode.prev;
		noteDel = currentNode;
		aNode = currentNode.next;
		bNode.next = aNode;
		aNode.prev = bNode;
		noteDel = null;
		this.length--;
		}
		return this;
	}

    reverse() {
		var node1 = this._head,
			node2 = this._tail,
			length = this.length,
			count = 0,
			temp = 0,
			n = 0;
			n = length/2;
			if (length > 1){
				while (count < n){
					temp = node1.data;
					node1.data = node2.data;
					node2.data = temp;
					node1 = node1.next;
					node2 = node2.prev;
					count++;
				}
			} 
			return this;
	}

    indexOf(data) {
		var currentNode = this._head,
			length = this.length,
			count = 0,
			error = -1,
			check = 0;
		while (count < length){
			if (currentNode.data === data) {
				check = 1;
				return count;
			}
			currentNode = currentNode.next;
			count++;
	}
	if (check === 0){
		return error;
	}
}

}
module.exports = LinkedList;
