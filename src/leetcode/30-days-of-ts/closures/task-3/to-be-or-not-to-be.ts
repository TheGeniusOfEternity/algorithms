export type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

/**
 *
 * @param value - testing value that would be compared with val provided in toBe and notToBe methods
 *
 * @returns object with toBe and notToBe methods, checking the equality of values
 */
export const expect = (value: any): ToBeOrNotToBe => {
  return {
    toBe: (val: any) => {
      if (val === value) return true
      throw new Error("Not Equal")
    },
    notToBe: (val: any) => {
      if (val !== value) return true
      throw new Error("Equal")
    },
  }
}
