
# Wealth Elite - Financial Dashboard

A modern, responsive financial dashboard built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with dark/light mode support
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🌙 **Dark Mode** - Automatic theme switching with system preference detection
- 📊 **Interactive Charts** - Built with Recharts for data visualization
- ⚡ **Performance Optimized** - Built with Next.js 15 App Router
- 🎯 **TypeScript** - Full type safety and better development experience

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript
- **Theme**: Dark/Light mode with CSS variables

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd nextjs-financial-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-financial-dashboard/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── charts/            # Chart components
│   ├── ui/                # UI components
│   └── ...                # Other components
├── lib/                    # Utility functions and contexts
├── public/                 # Static assets
└── ...                     # Configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Features Overview

### Dashboard Components
- **KPI Cards** - Key performance indicators with trend analysis
- **Transaction Overview** - Purchase, redemption, and rejection statistics
- **Client Analytics** - Interactive bubble chart showing client distribution
- **SIP Business Chart** - Monthly SIP business trends
- **Monthly MIS Overview** - Comprehensive monthly performance data

### Theme System
- Automatic dark/light mode detection
- System preference integration
- Persistent theme storage
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized for tablets and desktops

## API Endpoints

- `GET /api/dashboard` - Returns mock dashboard data

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: Red theme (#EF4444)
- Secondary: Blue theme (#0EA5E9)
- Success: Green theme (#22C55E)
- Warning: Amber theme (#F59E0B)

### Adding New Components
1. Create your component in the appropriate directory
2. Use the existing UI components from `components/ui/`
3. Follow the established naming conventions
4. Add proper TypeScript interfaces

## Troubleshooting

### Common Issues

1. **TypeScript Errors**: Run `npm run type-check` to identify type issues
2. **Build Errors**: Ensure all dependencies are installed with `npm install`
3. **Styling Issues**: Check if Tailwind CSS is properly configured

### Development Tips

- Use the `'use client'` directive for client-side components
- Leverage the `cn()` utility function for conditional classes
- Follow the established component patterns
- Use the theme context for dark/light mode functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.