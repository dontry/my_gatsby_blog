module.exports = {
    "extends": ["eslint:recomended"],
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "material-ui",
        "prettier"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};