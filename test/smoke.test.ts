import { getUserAgent } from "../src";

it("works", () => {
  expect(getUserAgent).toBeInstanceOf(Function);
  expect(typeof getUserAgent()).toBe("string");
});
