/*
Задача: выводить сообщения в правильном порядке по id,
даже если сервер присылает их не по порядку.
Каждое сообщение: { id: number, text: string }
Функция render(msg) выводит сообщение.
 */

interface Message {
  id: number;
  channel: string;
  text: string;
}

/**
 * Creates function-wrapper that takes `message` from different channels and render all incoming messages
 * per 'message.channel` in `message.id` order.
 *
 * Messages are started with `message.id = 1`.
 *
 * Duplicates (messages with the same `message.id` and `message.channel`) are reassigned.
 *
 * @returns function `fn`
 * @example
 * const onMessage = createMessageChannelHandler();
 *
 * onMessage({ id: 2, channel: 'work', text: 'hi' });         // stays in buffer
 * onMessage({ id: 3, channel: 'work', text: 'ho are u' });   // stays in buffer
 * onMessage({ id: 1, channel: 'home', text: 'yo' });         // is rendered immediately
 * onMessage({ id: 1, channel: 'work', text: 'yo' });         // is rendered immediately, then trigger 2 and 3
 * onMessage({ id: 3, channel: 'work', text: 'yo' });         // will not be rendered
 */
export const createChannelMessageHandler = (): ((message: Message) => void) => {
  const render = (message: Message): void => {
    // eslint-disable-next-line
    console.log(message);
  };

  const messages = new Map<string, Message>();
  const ids = new Map<string, number>();

  return (message: Message) => {
    let expectedId = ids.get(message.channel) ?? 1;
    if (message.id < expectedId) {
      return;
    }
    messages.set(`${message.id.toString()} ${message.channel}`, message);
    let key = `${expectedId.toString()} ${message.channel}`;
    while (messages.has(key)) {
      const msg = messages.get(key);
      if (msg) {
        render(msg);
      }
      messages.delete(key);
      expectedId++;
      key = `${expectedId.toString()} ${message.channel}`;
    }
    ids.set(message.channel, expectedId);
  };
};
