export default [
    {
      ignores: ["node_modules", "dist"], // Directories to ignore
    },
    {
      files: ["**/*.{js,jsx}"], // Specify the files to lint
      languageOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module", // Specify that the code uses ES Modules
        globals: {
          window: true,
          document: true,
          process: true,
        },
      },
      plugins: {
        react: require("eslint-plugin-react"),
      },
      rules: {
        "react/react-in-jsx-scope": "off", // Not needed in Vite or Next.js projects
        "react/prop-types": "off", // Optional: Turn off prop-types if using TypeScript
        "no-unused-vars": "warn",
        "no-console": "warn",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "warn",
      },
    },
  ];