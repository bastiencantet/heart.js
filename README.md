# heart.js

**Three JS Heart beating**

## Description

heart.js is a project that simulates a beating heart using Three.js. This project is built with Next.js and includes Docker support.

## Getting Started

### Prerequisites

- Node.js
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bastiencantet/heart.js.git
   cd heart.js
   ```
2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Running development server 

Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## Docker

   ```bash
   docker build -t heart.js .
   docker run -p 3000:3000 heart.js
   ```




   
