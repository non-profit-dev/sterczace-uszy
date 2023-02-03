# 🐶 Sterczące Uszy - project

This is a monorepo for "Sterczące Uszy" project.

## Table of Contents

- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)

## 🚀 Getting Started

Clone the repo:

```bash
git clone git@github.com:Fundacja-Sterczace-Uszy/website.git
```

and run sequentially:

```bash
cd website # go to the project's directory
yarn # install all required dependencies
yarn develop # run local server at `localhost:3000`
yarn storybook # start Storybook and check out all available components at `localhost:6006`
```

## 🧩 Project structure

This project consists of 3 different packages, with the following structure:

```
packages/
├── design-system
  ├── components
  └── icons
└── frontend
  ├── app
  └── e2e
```
