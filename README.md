# Streaming Dashboard

A Next.js dashboard application for viewing and managing previously streamed video content.

## 📺 Overview

This dashboard provides an interface to browse, search, and view streaming data from previously recorded video streams.

## 🛠️ Technology Stack

- **Framework**: Next.js
- **Language**: JavaScript/TypeScript
- **Styling**: CSS/Tailwind CSS

## 📋 Prerequisites

- Node.js 16+
- npm or yarn

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/streaming-dashboard.git
cd streaming-dashboard
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your-api-endpoint
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
streaming-dashboard/
├── pages/              # Next.js pages
├── components/         # Reusable components
├── styles/            # CSS styles
├── public/            # Static assets
├── lib/               # Utility functions
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 📝 License

This project is licensed under the MIT License.

---

**Streaming Dashboard** - View your streaming data with ease 📊