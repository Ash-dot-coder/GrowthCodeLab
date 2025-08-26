class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }

    return false;
  }

  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }

    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx2
      );

      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx) {
    if (!this.adjacencyList[vtx]) return undefined;

    for (let neighbor of this.adjacencyList[vtx]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    delete this.adjacencyList[vtx];
    return this;
  }
}

let g = new Graph();

// -------------------------
// g.addVertex("c");
// g.addVertex("d");
// g.addEdge("c", "d");
// console.log(g);
// -------------------------

// -------------------------
// g.addVertex("O");
// g.addVertex("P");
// g.addVertex("Q");
// g.addEdge("O", "P");
// g.addEdge("P", "Q");
// g.addEdge("Q", "O");
// console.log(g);
// g.removeEdge("O", "P");
// console.log(g);
// -------------------------

// -------------------------
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("A", "D");
// g.addEdge("B", "D");
// g.addEdge("C", "D");
// console.log(g);
// g.removeVertex("D");
// console.log(g);
// -------------------------

g.addVertex("U");
g.addVertex("K");
g.addVertex("L");
g.addEdge("U", "K");
g.addEdge("U", "K");
g.addEdge("U", "L");
g.addEdge("K", "L");
g.addEdge("K", "U");
g.addEdge("L", "U", "K");
console.log(g);
g.removeVertex("K", "U");
console.log(g);
g.removeEdge("L");
console.log(g);
