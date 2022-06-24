/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    // insert a node at the beginning of a list

    // make a new Node with the value given
    const node = new Node(value);
    // make the new Node's .next point at the current head
    node.next = this.head;
    // reassign the head to the new node
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    // traverse the entire list until I find the one whose next is null

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // when I find that one, make the next my new node
    currentNode.next = node;


    // make my new node's next null - already done

  }

  includes(value) {
    // takes in a value and returns true if that value is in the list otherwise returns false

    if (!this.head) {
      return false;
    }

    // loop through our linked list to see if the value is there
    let currentNode = this.head;
    while (currentNode !== null) {
      // if we find it, return true
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
    // if we don't, return false

  }

  toString() {
    // make an array of all of the values
    // "{a} -> {b} -> {c} -> null"

    // edge case - one node
    // TODO: this will not catch one node - we need to deal with this
    let newString = '';

    let current = this.head;

    if (!this.head) {
      return 'NULL';
    }

    newString = `{${this.head.value}} -> `;

    while (current.next) {
      current = current.next;
      newString += `{${current.value}} -> `;
    }

    newString += `NULL`;

    return newString;
  }
}



function addLL(L1, L2) {
  let num1 = [];
  let num2 = [];
  let finalNum = 0;
  let current1 = L1.head;
  let current2 = L2.head;
  num1.unshift(L1.head.value);
  num2.unshift(L2.head.value);

  while (current1.next) {
    num1.unshift(current1.next.value);
    current1 = current1.next;
  }

  while (current2.next) {
    num2.unshift(current2.next.value);
    current2 = current2.next;
  }

  num1 = Number(num1.join(''));
  num2 = Number(num2.join(''));
  finalNum = num1 + num2;

  finalNum = finalNum.toString().split('');
  console.log({ finalNum });

  const sumList = new LinkedList();

  finalNum.forEach(num => {
    sumList.insert(num);
  });

  return sumList;
}

const list1 = new LinkedList();
list1.insert(5);
list1.insert(8);
list1.insert(6);

const list2 = new LinkedList();
list2.insert(1);
list2.insert(2);
list2.insert(3);

// console.log({ list1 })
const addLinkedList = addLL(list1, list2);

console.log({ addLinkedList })
