import { add } from "./add";

test("Test functions that import server-only", () => {
  expect(add(1, 3)).toBe(4);
});
