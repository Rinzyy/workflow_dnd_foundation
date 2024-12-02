export interface WorkflowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: Record<string, any>;
}

export interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
}

export interface WorkflowState {
  nodes: WorkflowNode[];
  connections: Connection[];
  addNode: (node: WorkflowNode) => void;
  updateNodePosition: (id: string, position: { x: number; y: number }) => void;
  addConnection: (connection: Connection) => void;
  removeNode: (id: string) => void;
  removeConnection: (id: string) => void;
}