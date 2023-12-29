import { pastTo } from "./converter";

describe("pastTo", () => {
  describe("When given minutes greater than 30", () => {
    it("should return 'PAST'", () => {
      expect(pastTo(5)).toEqual("PAST");
      expect(pastTo(15)).toEqual("PAST");
    });
  });

  describe("When given minutes not divisible by 5", () => {
    it("should return null", () => {
      expect(pastTo(4)).toEqual(null);
      expect(pastTo(37)).toEqual(null);
    });
  });

  describe("When given minutes less than 30", () => {
    it("should return 'TO'", () => {
      expect(pastTo(35)).toEqual("TO");
      expect(pastTo(45)).toEqual("TO");
    });
  });
});
