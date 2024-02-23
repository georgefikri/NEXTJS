# Next.js 14 Project

This project is built using Next.js 14, showcasing the modern capabilities of Next.js for building dynamic web applications. The application demonstrates a meal-sharing platform where users can view and add their meals.

## Features

- **App Router**: Utilizes the new App Router in Next.js 14 for improved routing capabilities, offering a more intuitive and flexible way to handle navigation within the application.

- **Database Integration**: Uses `better-sqlite3` for efficient, server-side database management. This choice ensures fast, synchronous SQLite operations, making it ideal for scenarios where simplicity and speed are paramount.

- **Slugification**: Implements `slugify` to generate human-readable URLs for dynamic content, enhancing SEO and user experience by creating easy-to-understand URLs for meal pages.

- **Security Measures**: Incorporates `xss` to sanitize input and protect against cross-site scripting (XSS) attacks, ensuring that user-generated content is safe to display.

- **Dynamic Pages**: Features dynamic pages and slug-based routing for meals, allowing for the creation of unique pages for individual meals based on their titles or other identifying properties.

- **Meal Management**: Allows users to view a list of meals and add their meals to the platform, showcasing the dynamic nature of the application with user-generated content.

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
npm run dev
```

## Acknowledgments

This project was developed as part of [Maximilian Schwarzmüller's Next.js 14 course](https://www.udemy.com/course/nextjs-react-the-complete-guide/). The course provided comprehensive insights into Next.js features and best practices, guiding the development of this application.
