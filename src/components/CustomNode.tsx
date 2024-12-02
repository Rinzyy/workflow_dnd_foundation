import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: { label: string; type: string };
}

export const CustomNode = memo(({ data }: CustomNodeProps) => {
  const nodeColors = {
    Trigger: 'bg-blue-500',
    Action: 'bg-green-500',
    Condition: 'bg-yellow-500',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64 border-2 border-gray-200">
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-gray-400"
      />
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${nodeColors[data.type as keyof typeof nodeColors]}`} />
        <h3 className="font-medium">{data.label}</h3>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-gray-400"
      />
    </div>
  );
});