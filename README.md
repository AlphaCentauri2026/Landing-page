# Hamilton Web Design

A modern, professional landing page for a website template library built with Next.js and Tailwind CSS.

## 🚀 Features

- **Clean, Minimal Design**: Modern grid-based layout with soft shadows and rounded corners
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Professional Components**: Header, Hero, Categories, Featured Templates, About, and Footer sections
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Built with Next.js for optimal performance
- **Accessible**: Semantic HTML and proper ARIA attributes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono (optimized by Next.js)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
└── components/
    ├── Header.tsx         # Navigation header
    ├── Hero.tsx          # Hero section
    ├── Categories.tsx    # Template categories grid
    ├── FeaturedTemplates.tsx # Featured templates showcase
    ├── About.tsx         # About section
    ├── Footer.tsx        # Site footer
    └── index.ts          # Component exports
```

## 🏃 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📱 Sections

### Header
- Logo placeholder on the left
- Navigation links (Templates, Categories, About, Contact)
- "Browse Templates" CTA button
- Mobile-responsive hamburger menu

### Hero Section
- Large headline: "Ready-to-Use Website Templates"
- Descriptive subtext about the template library
- "Get Started" primary CTA button
- Hero image placeholder with modern gradient design

### Categories Section
- Grid of 4 template categories:
  - Landing Pages
  - Dashboards
  - Ecommerce
  - Portfolio
- Each card includes icon, title, description, and "View Templates" link

### Featured Templates Section
- Showcase of 3 featured templates with:
  - Template preview placeholder
  - Title and description
  - "Preview Template" button
  - "View All Templates" secondary CTA

### About Section
- Detailed description of the template library
- Feature highlights (Fast Setup, Production Ready, Fully Responsive, Regular Updates)
- Professional presentation of library benefits

### Footer
- Brand information and social media links
- Quick navigation links
- Legal links (Terms, Privacy, License)
- Copyright notice with dynamic year

## 🎨 Design System

- **Colors**: Blue (#2563eb) as primary, Gray scale for text and backgrounds
- **Typography**: Clean system fonts with optimized line heights
- **Spacing**: Generous spacing with consistent padding/margins
- **Shadows**: Soft shadows for depth and modern appearance
- **Borders**: Rounded corners (8px-12px radius) throughout

## 🔧 Customization

### Adding New Templates
Edit the `featuredTemplates` array in `src/components/FeaturedTemplates.tsx`

### Modifying Categories
Update the `categories` array in `src/components/Categories.tsx`

### Changing Colors/Themes
Modify Tailwind classes or update the design tokens in `globals.css`

### Content Updates
All text content is easily editable within each component file

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy using Vercel CLI or connect to GitHub
```

### Other Platforms
The built files in `out/` directory can be deployed to any static hosting service.

## 📄 License

This project is part of the Hamilton Web Design template library.
