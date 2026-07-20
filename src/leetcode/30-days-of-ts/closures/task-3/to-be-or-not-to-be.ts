export interface ToBeOrNotToBe {
  toBe: (val: unknown) => boolean;
  notToBe: (val: unknown) => boolean;
}

/**
 *
 * @param value - testing value that would be compared with val provided in toBe and notToBe methods
 *
 * @returns object with toBe and notToBe methods, checking the equality of values
 */
export const expect = (value: unknown): ToBeOrNotToBe => {
  return {
    toBe: (val: unknown): boolean => {
      if (val === value) {
        return true;
      }
      throw new Error('Not Equal');
    },
    notToBe: (val: unknown): boolean => {
      if (val !== value) {
        return true;
      }
      throw new Error('Equal');
    },
  };
};
