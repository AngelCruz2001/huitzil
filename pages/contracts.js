
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import { initialNodes } from '../resources/nodes.js';
import { initialEdges } from '../resources/edges.js';

export default function Contracts() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    />
  );
}
