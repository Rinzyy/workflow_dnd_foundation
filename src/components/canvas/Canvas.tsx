import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { NodeWrapper } from '../nodes/NodeWrapper';
import { useNodeDragHandler } from '../../hooks/useNodeDragHandler';
import { useConnectionHandler } from '../../hooks/useConnectionHandler';
import { useWorkflowStore } from '../../store/workflowStore';

const nodeTypes = {
  custom: NodeWrapper,
};

export function Canvas() {
  const nodes = useWorkflowStore((state) => state.nodes);
  const edges = useWorkflowStore((state) => state.connections);
  const onNodeDragStop = useNodeDragHandler();
  const onConnect = useConnectionHandler();

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes as Node[]}
        edges={edges as Edge[]}
        onNodeDragStop={onNodeDragStop}
        onConnect={onConnect}
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