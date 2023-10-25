import { mainScene } from '..';
import graphData from '../../data/graph-pipe.json';
import { Graph, dijkstraMaxPath } from './dijkstra';

function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

function comparePaths() {
  const originalGraph = graphData as Graph;
  const gameGraph = deepCopy(originalGraph);
  const levers = mainScene.getLevers();
  for (const index in levers) {
    const lever = levers[index];
    if (lever.texture.key === 'lever-off') {
      delete gameGraph.edges[lever.name];
    }
  }

  if(dijkstraMaxPath(originalGraph, 'a', 'd') > dijkstraMaxPath(gameGraph, 'a', 'd')) {
    window.alert('Esse ainda não é o caminho máximo para a água passar! Tente novamente.')
  } else {
    window.alert('Parabéns! Você concluiu o desafio.');
  }
}

export default comparePaths;
