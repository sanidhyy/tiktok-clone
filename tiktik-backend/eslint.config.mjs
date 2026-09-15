import { defineConfig, globalIgnores } from "eslint/config";
import studio from "@sanity/eslint-config-studio";

export default defineConfig([...studio, globalIgnores(["dist/**", "node_modules/**"])]);
