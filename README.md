# React Material Tailwind Template

This template provides a solid foundation for building React applications with Material-Tailwind for UI components and Tailwind CSS for styling. It comes pre-configured with commonly used packages and follows a structured folder organization for an efficient development workflow.
```bash
/src
|-- /pages
|-- /assets
  |-- /icons
  |-- /images
  |-- /json
|-- /components
  |-- /ui
|-- /hooks
|-- /routes
|-- /services
  |-- /api
  |-- /providers
  |-- /state
|-- /utils
```
## Features

- **React**: Utilize the power of React for building dynamic and interactive user interfaces.
- **Material-Tailwind**: Incorporate Material-Tailwind components to ensure a consistent and visually appealing design.
- **Tailwind CSS**: Leverage the utility-first CSS framework to streamline styling and customization.
- **Routing**: Implement efficient page routing using React Router for seamless navigation.
- **Custom Hooks**: Organize and reuse logic with custom hooks stored in the `/hooks` directory.
- **Reusable Components**: Create modular and reusable components in the `/components` directory for better maintainability.
- **Theming**: Customize the look and feel of your application by storing custom themes in the `/themes` directory.
- **Utility Functions**: Keep your codebase clean and organized with utility functions stored in the `/utils` directory.
- **Service Integration**: Manage third-party or in-house services in the `/services` directory for improved maintainability.

## Commonly Used Packages

### Dependencies

- **@material-tailwind/react**: v2.1.4
  - Description: Provides Material Tailwind components styled with Tailwind CSS.
  
- **apisauce**: v1.1.5
  - Description: A declarative API wrapper using axios.

- **lottie-react**: v2.4.0
  - Description: Library for rendering After Effects animations natively in the browser.

- **moment**: v2.29.4
  - Description: Parse, validate, manipulate, and display dates in JavaScript.

- **react**: v18.2.0
  - Description: A JavaScript library for building user interfaces.

- **react-dom**: v18.2.0
  - Description: React package for working with the DOM.

- **react-router-dom**: v6.20.0
  - Description: Declarative routing for React applications.

- **zustand**: v4.4.6
  - Description: A small, fast, and scaleable state-management library for React.

### DevDependencies

- **@iconify/react**: v4.1.1
  - Description: React component for Iconify, a comprehensive icon framework.

- **@types/react**: v18.2.37
  - Description: TypeScript types for React.

- **@types/react-dom**: v18.2.15
  - Description: TypeScript types for React DOM.

- **@vitejs/plugin-react**: v4.2.0
  - Description: Vite plugin for React support.

- **autoprefixer**: v10.4.16
  - Description: Parse CSS and add vendor prefixes using data from Can I Use.

- **eslint**: v8.53.0
  - Description: A pluggable and configurable linter tool for identifying and fixing problems in JavaScript code.

- **eslint-plugin-react**: v7.33.2
  - Description: React specific linting rules for ESLint.

- **eslint-plugin-react-hooks**: v4.6.0
  - Description: ESLint plugin with rules of hooks.

- **eslint-plugin-react-refresh**: v0.4.4
  - Description: ESLint plugin for React Fast Refresh.

- **postcss**: v8.4.31
  - Description: A tool for transforming styles with JS plugins.

- **tailwindcss**: v3.3.5
  - Description: A utility-first CSS framework.

- **vite**: v5.0.0
  - Description: A fast frontend development tool.

## Folder Structure



## 📁 Folder Structure

<details>
  <summary><strong>/src</strong></summary>

- **`/components`**: This directory contains reusable components for your application.
- **`/pages`**: Main application pages are stored here.
- **`/assets`**: All the assets used in the application, such as images or fonts.
- **`/hooks`**: Custom Hooks that are used throughout your application.
- **`/routes`**: Handles page routing for your application.
- **`/services`**: Houses 3rd party or in-house services used in your application.
- **`/themes`**: Stores custom themes or handles theming for your application.
- **`/utils`**: This directory contains utility functions, such as formatting and helpers.

</details>


<details>
<summary><strong>/public</strong></summary>

- Public assets and static files.

</details>

<details>
<summary><strong>/config</strong></summary>

- **`/env`**: Environment configuration files.

</details>

## 🚀 Usage

### 1. Clone this repository

1. **Rename this folder:**
   - After cloning, rename the folder to suit your project's name.

2. **Locate `package.json`:**
   - Open the project in your code editor.
   - Use `Ctrl + P` and search for `package.json`.
   - Comment out or delete unnecessary packages based on your project needs.

3. **Install Dependencies:**
   - Run the following command in your terminal:
     ```bash
     npm install
     ```
   This will install the required dependencies for your project.

4. **Run Your Application:**
   - Start your application by running the following command:
     ```bash
     npm run dev
     ```
   This will compile and run your application.

Now you're all set! Customize the project according to your requirements and start building your awesome application.

## 🤝 Contributing

Thank you for considering contributing to our project! Whether you are fixing a bug, implementing a new feature, or improving documentation, your contributions are welcome.

### 1. Fork the Repository

Click on the "Fork" button on the top right corner of this repository to create your own copy.

### 2. Clone your Fork

Clone your forked repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/repository-name.git.
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).