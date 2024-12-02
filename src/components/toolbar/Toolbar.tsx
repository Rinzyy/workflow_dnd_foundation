import React from 'react';
import { NodeButton } from './NodeButton';
import { NodeType } from '../../types/nodes';
import { useWorkflowStore } from '../../store/workflowStore';
import { snapToGrid } from '../../utils/grid';

const AVAILABLE_NODES: NodeType[] = ['Trigger', 'Action', 'Condition'];

export function Toolbar() {
  const addNode = useWorkflowStore((state) => state.addNode);

  const handleAddNode = (type: NodeType) => {
    const position = snapToGrid(100, 100);
    const newNode = {
      id: `node-${Date.now()}`,
      type,
      position,
      data: {
        label: `New ${type}`,
        type,
        description: `A new ${type.toLowerCase()} node`,
      },
    };
    addNode(newNode);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4 z-10">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="space-y-2">
        {AVAILABLE_NODES.map((type) => (
          <NodeButton key={type} type={type} onClick={handleAddNode} />
        ))}
      </div>
    </div>
  );
}