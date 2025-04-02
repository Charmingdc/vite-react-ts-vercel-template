# ✨ Vite + React + TypeScript + Vercel Template ✨

A modern and streamlined template for building high-performance web applications using **React**, **TypeScript**, and **Vite**, with **Vercel serverless functions** seamlessly integrated. Ready for rapid development and deployment on **Vercel**! 🚀

---

## 🛠️ Installation

Get started with these simple steps:

### 1️⃣ Clone the Repository:
```bash
git clone git@github.com:Charmingdc/vite-react-ts-vercel-template.git
cd vite-react-ts-vercel-template
```

### 2️⃣ Install Dependencies:
```bash
npm install  # or yarn install, pnpm install
```

### 3️⃣ Start the API Server:
For local development, start the Vercel serverless function:
```bash
vercel dev --listen 3000
```

### 4️⃣ Start the Frontend Development Server:
```bash
npm run dev  # or yarn dev, pnpm dev
```
This will launch the app at `http://localhost:5173`.

Alternatively, you can use the Vercel CLI to handle both frontend and serverless functions (Note: **Memory-intensive!**):
```bash
vercel dev
```

---

## 💻 Usage

This template is built for ease of use and extension. Below are key usage examples:

### 📡 API Requests
This template includes a **pre-configured** `/api` endpoint for Vercel serverless functions.

#### Example Usage:
```tsx
// src/App.tsx
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/handler")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
```

#### Sample API Endpoint:
```ts
// api/handler.ts
import { VercelRequest, VercelResponse } from "@vercel/node";

const handler = (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({ message: "Hello from Vercel!" });
};

export default handler;
```

---

### ⚙️ Configuration
Customize the `vite.config.ts` file as needed.

#### Example Vite Configuration:
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
```

---

## ✨ Features

✅ **React 19** – Build modern UI components with React.  
✅ **TypeScript** – Strongly-typed JavaScript for better code quality.  
✅ **Vite** – Lightning-fast development server and bundler.  
✅ **Vercel** – Seamless cloud deployment with built-in serverless functions.  
✅ **ESLint** – Keep your code clean and maintainable.  
✅ **Example API Endpoint** – Ready-to-use serverless function.  

---

## 💻 Technologies Used

| Technology   | Description                                   | Link                                  |
|-------------|---------------------------------------------|--------------------------------------|
| React        | Library for building UI components          | [reactjs.org](https://reactjs.org/)   |
| TypeScript   | Typed superset of JavaScript               | [typescriptlang.org](https://www.typescriptlang.org/) |
| Vite         | Fast frontend build tool                   | [vitejs.dev](https://vitejs.dev/)     |
| Vercel       | Cloud platform for static & serverless apps | [vercel.com](https://vercel.com/) |
| ESLint       | JavaScript linter                          | [eslint.org](https://eslint.org/)     |

---

## 🤝 Contributing

Contributions are welcome! 🚀 Here’s how you can contribute:

- 🐛 **Report Bugs** – Open issues with clear steps to reproduce.
- 💡 **Suggest Features** – Propose new ideas for improvement.
- 🛠️ **Submit Pull Requests** – Enhance the project with code contributions.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🧑‍💻 Author Info

- **Author**: Charmingdc  
- **GitHub**: [Charmingdc](https://github.com/Charmingdc)
- **X (Twitter)**: [Charmingdc01](https://github.com/Charmingdc)

---

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)

