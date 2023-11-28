'use client';

import { ResultsUIProps } from '@/components/ResultsUI/ResultsUI';
import { mainScene } from '..';
import graphData from '../../data/graph-pipe.json';
import { Graph, dijkstraMaxPath } from './dijkstra';

function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

function comparePaths(
  setOpenUI: React.Dispatch<React.SetStateAction<boolean>>
): ResultsUIProps {
  const originalGraph = graphData as Graph;
  const gameGraph = deepCopy(originalGraph);
  const levers = mainScene.getLevers();
  for (const index in levers) {
    const lever = levers[index];
    if (lever.texture.key === 'lever-off') {
      delete gameGraph.edges[lever.name];
    }
  }

  if (
    Object.keys(gameGraph.edges).length ===
    Object.keys(originalGraph.edges).length
  ) {
    return {
      message: 'É preciso definir somente um caminho para a água passar.',
      type: 'ERROR',
      buttonFunction: () => {
        setOpenUI(false);
      },
    };
  }

  if (
    dijkstraMaxPath(originalGraph, 'a', 'd') >
    dijkstraMaxPath(gameGraph, 'a', 'd')
  ) {
    return {
      message:
        'Esse ainda não é o caminho máximo para a água passar! Tente novamente.',
      type: 'ERROR',
      buttonFunction: () => {
        setOpenUI(false);
      },
    };
  } else {
    return {
      message: 'Parabéns! Você concluiu o desafio.',
      type: 'SUCCESS',
      buttonFunction: () => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      },
    };
  }
}

export default comparePaths;
