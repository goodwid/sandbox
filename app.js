class Node {
  constructor (val) {
    this.value = val,
    left: null,
    right: null,
    children: [this.left, this.right]
    parent: null;
  }
  add(val){
    if (val < this.value) if (!left) this.left = new Node(val);
      else return left.add(val);
    else if (!right) this.right = new Node(val);
      else return right.add(val);
    return true;
  }
  sibling(){

  }

}


var one = new Node(4);
one.add(3);
one.add()
