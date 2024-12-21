# myanime

## Description
**myanime** is a web application that helps you discover anime. It uses various tools and frameworks to create a smooth and interactive user experience.

## Features
- Discover new anime
- Responsive design using Tailwind CSS
- Server-side rendering with EJS
- API requests handled with Axios
- Environment configuration with dotenv

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dipesh-sapkota1/animeexplorer.git
   cd myanime
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Create a `.env` file in the root directory and add any necessary environment variables (e.g., API keys).

## Scripts

### Start the Application
To start the application in production mode:
```bash
npm start
```

### Development Mode
To start the application in development mode with live reloading:
```bash
npm run dev
```

### Compile Tailwind CSS
To compile Tailwind CSS with live watching:
```bash
npm run tailwind
```

## Folder Structure

- **`/public`**: Contains public assets like CSS and images.
- **`/views`**: Contains EJS templates for server-side rendering.
- **`/tests`**: Contains test files for the application.
- **`app.js`**: Main entry point of the application.

## Dependencies

- **autoprefixer**: `^10.4.20`
- **axios**: `^1.7.9`
- **cors**: `^2.8.5`
- **dotenv**: `^16.4.7`
- **ejs**: `^3.1.10`
- **express**: `^4.21.2`
- **tailwindcss**: `^3.4.16`

## Dev Dependencies

- **nodemon**: `^3.1.7`

## Author
Dipesh Sapkota

## License
This project is licensed under the ISC License.
