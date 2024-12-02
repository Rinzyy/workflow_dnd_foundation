import { useCallback } from 'react';
import { Connection, Edge } from 'reactflow';
import { useWorkflowStore } from '../store/workflowStore';
import { validateConnection } from '../utils/validation';

export function useConnectionHandler() {
  const addConnection = useWorkflowStore((state) => state.addConnection);
  const nodes = useWorkflowStore((state) => state.nodes);

  return useCallback(
    (params: Connection) => {
      const validation = validateConnection(params, nodes);
      
      if (validation.isValid && params.source && params.target) {
        const newConnection = {
          id: `edge-${Date.now()}`,
          sourceId: params.source,
          targetId: params.target,
        };
        addConnection(newConnection);
        return true;
      }
      
      if (validation.message) {
        console.warn(validation.message);
      }
      return false;
    },
    [addConnection, nodes]
  );
}