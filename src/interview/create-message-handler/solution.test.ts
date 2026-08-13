import { createMessageHandler } from './solution';

describe('Create Message Handler | Interview | TestCases', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('#1 Renders the first message immediately', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createMessageHandler();
    const message = { id: 1, text: 'first' };

    onMessage(message);

    expect(render).toHaveBeenCalledOnce();
    expect(render).toHaveBeenCalledWith(message);
  });

  test('#2 Buffers future messages until the missing message arrives', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createMessageHandler();
    const first = { id: 1, text: 'first' };
    const second = { id: 2, text: 'second' };
    const third = { id: 3, text: 'third' };

    onMessage(third);
    expect(render).not.toHaveBeenCalled();

    onMessage(first);
    expect(render).toHaveBeenCalledTimes(1);
    expect(render).toHaveBeenLastCalledWith(first);

    onMessage(second);
    expect(render.mock.calls).toEqual([[first], [second], [third]]);
  });

  test('#3 Flushes several buffered messages in ascending id order', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createMessageHandler();
    const messages = [
      { id: 5, text: 'fifth' },
      { id: 3, text: 'third' },
      { id: 4, text: 'fourth' },
      { id: 2, text: 'second' },
      { id: 1, text: 'first' },
    ];

    messages.forEach(onMessage);

    expect(render).toHaveBeenNthCalledWith(1, { id: 1, text: 'first' });
    expect(render).toHaveBeenNthCalledWith(2, { id: 2, text: 'second' });
    expect(render).toHaveBeenNthCalledWith(3, { id: 3, text: 'third' });
    expect(render).toHaveBeenNthCalledWith(4, { id: 4, text: 'fourth' });
    expect(render).toHaveBeenNthCalledWith(5, { id: 5, text: 'fifth' });
  });

  test('#4 Does not render an already processed id again', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createMessageHandler();
    const first = { id: 1, text: 'first' };
    const duplicate = { id: 1, text: 'duplicate' };
    const second = { id: 2, text: 'second' };

    onMessage(first);
    onMessage(duplicate);
    onMessage(second);

    expect(render.mock.calls).toEqual([[first], [second]]);
  });

  test('#5 Keeps state isolated between handler instances', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const firstHandler = createMessageHandler();
    const secondHandler = createMessageHandler();
    const firstMessage = { id: 1, text: 'first handler' };
    const secondMessage = { id: 1, text: 'second handler' };

    firstHandler({ id: 2, text: 'buffered' });
    secondHandler(secondMessage);
    firstHandler(firstMessage);

    expect(render.mock.calls).toEqual([
      [secondMessage],
      [firstMessage],
      [{ id: 2, text: 'buffered' }],
    ]);
  });
});
