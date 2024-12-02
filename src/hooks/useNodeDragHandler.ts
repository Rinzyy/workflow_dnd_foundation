import { useCallback } from 'react';
import { Node } from 'reactflow';
import { snapToGrid } from '../utils/grid';
import { useWorkflowStore } from '../store/workflowStore';

export function useNodeDragHandler() {
  const updateNodePosition = useWorkflowStore((state) => state.updateNodePosition);

  return useCallback(
    (_: React.MouseEvent, node: Node) => {
      const { x, y } = snapToGrid(node.position.x, node.position.y);
      updateNodePosition(node.id, { x, y });
    },
    [updateNodePosition]
  );
}