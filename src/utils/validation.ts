import { Connection } from 'reactflow';
import { WorkflowNode, NODE_CONFIGS } from '../types/nodes';
import { EdgeValidation } from '../types/edges';

export function validateConnection(
  connection: Connection,
  nodes: WorkflowNode[]
): EdgeValidation {
  if (!connection.source || !connection.target) {
    return { isValid: false, message: 'Missing source or target' };
  }

  const sourceNode = nodes.find((n) => n.id === connection.source);
  const targetNode = nodes.find((n) => n.id === connection.target);

  if (!sourceNode || !targetNode) {
    return { isValid: false, message: 'Invalid source or target node' };
  }

  // Prevent connecting to self
  if (connection.source === connection.target) {
    return { isValid: false, message: 'Cannot connect node to itself' };
  }

  // Check max connections
  const sourceConfig = NODE_CONFIGS[sourceNode.type];
  const targetConfig = NODE_CONFIGS[targetNode.type];

  if (!sourceConfig || !targetConfig) {
    return { isValid: false, message: 'Invalid node type' };
  }

  return { isValid: true };
}