export class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    const res: string[] = [];
    for (const s of strs) {
      res.push(String(s.length), '#', s);
    }
    return res.join('');
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const res: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      const length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}
