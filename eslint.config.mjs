import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { ReactThreeFiber } from "@react-three/fiber";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: ["@react-three"],
    extends: ["plugin:@react-three/recommended"],
    rules: {
      "react/no-unknown-property": "off",
    },
  },
];

export default eslintConfig;
 