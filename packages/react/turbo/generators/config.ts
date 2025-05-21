import type {PlopTypes} from "@turbo/gen";

/**
 * Registers a Plop generator for creating new React components in the internal UI library.
 *
 * The generator prompts for a component name, creates a TypeScript React component file using a template,
 * and appends an export entry to the `package.json` under the `"exports"` field.
 *
 * @param plop - The Plop API used to register the generator.
 */

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
      },
    ],
  });
}
