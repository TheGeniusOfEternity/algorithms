export interface Item {
  id: number;
  title: string;
  getData: () => Promise<object>;
}

export type RenderFn = (
  obj:
    | {
        id: number;
        title: string;
        data: object;
      }
    | { type: 'finished' },
) => void;

interface MockItem {
  id: number;
  text: string;
}

export const createAsyncGetter =
  (data: MockItem, delay: number) => (): Promise<MockItem> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
