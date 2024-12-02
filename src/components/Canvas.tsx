import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Connection,
  Edge,
  Node,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomNode } from './CustomNode';
import { snapToGrid } from '../utils/grid';

const nodeTypes = {
  custom: CustomNode,
};

export function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeDragStop = (_: React.MouseEvent, node: Node) => {
    const { x, y } = snapToGrid(node.position.x, node.position.y);
    setNodes((nds) =>
      nds.map((n) => (n.id === node.id ? { ...n, position: { x, y } } : n))
    );
  };

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={[20, 20]}
        fitView
        className="bg-gray-50"
      >
        <Background gap={20} size={1} color="#ccc" />
        <Controls />
      </ReactFlow>
    </div>
  );
}