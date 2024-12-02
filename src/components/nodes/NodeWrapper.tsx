import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData, NODE_CONFIGS } from '../../types/nodes';

interface NodeWrapperProps {
  data: NodeData;
  selected?: boolean;
}

export const NodeWrapper = memo(({ data, selected }: NodeWrapperProps) => {
  const config = NODE_CONFIGS[data.type];
  const borderColor = selected ? 'border-blue-400' : 'border-gray-200';

  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 w-64 border-2 ${borderColor} relative`}>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-gray-400"
      />
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full bg-${config.color}-500`} />
        <h3 className="font-medium">{data.label}</h3>
      </div>
      {data.description && (
        <p className="mt-2 text-sm text-gray-600">{data.description}</p>
      )}
      {data.config && (
        <div className="mt-2 text-sm text-gray-600">
          {Object.entries(data.config).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span>{key}:</span>
              <span>{String(value)}</span>
            </div>
          ))}
        </div>
      )}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-gray-400"
      />
    </div>
  );
});