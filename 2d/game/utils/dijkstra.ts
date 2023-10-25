import graphData from '../../data/graph-pipe.json';

export type Graph = {
  nodes: Record<
    string,
    {
      id: string;
    }
  >;
  edges: Record<
    string,
    {
      id: string;
      from: string;
      to: string;
      weight: number;
    }
  >;
};

export function dijkstraMaxPath(graph: Graph, startNodeId: string, endNodeId: string) {
  const nodes = Object.values(graph.nodes);
  const edges = Object.values(graph.edges);

  const distances = nodes.reduce((accumulated, node) => {
    accumulated[node.id] = -Infinity;
    return accumulated;
  }, {} as Record<string, number>);
  distances[startNodeId] = 0;

  const visitedNodes = new Set<string>();
  while (visitedNodes.size != nodes.length) {
    const currentNodeId = Object.entries(distances)
      .filter(([nodeId]) => !visitedNodes.has(nodeId))
      .reduce((min, [nodeId, distance]) =>
        distance > distances[min[0]] ? [nodeId, distance] : min
      );

    visitedNodes.add(currentNodeId[0]);

    edges
      .filter(({ from }) => from === currentNodeId[0])
      .forEach(({ to, weight }) => {
        const newDistance = distances[currentNodeId[0]] + weight;
        if (newDistance > distances[to]) {
          distances[to] = newDistance;
        }
      });
  }

  return distances[endNodeId];
}
