import React from 'react';
import { Plus } from 'lucide-react';
import { NodeType, NODE_CONFIGS } from '../../types/nodes';

interface NodeButtonProps {
  type: NodeType;
  onClick: (type: NodeType) => void;
}

export function NodeButton({ type, onClick }: NodeButtonProps) {
  const config = NODE_CONFIGS[type];
  
  return (
    <button
      onClick={() => onClick(type)}
      className={`
        flex items-center gap-2 w-full p-2 rounded
        hover:bg-gray-100 transition-colors
        border border-${config.color}-200
        hover:border-${config.color}-300
      `}
    >
      <Plus className="w-4 h-4" />
      <span>{type}</span>
    </button>
  );
}