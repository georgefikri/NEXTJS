### Design System with Storybook

This repository contains a reusable design system built with Storybook, TailwindCSS, and TypeScript. This guide provides a step-by-step walkthrough for setting up, configuring, and publishing your design system while addressing common issues.

## Features

- Storybook Integration: Visualize and document UI components interactively.

- TailwindCSS Styling: Rapidly style components using a utility-first CSS framework.

- Reusable Components: Components like Button are designed to be used across multiple projects.

- TypeScript: Ensures type safety and scalability.

## Table of Contents

1. Setup

2. Project Structure

3. TypeScript Configuration

4. Initialize Storybook

5. Add Components

6. Test Storybook Locally

7. Prepare for NPM Publishing

8. Publish the Design System

9. Using the Design System

10. Common Issues and Solutions

---

1. Setup

- Create a new directory for your design system:

  - `mkdir design-system`
  - `cd design-system`

- Initialize a new npm project:

  - `npm init -y`

- Install dependencies:

  - `npm install --save-dev typescript @storybook/react-webpack5 tailwindcss postcss autoprefixer`

2. Project Structure

- Organize your project as follows:

design-system/
├── src/
│ ├── components/
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ ├── Button.stories.tsx
│ ├── index.ts
├── .storybook/
├── node_modules/
├── package.json
├── tsconfig.json
└── tailwind.config.js

3. TypeScript Configuration

- Initialize TypeScript:

  - `npx tsc --init`

- Update tsconfig.json:

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "es6",
    "target": "es6",
    "jsx": "react-jsx",
    "declaration": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "lib": ["dom", "es6"],
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "storybook-static"]
}
```

4. Initialize Storybook

- Run the Storybook CLI:

  - `npx storybook@latest init`

- If prompted, answer No to manually choosing a project type.

- Wait for Storybook to install the default configuration.

5. Add Components

- Example: Button Component

- Create Button component (src/components/Button/Button.tsx):

```tsx
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
}) => {
  const classes = `btn-${variant} btn-${size}`;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

- Create Button story (src/components/Button/Button.stories.tsx):

```tsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
```

6. Test Storybook Locally

- Add the following script to package.json:

```json
"scripts": {
"storybook": "storybook dev -p 6006"
}
```

- Run Storybook:

  - `npm run storybook`

Open Storybook in the browser (usually http://localhost:6006).

7. Prepare for NPM Publishing

- Add an index.ts file to export components:

```tsx
export { default as Button } from './components/Button/Button';
```

- Update package.json:

```json
{
  "name": "@yourname/design-system",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

- Compile TypeScript:

  - `npm run build`

8. Publish the Design System

- Log in to npm:

  - `npm login`

- Publish the package:

  - `npm publish --access public`

9. Using the Design System

- Install the package in another project:

  - `npm install @yourname/design-system`

- Import the components:

```tsx
import { Button } from '@yourname/design-system';

<Button variant="primary">Click Me</Button>;
```

10. Common Issues and Solutions

- Issue: Storybook Fails to Start

  - Fix: Ensure the storybook script in package.json is correct: "storybook": "storybook dev -p 6006".

- Issue: TypeScript Errors

  - Fix: Add "skipLibCheck": true in tsconfig.json.

- Issue: Cannot Find Module

  - Fix:

    - Ensure the dist/ folder contains the compiled files.

    - Check main and types fields in package.json point to valid files in dist/.
