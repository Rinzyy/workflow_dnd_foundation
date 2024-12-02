import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { WorkflowNode as WorkflowNodeType } from '../types/workflow';

interface Props {
  node: WorkflowNodeType;
}

export function WorkflowNode({ node }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: node.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        position: 'absolute',
        left: node.position.x,
        top: node.position.y,
      }}
      className="bg-white rounded-lg shadow-lg p-4 w-64 cursor-move"
      {...listeners}
      {...attributes}
    >
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <h3 className="font-medium">{node.type}</h3>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        {Object.entries(node.data).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span>{key}:</span>
            <span>{String(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}