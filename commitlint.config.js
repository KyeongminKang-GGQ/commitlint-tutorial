module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-case": [2, "always", "pascal-case"],
    "type-enum": [
      2,
      "always",
      [
        "Feature",
        "Fix",
        "Modify",
        "Design",
        "Style",
        "Refactor",
        "Comment",
        "Docs",
        "Test",
        "Chore",
        "Rename",
        "Remove",
      ],
    ],
    "subject-case": [2, "always", ["sentence-case", "start-case"]],
    "subject-max-length": [2, "always", 50],
    "body-max-line-length": [2, "always", 72],
  },
};
