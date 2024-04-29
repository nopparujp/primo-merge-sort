import { merge } from "../src/merge";

describe("merge sort functions", () => {
  it("case 1: handle normal case", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [9, 8, 6, 4, 2];
    const collection3 = [10, 11, 12];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 2: handle empty collectoin1", () => {
    const collection1 = [];
    const collection2 = [3, 2, 1];
    const collection3 = [0, 5, 6];
    const expected = [0, 1, 2, 3, 5, 6];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 3: handle empty collection2", () => {
    const collection1 = [1, 2, 3];
    const collection2 = [];
    const collection3 = [1, 2, 5, 6];
    const expected = [1, 1, 2, 2, 3, 5, 6];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 4: handle empty collection3", () => {
    const collection1 = [1, 2, 3];
    const collection2 = [3, 2, 1];
    const collection3 = [];
    const expected = [1, 1, 2, 2, 3, 3];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 5: handle multiple empty collection", () => {
    const collection1 = [];
    const collection2 = [3, 2, 1];
    const collection3 = [];
    const expected = [1, 2, 3];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 6: handle multiple empty collection", () => {
    const collection1 = [];
    const collection2 = [];
    const collection3 = [1, 2, 3];
    const expected = [1, 2, 3];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 7: handle multiple empty collection", () => {
    const collection1 = [4, 5, 6];
    const collection2 = [];
    const collection3 = [];
    const expected = [4, 5, 6];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 8: handle multiple empty collection", () => {
    const collection1 = [];
    const collection2 = [];
    const collection3 = [];
    const expected = [];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it("case 9: handle only 1 element", () => {
    const collection1 = [0];
    const collection2 = [1];
    const collection3 = [2];
    const expected = [0, 1, 2];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
});
