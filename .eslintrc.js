module.exports = {
    "extends": ["eslint:recomended", "plugin:flowtype/recommended"],
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "material-ui",
        "prettier",
        "flowtype"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};