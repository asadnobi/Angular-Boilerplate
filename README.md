# Angular Boilerplate

This Angular boilerplate project provides a starting point for Angular applications with pre-configured settings, including Prettier, Docker support, CI/CD examples, layout and page examples, as well as pipe, service, and interceptor examples.

## Features

- Angular version: 16.2.4
- Angular CLI: [16.2.4](https://github.com/angular/angular-cli).
- Pre-configured project structure for Angular applications.
- Includes Prettier for code formatting.
- Dockerfile for containerization.
- GitHub CI/CD example workflow.
- Layout and page examples.
- Pipe, service, and interceptor examples.
- Pre-commit hook configuration using Husky.
- Environment configurations for production and staging environments.
- Custom npm commands for common tasks.

## Getting Started

To get started with this Angular boilerplate project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone [repository-url]
```

2. Navigate to the project directory:

```bash
cd angular-boilerplate
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm start
```

5. Open your browser and visit http://localhost:4201 to see the application running.

## Folder Structure

The project follows a standard Angular project structure:

```bash
angular-boilerplate/
├── /.github             # GitHub-specific files (e.g., workflows)
├── /.vscode             # Visual Studio Code configurations
├── src/                 # Angular source folder
│   ├── app/             # Angular applications
│   │   ├── layouts/
│   │   │   ├── main/
│   │   │   ├── auth/
│   │   |   └── ...
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   |   └── ...
│   │   ├── others/
|   │   │   ├── components/
|   │   │   │   ├── input/
|   │   │   │   ├── alert/
|   │   │   │   └── ...
│   │   |   ├── services/
|   │   │   │   ├── data.service.ts
|   │   │   │   └── ...
|   │   │   ├── interceptors/
|   │   │   │   ├── token.interceptor.ts
|   │   │   │   └── ...
|   │   │   ├── pipes/
|   │   │   ├── models/
|   │   │   ├── enums/
|   │   │   ├── classes/
|   │   │   └── ...
│   │   └── ...
│   ├── assets/
│   ├── environments/
│   └── ...
├── /node_modules        # Installed npm packages for the workspace
├── angular.json         # Angular workspace configuration
├── Dockerfile           # Docker configurations
├── package.json         # Workspace-wide dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Documentation for the workspace
```

In this structure:

- src: Contains the source code for the Angular application.
  - app: Contains the main components, modules, and routing configurations for the application.
    - layouts: Contains layout modules for different page layouts.
    - pages: Contains page modules for different pages of the application.
  - assets: Contains static assets such as images and stylesheets.
    - images: Contains image assets used in the application.
    - styles: Contains stylesheets for the application, including layout-specific styles.
  - environments: Contains environment configuration files for different environments.
    - environment.production.ts: Production environment configuration.
    - environment.ts: Default environment configuration.
  - Dockerfile: Dockerfile for building the Angular application image.
- tsconfig.app.json: TypeScript configuration file for the Angular application.
- tsconfig.spec.json: TypeScript configuration file for the application's unit tests.

#### Coding Conventions

- Adhere to consistent coding conventions and formatting standards across the project.
- Configure linters and formatters (e.g., ESLint, Prettier) to enforce coding standards automatically.
- Maintain a clean and organized codebase by regularly refactoring and optimizing code.

#### VS Code Settings

We've included sample VS Code settings to improve your development experience. These settings can enhance code formatting, linting, and overall productivity.

##### settings.json:

```bash
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```

##### extensions.json:

```bash
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

These settings enable automatic code formatting on save, using Prettier as the default formatter, and perform ESLint fixes automatically.

#### ESLint Configuration

We've also provided an .eslintrc.json file with Angular recommended rules and configurations for linting your code. This ensures consistent code quality and adherence to best practices.

### Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Testing Angular Applications](https://angular.io/guide/testing)

#### Additional Resources

- [Angular Deployment Documentation](https://angular.io/guide/deployment)
- [Docker Documentation](https://docs.docker.com/guides/)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [Nginx Documentation](https://nginx.org/en/docs/)
