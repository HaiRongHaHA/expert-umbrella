function liseNode() {
  const data = [];
  const next = [];

  function addNode(index, p, val) {
    next[p] = next[index];

    next[index] = p;

    data[p] = val;
  }

  let head = 3;
  data[3] = "a";

  addNode(3, 5, "b");
  addNode(5, 7, "c");
  addNode(7, 1, "d");
  addNode(3, 0, "e");

  console.log('data',data);
  console.log('next',next);
}
liseNode()

/*
  data[3] = 'a'

  next[5] = next[3] = undefined
  next[3] = 5
  data[5] = 'b'

  next[7] = next[5] = undefined
  next[5] = 7
  data[7] = 'c'

  next[1] = next[7] = undefined
  next[7] = 1
  data[1] = 'd'


  next[0] = next[3] = 5
  next[3] = 0
  data[0] = 'e'

  data = ['e','d','a',x,'b',x,'c']
  next = [5,x,x,0,x,7,x,1]
*/
