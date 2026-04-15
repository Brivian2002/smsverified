# TextVerified Clone

A high-fidelity, professional clone of TextVerified.com, built with React, Vite, and Tailwind CSS.

## Features

- **Professional Polish Design**: Clean, trustworthy SaaS aesthetic.
- **Live Numbers Feed**: Real-time simulation of number availability across multiple countries.
- **Ad Integration**: Pre-configured ad slots for monetization.
- **Responsive Layout**: Fully optimized for desktop and mobile devices.
- **Modern Tech Stack**: React 19, Vite, shadcn/ui, and Framer Motion.

## Deployment Instructions

### 1. GitHub Upload

1. Create a new repository on GitHub.
2. Initialize your local project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Link to your GitHub repo:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### 2. Vercel Deployment

1. Go to [Vercel](https://vercel.com) and log in.
2. Click **"Add New"** -> **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework.
5. **Environment Variables**: If you have any (like `GEMINI_API_KEY`), add them in the "Environment Variables" section during setup.
6. Click **"Deploy"**.

## Development

To run the project locally:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## License

This project is for educational purposes as a clone demonstration.
