const { prefix } = require("../config.json")

test("Test the prefix", () => {
    expect(prefix).toBe(",")
})