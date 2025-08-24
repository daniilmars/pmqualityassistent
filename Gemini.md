W# Gemini Collaboration Guide

This document provides guidelines for collaborating on this project with Gemini.

## Project Overview

This project is a static website for a fictional "Plant Maintenance Quality Assistant".
The website is available in two languages: English and German.
The main page of the website features a timeline animation that is built with SVG and JavaScript.

## Local Development

To run the project locally, you can use Python's built-in HTTP server.
Run the following command in the root directory of the project:

```bash
python3 -m http.server
```

This will start a local web server on port 8000. You can access the website at `http://localhost:8000`.

## Deployment

The project is deployed to GitHub Pages. The deployment is configured in the `.github/workflows/deploy.yml` file.
The deployment is triggered automatically when changes are pushed to the `main` branch.

## Project Structure

- `index.html`: The root `index.html` file redirects the user to the German version of the website.
- `en/`: This directory contains the English version of the website.
- `de/`: This directory contains the German version of the website.
- `assets/`: This directory contains the CSS, JavaScript, images, and videos for the website.
  - `assets/css/style.css`: The main stylesheet for the website.
  - `assets/js/script.js`: The main JavaScript file for the website.
  - `assets/images/`: Images used in the website.
  - `assets/videos/`: Videos used in the website.

## Working with Gemini

When working with Gemini, please provide clear and concise instructions.
If you want to modify the website, please specify which page (English or German) you want to modify.
If you want to modify the styling, please refer to the `assets/css/style.css` file.
If you want to modify the animation, please refer to the `assets/js/script.js` file and the SVG elements in the HTML files.
