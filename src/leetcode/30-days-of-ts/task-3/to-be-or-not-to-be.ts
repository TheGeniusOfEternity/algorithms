export type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

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
