
# Wealth Elite - Financial Dashboard

A modern, responsive financial dashboard built with Next.js 14, Tailwind CSS, and Recharts. This dashboard provides comprehensive financial metrics, charts, and client information for wealth management professionals.

---- 

<a href="https://nextjs-financial-dashboard-6r8v.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-blue" alt="Live Demo" />
</a>

------
![Final UI](image.png)

------

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with dark/light mode support
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🌙 **Dark Mode** - Automatic theme switching with system preference detection
- 📊 **Interactive Charts** - Built with Recharts for data visualization
- ⚡ **Performance Optimized** - Built with Next.js 15 App Router
- 🎯 **TypeScript** - Full type safety and better development experience

## Tech Stack

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Data**: Mock API endpoints for realistic data simulation
- **Interactive Charts**: Beautiful data visualizations using Recharts
- **Dynamic Filters**: Time-based filtering for transaction data
- **Loading States**: Smooth loading animations and error handling
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript
- **Theme**: Dark/Light mode with CSS variables

## 📊 Dashboard Components
## Prerequisites

### Header & Navigation
- Wealth Elite branding with gradient logo
- Search functionality
- Navigation icons (notifications, settings, user, etc.)
- Main navigation menu with all required sections
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Key Performance Indicators (KPIs)
- **AUM (Assets Under Management)**: Current value with MoM change
- **SIP (Systematic Investment Plan)**: Current value with MoM change
- Trend indicators with color-coded performance
## Getting Started

### Transaction Summary
- **Purchases**: Transaction count and amount
- **Redemptions**: Transaction count and amount
- **Rejected Transactions**: Failed transaction metrics
- **SIP Rejections**: SIP-specific rejection data
- **New SIP**: New systematic investment plans
### 1. Clone the repository

### Data Visualizations
- **Clients Chart**: Bubble chart showing client categories
- **SIP Business Chart**: Combined bar and line chart
- **Monthly MIS Chart**: Multi-line chart for monthly metrics
```bash
git clone <your-repo-url>
cd nextjs-financial-dashboard
```

## 🛠️ Tech Stack
### 2. Install dependencies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Responsive**: Mobile-first design
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 📦 Installation
### 3. Run the development server

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financial-dashboard
   ```
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. **Install dependencies**
   ```bash
   npm install
   ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Run the development server**
   ```bash
   npm run dev
   ```
### 4. Build for production

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)
```bash
npm run build
npm start
```

## 🏗️ Project Structure
## Project Structure

```
financial-dashboard/
├── app/
│   ├── api/
│   │   └── dashboard/
│   │       └── route.ts          # Mock API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main dashboard page
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── charts/                   # Chart components
│   │   ├── ClientsChart.tsx
│   │   ├── SIPBusinessChart.tsx
│   │   └── MonthlyMISChart.tsx
│   ├── Header.tsx                # Header component
│   ├── Navigation.tsx            # Navigation menu
│   ├── KPICard.tsx               # KPI display cards
│   ├── TimeFilter.tsx            # Time filter buttons
│   └── TransactionCard.tsx       # Transaction summary cards
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
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

## 🎨 Customization
## Available Scripts

### Colors
The dashboard uses a custom color palette defined in `tailwind.config.js`:
- Primary: Red tones (`#ef4444`)
- Secondary: Blue tones (`#0ea5e9`)
- Success: Green tones
- Warning: Orange tones
- Error: Red tones
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

### Styling
All components use Tailwind CSS classes and can be easily customized by modifying the component files or extending the Tailwind configuration.
## Features Overview

## 📱 Responsive Design
### Dashboard Components
- **KPI Cards** - Key performance indicators with trend analysis
- **Transaction Overview** - Purchase, redemption, and rejection statistics
- **Client Analytics** - Interactive bubble chart showing client distribution
- **SIP Business Chart** - Monthly SIP business trends
- **Monthly MIS Overview** - Comprehensive monthly performance data

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
### Theme System
- Automatic dark/light mode detection
- System preference integration
- Persistent theme storage
- Smooth transitions

## 🔧 Development
### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized for tablets and desktops

### Available Scripts
## API Endpoints

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `GET /api/dashboard` - Returns mock dashboard data

## Customization

### Adding New Features
### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: Red theme (#EF4444)
- Secondary: Blue theme (#0EA5E9)
- Success: Green theme (#22C55E)
- Warning: Amber theme (#F59E0B)

1. **New Components**: Create in `components/` directory
2. **New API Routes**: Add to `app/api/` directory
3. **New Charts**: Extend existing chart components or create new ones
4. **Styling**: Use Tailwind CSS classes or extend the configuration
### Adding New Components
1. Create your component in the appropriate directory
2. Use the existing UI components from `components/ui/`
3. Follow the established naming conventions
4. Add proper TypeScript interfaces

## 🚀 Deployment
## Troubleshooting

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically
### Common Issues

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform
1. **TypeScript Errors**: Run `npm run type-check` to identify type issues
2. **Build Errors**: Ensure all dependencies are installed with `npm install`
3. **Styling Issues**: Check if Tailwind CSS is properly configured

## 📈 Future Enhancements
### Development Tips

- [ ] Dark mode toggle
- [ ] Real-time data updates
- [ ] Export functionality for reports
- [ ] User authentication
- [ ] Advanced filtering options
- [ ] More chart types
- [ ] Data export to Excel/PDF
- Use the `'use client'` directive for client-side components
- Leverage the `cn()` utility function for conditional classes
- Follow the established component patterns
- Use the theme context for dark/light mode functionality

## 🤝 Contributing
## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License
## License

This project is licensed under the MIT License.

## 👥 Support

For support or questions, please open an issue in the GitHub repository.

---
## Support

**Built with ❤️ using Next.js 14 and Tailwind CSS**
For support and questions, please open an issue in the repository.
