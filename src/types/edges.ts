export interface Edge {
  id: string;
  source: string;
  target: string;
  type?: string;
  animated?: boolean;
  data?: Record<string, unknown>;
}

export interface EdgeValidation {
  isValid: boolean;
  message?: string;
}