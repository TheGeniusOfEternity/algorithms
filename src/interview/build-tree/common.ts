export interface Message {
  message: string;
  pass: string;
}

export interface NestedMessage {
  message: string;
  replies?: NestedMessage[];
}
