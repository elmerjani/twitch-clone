/** @type {import('eslint').Linter.FlatConfig[]} */
import js from "@eslint/js";
import next from "eslint-config-next";

export default [js(), ...next()];
