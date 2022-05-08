// Implementation With : https://namu.wiki/w/힙%20트리, https://www.geeksforgeeks.org/binary-heap/
class Heap {
  queue: number[];
  heapSize: number;
  constructor(capacity: number = 200) {
    this.queue = new Array(capacity);
    this.heapSize = 0;
  }
  parent(index: number) {
    return Math.floor((index - 1) / 2);
  }
  left(index: number) {
    return index * 2 + 1;
  }
  right(index: number) {
    return index * 2 + 2;
  }
  swap(aIndex: number, bIndex: number) {
    const tmp = this.queue[bIndex];
    this.queue[bIndex] = this.queue[aIndex];
    this.queue[aIndex] = tmp;
  }
  insertItem(item: number) {
    if (this.queue.length === this.heapSize) {
      console.log("Maxed Heap Size");
      return;
    }
    if (this.heapSize === 0) {
      this.queue[0] = item;
      this.heapSize += 1;
    }
    let index = this.heapSize;
    this.queue[index] = item;
    this.heapSize += 1;

    while (index !== 0 && this.queue[index] < this.queue[this.parent(index)]) {
      // Swap
      console.log({
        queue: this.queue,
        parentIndex: this.parent(index),
        parentVal: this.queue[this.parent(index)],
        currIndex: index,
        currVal: this.queue[index],
      });
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }
  popItem() {
    if (this.heapSize === 0) {
      console.log("No Exist Items, Heap is Empty");
      return;
    } else {
      const root = this.queue[0];
      this.queue[0] = this.queue[this.heapSize - 1];
      this.queue[this.heapSize - 1] = Infinity;
      this.heapSize -= 1;
      this.minHeapify(0);
      return root;
    }
  }
  minHeapify(index: number) {
    // Find Smallest Element and reorder
    const leftChild = this.left(index);
    const rightChild = this.right(index);
    let smallest = index;
    if (
      leftChild < this.heapSize &&
      this.queue[leftChild] < this.queue[index]
    ) {
      smallest = leftChild;
    }
    if (
      rightChild < this.heapSize &&
      this.queue[rightChild] < this.queue[smallest]
    ) {
      smallest = rightChild;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.minHeapify(smallest);
    }
  }
}
const array = [3, 5, 1, 2, 2, 3, 10, 6, 7, 7, 8, 9];
const minHeap = new Heap();
array.forEach((value: number) => {
  minHeap.insertItem(value);
});
for (let i = 0; i <= array.length; i++) {
  console.log(minHeap.popItem(), minHeap.queue);
}
