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
    "subject-empty": [2, "never"],
    "subject-case": [0, "never"],
  },
};
