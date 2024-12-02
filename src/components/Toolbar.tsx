import React from 'react';
import { Plus } from 'lucide-react';
import { useReactFlow } from 'reactflow';
import { snapToGrid } from '../utils/grid';

const nodeTypes = [
  { type: 'Trigger', color: 'blue' },
  { type: 'Action', color: 'green' },
  { type: 'Condition', color: 'yellow' },
];

export function Toolbar() {
  const { addNodes } = useReactFlow();

  const handleAddNode = (type: string) => {
    const position = snapToGrid(100, 100);
    addNodes({
      id: `node-${Date.now()}`,
      type: 'custom',
      position,
      data: { label: `New ${type}`, type },
    });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4 z-10">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="space-y-2">
        {nodeTypes.map((nodeType) => (
          <button
            key={nodeType.type}
            onClick={() => handleAddNode(nodeType.type)}
            className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>{nodeType.type}</span>
          </button>
        ))}
      </div>
    </div>
  );
}