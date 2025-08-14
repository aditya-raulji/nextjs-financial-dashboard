# 🏦 Wealth Elite - Financial Dashboard

<a href="https://nextjs-financial-dashboard-6r8v.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-blue" alt="Live Demo" />
</a>










<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

**A modern, responsive financial dashboard built with Next.js 14, Tailwind CSS, and Recharts**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Project Overview](#-project-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 Screenshots](#-screenshots)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Project Structure](#️-project-structure)
- [📊 Dashboard Components](#-dashboard-components)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Development](#-development)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- Clean, professional design with smooth animations
- Intuitive user interface with excellent user experience
- Consistent design language throughout the application

### 📱 **Responsive Design**
- **Mobile-first approach** with adaptive layouts
- Seamless experience across all devices
- Optimized for mobile, tablet, and desktop

### 📊 **Interactive Data Visualization**
- **Real-time charts** using Recharts library
- **Bubble charts** for client analytics
- **Combined bar and line charts** for business metrics
- **Multi-line charts** for monthly MIS data

### ⚡ **Performance & Reliability**
- **Fast loading** with Next.js 14 optimizations
- **Error boundaries** for graceful error handling
- **Loading states** with smooth animations
- **TypeScript** for better development experience

### 🌙 **Advanced Features**
- **Dark mode toggle** with persistent preferences
- **Dynamic filtering** for time-based data
- **Mock API endpoints** for realistic data simulation
- **Search functionality** in header

---

## 🎯 Project Overview

Wealth Elite Financial Dashboard is a comprehensive web application designed for wealth management professionals. It provides real-time insights into financial metrics, client analytics, and business performance through an intuitive and visually appealing interface.

### 🎯 **Key Objectives**
- Provide comprehensive financial data visualization
- Enable quick access to key performance indicators
- Offer responsive design for all device types
- Implement modern web development best practices

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.31 | React framework with App Router |
| **TypeScript** | 5.0 | Type safety and better development |
| **Tailwind CSS** | 3.3.0 | Utility-first CSS framework |
| **Recharts** | 2.8.0 | Data visualization library |
| **Lucide React** | 0.294.0 | Beautiful icon library |
| **React** | 18 | UI library |

### 🔧 **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 📱 Screenshots

<div align="center">

### 🖥️ Desktop View
![Desktop Dashboard](https://via.placeholder.com/800x400/1f2937/ffffff?text=Desktop+Dashboard+View)

### 📱 Mobile View
![Mobile Dashboard](https://via.placeholder.com/400x600/1f2937/ffffff?text=Mobile+Dashboard+View)

### 🌙 Dark Mode
![Dark Mode](https://via.placeholder.com/800x400/374151/ffffff?text=Dark+Mode+View)

</div>

---

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/financial-dashboard.git
   cd financial-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |

---

## 🏗️ Project Structure

```
financial-dashboard/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                      # API routes
│   │   └── 📁 dashboard/
│   │       └── 📄 route.ts          # Mock API endpoint
│   ├── 📄 globals.css               # Global styles
│   ├── 📄 layout.tsx                # Root layout
│   └── 📄 page.tsx                  # Main dashboard page
├── 📁 components/                   # React components
│   ├── 📁 ui/                       # Reusable UI components
│   │   ├── 📄 Button.tsx
│   │   ├── 📄 Card.tsx
│   │   ├── 📄 LoadingSpinner.tsx
│   │   └── 📄 ErrorBoundary.tsx
│   ├── 📁 charts/                   # Chart components
│   │   ├── 📄 ClientsChart.tsx
│   │   ├── 📄 SIPBusinessChart.tsx
│   │   └── 📄 MonthlyMISChart.tsx
│   ├── 📄 Header.tsx                # Header component
│   ├── 📄 Navigation.tsx            # Navigation menu
│   ├── 📄 KPICard.tsx               # KPI display cards
│   ├── 📄 TimeFilter.tsx            # Time filter buttons
│   ├── 📄 TransactionCard.tsx       # Transaction summary cards
│   └── 📄 DarkModeToggle.tsx        # Dark mode toggle
├── 📁 lib/                          # Utility functions
│   └── 📄 utils.ts                  # Helper functions
├── 📁 public/                       # Static assets
├── 📄 package.json                  # Dependencies and scripts
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 next.config.js                # Next.js configuration
└── 📄 README.md                     # Project documentation
```

---

## 📊 Dashboard Components

### 🎯 **Header & Navigation**
- **Wealth Elite branding** with gradient logo
- **Search functionality** with placeholder text
- **Navigation icons** (notifications, settings, user, etc.)
- **Dark mode toggle** for theme switching
- **Complete navigation menu** with all required sections

### 📈 **Key Performance Indicators (KPIs)**
- **AUM (Assets Under Management)**: Current value with MoM change
- **SIP (Systematic Investment Plan)**: Current value with MoM change
- **Trend indicators** with color-coded performance
- **Action buttons** for detailed reports and trends

### ⏰ **Time Range Filter**
- **Interactive buttons** for different time periods
- **Dynamic filtering** capability
- **Visual feedback** for active selection
- **Responsive design** for all screen sizes

### 💳 **Transaction Summary Cards**
- **Purchases**: Transaction count and amount
- **Redemptions**: Transaction count and amount
- **Rejected Transactions**: Failed transaction metrics
- **SIP Rejections**: SIP-specific rejection data
- **New SIP**: New systematic investment plans

### 📊 **Data Visualizations**
- **Clients Chart**: Bubble chart showing client categories
- **SIP Business Chart**: Combined bar and line chart
- **Monthly MIS Chart**: Multi-line chart for monthly metrics

---

## 🎨 Customization

### 🎨 **Color Scheme**
The dashboard uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fef2f2',   // Light red
    100: '#fee2e2',  // Lighter red
    500: '#ef4444',  // Main red
    600: '#dc2626',  // Darker red
    700: '#b91c1c',  // Darkest red
  },
  secondary: {
    50: '#f0f9ff',   // Light blue
    100: '#e0f2fe',  // Lighter blue
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',  // Darker blue
    700: '#0369a1',  // Darkest blue
  }
}
```

### 🎯 **Component Customization**
All components are built with Tailwind CSS and can be easily customized:

1. **Modify component files** in the `components/` directory
2. **Extend Tailwind configuration** in `tailwind.config.js`
3. **Update color schemes** and styling as needed
4. **Add new components** following the existing patterns

### 📱 **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 📱 Responsive Design

The dashboard is fully responsive and optimized for all devices:

### 📱 **Mobile Experience**
- **Touch-friendly** interface elements
- **Optimized layouts** for small screens
- **Collapsible navigation** for better UX
- **Fast loading** on mobile networks

### 💻 **Desktop Experience**
- **Full-featured** interface with all components visible
- **Hover effects** and interactive elements
- **Keyboard navigation** support
- **High-resolution** graphics and charts

### 📊 **Chart Responsiveness**
- **Auto-scaling** charts based on screen size
- **Touch interactions** on mobile devices
- **Optimized performance** across all devices
- **Consistent data visualization** experience

---

## 🔧 Development

### 🛠️ **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests if applicable**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### 🧪 **Testing**

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
```

### 📝 **Code Style**

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Conventional commits** for version control

---

## 🚀 Deployment

### 🌐 **Vercel (Recommended)**

1. **Push your code** to GitHub
2. **Connect your repository** to Vercel
3. **Deploy automatically** with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/financial-dashboard)

### ☁️ **Other Platforms**

The app can be deployed to any platform that supports Next.js:

| Platform | Documentation |
|----------|---------------|
| **Netlify** | [Netlify Docs](https://docs.netlify.com/) |
| **AWS Amplify** | [AWS Docs](https://docs.aws.amazon.com/amplify/) |
| **Railway** | [Railway Docs](https://docs.railway.app/) |
| **DigitalOcean** | [DigitalOcean Docs](https://docs.digitalocean.com/) |

### 🔧 **Environment Variables**

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=Wealth Elite Dashboard
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 **Reporting Bugs**
- Use the [GitHub issue tracker](https://github.com/yourusername/financial-dashboard/issues)
- Provide detailed bug reports with steps to reproduce
- Include screenshots or videos if applicable

### 💡 **Requesting Features**
- Submit feature requests through GitHub issues
- Describe the feature and its benefits
- Consider implementation complexity

### 🔧 **Code Contributions**
1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Add tests if applicable**
5. **Submit a pull request**

### 📋 **Contribution Guidelines**
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed
- Ensure all tests pass

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 📜 **License Summary**
- ✅ **Commercial use** allowed
- ✅ **Modification** allowed
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ❌ **Liability** limited
- ❌ **Warranty** limited

---

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for the beautiful chart library
- **Lucide** for the icon library
- **All contributors** who helped improve this project

---

## 📞 Support

### 🆘 **Getting Help**
- 📧 **Email**: support@wealthelite.com
- 💬 **Discord**: [Join our community](https://discord.gg/wealthelite)
- 📖 **Documentation**: [Read the docs](#)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/financial-dashboard/issues)

### 🔗 **Useful Links**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

<div align="center">

**Made with ❤️ by the Wealth Elite Team**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/financial-dashboard?style=social)](https://github.com/yourusername/financial-dashboard/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/financial-dashboard?style=social)](https://github.com/yourusername/financial-dashboard/network)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/financial-dashboard)](https://github.com/yourusername/financial-dashboard/issues)
[![GitHub license](https://img.shields.io/github/license/yourusername/financial-dashboard)](https://github.com/yourusername/financial-dashboard/blob/main/LICENSE)

**⭐ Star this repository if you found it helpful!**

</div>
