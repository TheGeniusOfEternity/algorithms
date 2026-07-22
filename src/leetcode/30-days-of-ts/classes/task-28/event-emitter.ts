export type Callback = (...args: unknown[]) => unknown;
interface Subscription {
  unsubscribe: () => void;
}

/**
 * Event Emitter implementation
 * Allows you to subscribe, emit & unsubscribe to events
 */
export class EventEmitter {
  /**
   * Storage of the subscriptions
   */
  emits = new Map<string, Map<symbol, Callback>>();

  /**
   * @param eventName - name of the event
   * @param callback - handler that would be called on `eventName  events emit
   *
   * @returns obj with `unsubscribe` method to remove subscription
   */
  subscribe = (eventName: string, callback: Callback): Subscription => {
    const key = Symbol();
    let callbacks = this.emits.get(eventName);
    callbacks ??= new Map<symbol, Callback>();
    callbacks.set(key, callback);
    this.emits.set(eventName, callbacks);
    return {
      unsubscribe: (): undefined => {
        this.emits.get(eventName)?.delete(key);
        return undefined;
      },
    };
  };

  /**
   * @param eventName - name of the event(s)
   * @param args - array of arguments to call all events with such `eventName
   *
   * @returns arrays of results after all calls
   */
  emit = (eventName: string, args: unknown[] = []): unknown[] => {
    const callbacks = this.emits.get(eventName);
    const result: unknown[] = [];
    if (callbacks) {
      callbacks.forEach((cb) => {
        result.push(cb(...args));
      });
    }
    return result;
  };
}
