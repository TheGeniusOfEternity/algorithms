/*
Задача: выводить сообщения в правильном порядке по id,
даже если сервер присылает их не по порядку.
Каждое сообщение: { id: number, text: string }
Функция render(msg) выводит сообщение.
*/
interface Message {
  id: number;
  text: string;
}

/**
 * Creates function-wrapper that takes `message` and render all incoming messages in `message.id` order.
 * Messages are started with `message.id = 1`
 * @returns function `fn`
 * @example
 * const onMessage = createMessageHandler();
 *
 * onMessage({ id: 1, text: "hi" });         // is rendered immediately
 * onMessage({ id: 3, text: "how are u" });  // stays in buffer
 * onMessage({ id: 2, text: "yo" });         // triggers render of 2 and 3
 * onMessage({ id: 5, text: "yo" });         // stays in buffer, waits for 4
 * onMessage({ id: 4, text: "yo" });         // triggers render of 2 and 3
 */
export const createMessageHandler = (): ((message: Message) => void) => {
  const render = (message: Message): void => {
    console.log(message);
  };
  const cache = new Map<number, Message>();
  let expectedId = 1;

  return (message: Message): void => {
    cache.set(message.id, message);
    while (cache.has(expectedId)) {
      const msg = cache.get(expectedId);
      if (msg) {
        render(msg);
      }
      expectedId++;
    }
  };
};
