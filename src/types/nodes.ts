export type NodeType = 'Trigger' | 'Action' | 'Condition';

export interface NodeData {
  label: string;
  type: NodeType;
  description?: string;
  config?: Record<string, unknown>;
}

export interface WorkflowNode {
  id: string;
  type: NodeType;
  position: Position;
  data: NodeData;
}

export interface Position {
  x: number;
  y: number;
}

export const NODE_CONFIGS: Record<NodeType, { color: string; maxConnections: number }> = {
  Trigger: { color: 'blue', maxConnections: 1 },
  Action: { color: 'green', maxConnections: 2 },
  Condition: { color: 'yellow', maxConnections: 3 },
};