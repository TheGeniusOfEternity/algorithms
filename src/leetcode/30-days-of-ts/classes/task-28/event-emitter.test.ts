import { Callback, EventEmitter } from './event-emitter.ts';

describe('Task #28 | Event Emitter | Testcases', () => {
  const runTest = (
    actions: ('emit' | 'subscribe' | 'unsubscribe')[],
    values: unknown[][],
  ): unknown[] => {
    const subscriptions = [];
    const emitter = new EventEmitter();
    const output: unknown[] = [];
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const value = values[i];
      let response: unknown;

      switch (action) {
        case 'emit': {
          const eventName = value[0] as string;
          const args = value[1] as unknown[];
          response = emitter.emit(eventName, args);
          output.push(['emitted', response]);
          break;
        }
        case 'subscribe': {
          subscriptions.push(emitter.subscribe(value[0] as string, value[1] as Callback));
          output.push(['subscribed']);
          break;
        }
        case 'unsubscribe': {
          const subscription = subscriptions[value[0] as number];
          if (
            Boolean(subscription) &&
            typeof subscription === 'object' &&
            'unsubscribe' in subscription
          ) {
            subscription.unsubscribe();
          }
          output.push(['unsubscribed', 0]);
          break;
        }
        default:
          break;
      }
    }
    return output;
  };

  test('#1 Double Subscribe', () => {
    const actions: ('emit' | 'subscribe' | 'unsubscribe')[] = [
      'emit',
      'subscribe',
      'subscribe',
      'emit',
    ];
    const values = [
      ['firstEvent', []],
      [
        'firstEvent',
        function cb1(): number {
          return 5;
        },
      ],
      [
        'firstEvent',
        function cb1(): number {
          return 6;
        },
      ],
      ['firstEvent', []],
    ];
    const expected = [['emitted', []], ['subscribed'], ['subscribed'], ['emitted', [5, 6]]];
    const result = runTest(actions, values);
    expect(result).toEqual(expected);
  });

  test('#2 Double Emit', () => {
    const actions: ('emit' | 'subscribe' | 'unsubscribe')[] = ['subscribe', 'emit', 'emit'];
    const values = [
      [
        'firstEvent',
        function cb1(...args: unknown[]): string {
          return args.join(',');
        },
      ],
      ['firstEvent', [1, 2, 3]],
      ['firstEvent', [3, 4, 6]],
    ];
    const expected = [['subscribed'], ['emitted', ['1,2,3']], ['emitted', ['3,4,6']]];
    const result = runTest(actions, values);
    expect(result).toEqual(expected);
  });

  test('#3 Double emit, single unsubscribe', () => {
    const actions: ('emit' | 'subscribe' | 'unsubscribe')[] = [
      'subscribe',
      'emit',
      'unsubscribe',
      'emit',
    ];
    const values = [
      ['firstEvent', (...args: unknown[]): string => args.join(',')],
      ['firstEvent', [1, 2, 3]],
      [0],
      ['firstEvent', [4, 5, 6]],
    ];
    const expected = [['subscribed'], ['emitted', ['1,2,3']], ['unsubscribed', 0], ['emitted', []]];
    const result = runTest(actions, values);
    expect(result).toEqual(expected);
  });

  test('#4 Double subscribe, single unsubscribe', () => {
    const actions: ('emit' | 'subscribe' | 'unsubscribe')[] = [
      'subscribe',
      'subscribe',
      'unsubscribe',
      'emit',
    ];
    const values = [
      ['firstEvent', (x: number): number => x + 1],
      ['firstEvent', (x: number): number => x + 2],
      [0],
      ['firstEvent', [5]],
    ];
    const expected = [['subscribed'], ['subscribed'], ['unsubscribed', 0], ['emitted', [7]]];
    const result = runTest(actions, values);
    expect(result).toEqual(expected);
  });
});
