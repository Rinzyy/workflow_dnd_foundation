# Workflow DnD

A modern React-based workflow designer with drag-and-drop functionality, built using Vite, TypeScript, and the DnD Kit library.

## Features

- Interactive drag-and-drop workflow builder
- React Flow integration for workflow visualization
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- State management using Zustand
- Responsive and intuitive user interface

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **DnD Library**: @dnd-kit/core
- **Flow Visualization**: ReactFlow
- **State Management**: Zustand
- **Icons**: Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:3000`

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
workflow_dnd/
├── src/
│   ├── components/    # React components
│   ├── hooks/        # Custom React hooks
│   ├── store/        # Zustand store configurations
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
├── public/           # Static assets
└── [Configuration files]
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Lint the codebase

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
