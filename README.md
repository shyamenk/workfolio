# Workfolio - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases professional work, blog posts, and contact information in an elegant and interactive way.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Blog System**: MDX-based blog system with syntax highlighting
- **Project Showcase**: Interactive project cards with technology badges
- **Contact Form**: Server-side email handling with form validation
- **Performance Optimized**: Built with performance in mind
- **SEO Friendly**: Proper meta tags and structured data
- **Dark Mode**: Beautiful dark theme with custom color palette

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **Animations**: Framer Motion
- **Content**: MDX with rehype plugins
- **Email**: Resend
- **Deployment**: Vercel

## 📦 Project Structure

```
workfolio/
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   └── types/            # TypeScript types
├── components/            # React components
│   ├── shared/           # Shared components
│   └── ui/               # UI components
├── content/              # MDX content
│   ├── blog/            # Blog posts
│   └── projects/        # Project data
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/shyamenk/workfolio.git
   cd workfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:

   ```env
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Component Documentation

### HeroSection

The main landing section featuring:

- Animated introduction
- Social media links
- Interactive visual elements
- Key statistics

### ProjectCard

Displays project information with:

- Featured image
- Title and description
- Technology badges
- Hover effects
- Responsive design

### ContactForm

Handles user contact with:

- Form validation
- Loading states
- Success/error messages
- Server-side email handling

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.ts`. You can modify the colors to match your brand.

### Content

- Blog posts: Add MDX files in `content/blog/`
- Projects: Add project data in `content/projects/`
- About: Modify the content in `app/about/page.tsx`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [MDX Documentation](https://mdxjs.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
