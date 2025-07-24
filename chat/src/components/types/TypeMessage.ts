export type MessageType = "response" | "message" | "typing";


export type MessageProps  = {
  id: string;
  from: {
    name: string;
  };
  type: MessageType;
  time: string;
  text?: string;
}
