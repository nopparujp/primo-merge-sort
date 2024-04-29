/**
 * Merges three sorted collections into a single sorted array
 * @param collection_1 First ascending sorted collection
 * @param collection_2 Second descending sorted collection
 * @param collection_3 Third ascending sorted collection
 * @returns A sorted array containing all elements from the input collections
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const ans: number[] = [];
  const l1 = collection_1.length;
  const l3 = collection_3.length;
  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;
  while (i < l1 || j >= 0 || k < l3) {
    let a = Number.POSITIVE_INFINITY;
    let b = Number.POSITIVE_INFINITY;
    let c = Number.POSITIVE_INFINITY;

    if (i < l1) {
      a = collection_1[i];
    }
    if (j >= 0) {
      b = collection_2[j];
    }
    if (k < l3) {
      c = collection_3[k];
    }

    if (a <= b && a <= c) {
      ans.push(a);
      i++;
    } else if (b <= a && b <= c) {
      ans.push(b);
      j--;
    } else if (c <= a && c <= b) {
      ans.push(c);
      k++;
    }
  }

  return ans;
}
