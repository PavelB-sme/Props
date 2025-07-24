import React from 'react';
import './MessageHistory.css'; // Стили для компонента

type MessageType = 'response' | 'message' | 'typing';

interface FromProps {
  name: string;
}

interface MessageItem {
  id: string;
  from: FromProps;
  type: MessageType;
  time: string;
  text?: string;
}

interface MessageHistoryProps {
  list?: MessageItem[];
}

const Message: React.FC<{ from: FromProps; message: MessageItem }> = ({ from, message }) => (
  <div className="message my-message">
    {message.text}
  </div>
);

const Response: React.FC<{ from: FromProps; message: MessageItem }> = ({ from, message }) => (
  <div className="message other-message float-right">
    {message.text}
  </div>
);

const Typing: React.FC<{ from: FromProps; message: MessageItem }> = ({ from, message }) => (
  <div className="message typing-message">
    {from.name} печатает...
  </div>
);

const MessageHistory: React.FC<MessageHistoryProps> = ({ list = [] }) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <ul className="message-history">
      {list.map((message) => {
        const MessageComponent = {
          message: Message,
          response: Response,
          typing: Typing,
        }[message.type];

        return (
          <li key={message.id} className="clearfix">
            <div className={`message-data ${message.type === 'response' ? 'align-right' : ''}`}>
              {message.type === 'response' ? (
                <>
                  <span className="message-data-time">{message.time}</span>
                  &nbsp;&nbsp;
                  <span className="message-data-name">{message.from.name}</span>
                  <i className="fa fa-circle me"></i>
                </>
              ) : (
                <>
                  <span className="message-data-name">
                    <i className="fa fa-circle online"></i> {message.from.name}
                  </span>
                  <span className="message-data-time">{message.time}</span>
                </>
              )}
            </div>
            <MessageComponent from={message.from} message={message} />
          </li>
        );
      })}
    </ul>
  );
};

export default MessageHistory;