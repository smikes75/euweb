# DataHelp.eu Website

This is a React-based website for DataHelp.eu, built with Vite, React, TypeScript, and Tailwind CSS.

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd datahelp-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/pages` - Page components
  - `/i18n` - Internationalization files
- `/public` - Static assets

## Adding Images

Place your images in the `/public` directory:
1. Create an `images` folder if it doesn't exist: `mkdir -p public/images`
2. Copy your images there
3. Reference them in code as `/images/your-image.jpg`