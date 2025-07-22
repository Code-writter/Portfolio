# Portfolio

This is a personal portfolio website built with Next.js, showcasing projects, certifications, and social profiles. It's designed to be modern, responsive, and visually appealing.

## Table of Contents

  - Features
  - Technologies Used
  - Getting Started
      - Prerequisites
      - Installation
      - Running the Development Server
  - Project Structure
  - Deployment
  - Contact

## Features

This portfolio includes the following key sections and functionalities:

  * **Hero Section**: A welcoming introduction with a dynamic text effect and a call to action.
  * **About Me**: A section detailing personal information, potentially including skills or professional interests.
  * **Profiles/Skills**: Displays links to various professional and social profiles (e.g., LinkedIn, GitHub, Twitter, Microsoft Learn, Google Cloud, Credly) using an interactive hover effect.
  * **Certifications & Achievements**: A dynamic carousel showcasing various professional certifications, including Microsoft, Google Cloud, and Udemy.
  * **Projects**: Highlights personal projects with interactive link previews for external URLs.
  * **Social Media**: A section for connecting on various social media platforms and showcasing integrations with different tools/logos like Gemini, Replit, MagicUI, VSCodium, MediaWiki, and GooglePaLM.
  * **Responsive Design**: The layout adjusts for different screen sizes.
  * **Dark Mode**: Supports theme switching for a personalized viewing experience.
  * **Smooth Animations**: Utilizes Framer Motion for various UI animations and text effects.

## Technologies Used

This project leverages the following technologies:

  * **Next.js**: A React framework for production.
  * **React**: Frontend JavaScript library for building user interfaces.
  * **TypeScript**: Strongly typed superset of JavaScript.
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  * **Framer Motion**: A production-ready motion library for React.
  * **Radix UI**: A collection of unstyled, accessible UI components.
  * **Lucide React**: A collection of beautiful open-source icons.
  * **Next-Themes**: For managing and persisting themes (dark/light mode).
  * **QSS**: For URL query string serialization.

## Getting Started

First, ensure you have pnpm installed.

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## Project Structure

The key files and their roles are:

  - `src/app/layout.tsx`: Defines the root HTML structure, metadata, and integrates the `ThemeProvider`.
  - `src/app/page.tsx`: The main page component that composes all the different sections of the portfolio.
  - `src/components/hero-section.tsx`: Contains the main hero area with the welcome message.
  - `src/components/features.tsx`: Implements the "About Me" section with various UI components.
  - `src/components/profiles.tsx`: Displays social media and professional profiles using `HoverEffect`.
  - `src/components/certificates/certificates.tsx`: Manages and displays certifications in a carousel.
  - `src/components/projects/projects.tsx`: Renders the project showcase section.
  - `src/components/socials.tsx`: Shows social media links and tool integrations.
  - `src/components/footer.tsx`: The application's footer.
  - `src/lib/utils.ts`: Utility functions for common tasks, like `cn` for combining Tailwind CSS classes.
  - `public/`: Stores static assets like images and SVG logos.

## Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Contact

You can find my contact information and social media links in the footer and profiles sections of the website.
