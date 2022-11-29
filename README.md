1. husky npm 설치
   `npm install husky --save-dev`

2. husky 설치
   `npx husky install`

3. commitlint 적용
   `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

4. commitlint package 적용
   `npm install --dev @commitlint/config-conventional @commitlint/cli`

5. 루트 디렉토리에 commitlint.config.js 파일 생성

```.javascript
module.exports = { extends: ['@commitlint/config-conventional'] };
```

6. husky/commit-msg 수정

```.javascript
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx commitlint --edit $1
```

7. commitlint.config.js 수정

```.javascript
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
    "subject-case": [2, "always", ["sentence-case", "start-case"]],
  },
};
```
