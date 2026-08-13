import { createChannelMessageHandler } from './solution';

describe('Create Channel Message Handler | Interview | TestCases', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('#1 Renders the first message of each channel immediately', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createChannelMessageHandler();
    const workMessage = { id: 1, channel: 'work', text: 'work message' };
    const homeMessage = { id: 1, channel: 'home', text: 'home message' };

    onMessage(workMessage);
    onMessage(homeMessage);

    expect(render.mock.calls).toEqual([[workMessage], [homeMessage]]);
  });

  test('#2 Orders messages independently within each channel', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createChannelMessageHandler();
    const workSecond = { id: 2, channel: 'work', text: 'work second' };
    const workThird = { id: 3, channel: 'work', text: 'work third' };
    const homeFirst = { id: 1, channel: 'home', text: 'home first' };
    const workFirst = { id: 1, channel: 'work', text: 'work first' };

    onMessage(workSecond);
    onMessage(workThird);
    onMessage(homeFirst);
    onMessage(workFirst);

    expect(render.mock.calls).toEqual([
      [homeFirst],
      [workFirst],
      [workSecond],
      [workThird],
    ]);
  });

  test('#3 Does not unblock one channel with a message from another channel', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createChannelMessageHandler();
    const workSecond = { id: 2, channel: 'work', text: 'work second' };
    const homeFirst = { id: 1, channel: 'home', text: 'home first' };
    const workFirst = { id: 1, channel: 'work', text: 'work first' };

    onMessage(workSecond);
    onMessage(homeFirst);

    expect(render.mock.calls).toEqual([[homeFirst]]);

    onMessage(workFirst);

    expect(render.mock.calls).toEqual([[homeFirst], [workFirst], [workSecond]]);
  });

  test('#4 Replaces a duplicate while it is still buffered', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createChannelMessageHandler();
    const original = { id: 2, channel: 'work', text: 'original' };
    const replacement = { id: 2, channel: 'work', text: 'replacement' };
    const first = { id: 1, channel: 'work', text: 'first' };

    onMessage(original);
    onMessage(replacement);
    onMessage(first);

    expect(render.mock.calls).toEqual([[first], [replacement]]);
  });

  test('#5 Does not render an already processed message again', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const onMessage = createChannelMessageHandler();
    const first = { id: 1, channel: 'work', text: 'first' };
    const duplicate = { id: 1, channel: 'work', text: 'duplicate' };
    const second = { id: 2, channel: 'work', text: 'second' };

    onMessage(first);
    onMessage(duplicate);
    onMessage(second);

    expect(render.mock.calls).toEqual([[first], [second]]);
  });

  test('#6 Does not retain an already processed duplicate in memory', () => {
    const render = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const mapSet = vi.spyOn(Map.prototype, 'set');
    const onMessage = createChannelMessageHandler();
    const first = { id: 1, channel: 'work', text: 'first' };
    const duplicate = { id: 1, channel: 'work', text: 'duplicate' };

    onMessage(first);
    mapSet.mockClear();

    onMessage(duplicate);

    expect(mapSet).not.toHaveBeenCalled();
    expect(render).toHaveBeenCalledOnce();
  });
});
