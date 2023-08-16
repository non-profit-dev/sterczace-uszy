const plopGenerators = (plop) => {
  plop.setGenerator("component", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/design-system/components/{{camelCase name}}/index.js",
        templateFile: "plop-templates/Components/index.js.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/components/{{camelCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Components/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/components/{{camelCase name}}/{{pascalCase name}}.styled.js",
        templateFile: "plop-templates/Components/Component.styled.js.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/components/{{camelCase name}}/__tests__/{{pascalCase name}}.test.jsx",
        templateFile: "plop-templates/Components/Component.test.jsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/components/{{camelCase name}}/{{pascalCase name}}.mdx",
        templateFile: "plop-templates/Components/Component.mdx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/components/{{camelCase name}}/{{pascalCase name}}.stories.jsx",
        templateFile: "plop-templates/Components/Component.stories.jsx.hbs",
      },
    ],
  })

  plop.setGenerator("pattern", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "pattern name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/design-system/patterns/{{camelCase name}}/index.js",
        templateFile: "plop-templates/Components/index.js.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/patterns/{{camelCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Components/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/patterns/{{camelCase name}}/{{pascalCase name}}.styled.js",
        templateFile: "plop-templates/Components/Component.styled.js.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/patterns/{{camelCase name}}/__tests__/{{pascalCase name}}.test.jsx",
        templateFile: "plop-templates/Patterns/Pattern.test.jsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/patterns/{{camelCase name}}/{{pascalCase name}}.mdx",
        templateFile: "plop-templates/Patterns/Pattern.mdx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/patterns/{{camelCase name}}/{{pascalCase name}}.stories.jsx",
        templateFile: "plop-templates/Patterns/Pattern.stories.jsx.hbs",
      },
    ],
  })

  plop.setGenerator("block", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "block name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/design-system/blocks/{{camelCase name}}/index.js",
        templateFile: "plop-templates/Components/index.js.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/blocks/{{camelCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Components/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/blocks/{{camelCase name}}/{{pascalCase name}}.styled.js",
        templateFile: "plop-templates/Components/Component.styled.js.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/blocks/{{camelCase name}}/__tests__/{{pascalCase name}}.test.jsx",
        templateFile: "plop-templates/Blocks/Block.test.jsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/blocks/{{camelCase name}}/{{pascalCase name}}.mdx",
        templateFile: "plop-templates/Blocks/Block.mdx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/blocks/{{camelCase name}}/{{pascalCase name}}.stories.jsx",
        templateFile: "plop-templates/Blocks/Block.stories.jsx.hbs",
      },
    ],
  })
}

module.exports = plopGenerators
