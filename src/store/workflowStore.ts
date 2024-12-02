import { create } from 'zustand';
import { WorkflowState, WorkflowNode, Connection } from '../types/workflow';

export const useWorkflowStore = create<WorkflowState>((set) => ({
  nodes: [],
  connections: [],
  
  addNode: (node: WorkflowNode) =>
    set((state) => ({ nodes: [...state.nodes, node] })),
    
  updateNodePosition: (id: string, position: { x: number; y: number }) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id ? { ...node, position } : node
      ),
    })),
    
  addConnection: (connection: Connection) =>
    set((state) => ({ connections: [...state.connections, connection] })),
    
  removeNode: (id: string) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
      connections: state.connections.filter(
        (conn) => conn.sourceId !== id && conn.targetId !== id
      ),
    })),
    
  removeConnection: (id: string) =>
    set((state) => ({
      connections: state.connections.filter((conn) => conn.id !== id),
    })),
}));