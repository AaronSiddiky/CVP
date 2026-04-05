# Columbia Venture Partners

A modern, responsive website for Columbia Venture Partners - the student club for entrepreneurship at Columbia University.

## Features

- **Modern Design**: Clean, professional layout with green accent color
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js 14 and optimized for performance
- **Accessible**: Semantic HTML and proper contrast ratios
- **TypeScript**: Full type safety throughout the codebase

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Modern system fonts (San Francisco, Segoe UI, Roboto)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CVP
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
CVP/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   └── HeroImage.tsx    # Hero section image
├── public/              # Static assets
└── ...config files
```

## Design Features

- **Header**: Navigation with Columbia Venture Partners branding
- **Hero Section**: Main content area with call-to-action buttons
- **Events Section**: Upcoming events and activities
- **Responsive Design**: Mobile-first approach with breakpoints
- **Green Theme**: Professional green color scheme
- **Typography**: Clean system fonts for modern, professional text

## Customization

### Colors

The green theme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'brand-green': '#22c55e',
  'brand-green-dark': '#16a34a',
}
```

### Content

Update the content in `app/page.tsx` to modify:
- Hero section text
- Event listings
- Call-to-action buttons
- Organization information

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel**: `npm run build` and deploy
- **Netlify**: Configure build command as `npm run build`
- **Railway**: Deploy with automatic builds

## License

This project is for Columbia Venture Partners educational use.
