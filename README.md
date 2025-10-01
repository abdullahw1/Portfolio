# 🚀 Interactive Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features an interactive timeline resume, smooth animations, and a clean, professional design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2.33-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Interactive Timeline Resume**: Expandable/collapsible sections with smooth animations
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI/UX**: Clean design with hover effects and smooth transitions
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Type Safety**: Full TypeScript implementation
- **Easy Customization**: Well-structured code for easy personalization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdullahw1/Portfolio.git
   cd Portfolio/personal-site
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
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
personal-site/
├── app/                          # Next.js App Router directory
│   ├── components/              # React components
│   │   ├── ui/                 # Reusable UI components
│   │   │   └── TimelineItem.tsx # Timeline entry component
│   │   ├── Contact.tsx         # Contact section component
│   │   ├── Hero.tsx           # Hero/landing section component
│   │   ├── Navigation.tsx     # Navigation bar component
│   │   ├── Projects.tsx       # Projects showcase component
│   │   ├── Repositories.tsx   # GitHub repositories component
│   │   └── Resume.tsx         # Interactive timeline resume
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Main page component
├── public/                      # Static assets (add your images here)
├── .gitignore                  # Git ignore rules
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Customization Guide

### 1. Personal Information

**File: `app/components/Hero.tsx`**
- **Profile Picture**: Replace the placeholder div with your image
- **Name**: Update the `h1` tag with your name
- **Title**: Update the `h2` tag with your professional title
- **Description**: Modify the paragraph text
- **Social Links**: Update the GitHub, LinkedIn, and email links

```tsx
// Replace this placeholder:
<div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
  AW
</div>

// With your actual image:
<img 
  src="/your-profile-image.jpg" 
  alt="Your Name"
  className="w-32 h-32 mx-auto mb-8 rounded-full object-cover"
/>
```

### 2. Resume/Timeline Data

**File: `app/components/Resume.tsx`**

Update the `timelineData` array with your information:

```tsx
const timelineData: TimelineEntry[] = [
  {
    id: 'your-job-id',
    type: 'experience', // or 'education' or 'skill'
    title: 'Your Job Title',
    subtitle: 'Company Name',
    location: 'City, State',
    period: 'Start Date - End Date',
    summary: 'Brief description of your role',
    details: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      // Add more as needed
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'] // Optional
  },
  // Add more entries...
]
```

### 3. Projects Section

**File: `app/components/Projects.tsx`**
- Add your project data
- Include project images in the `public/` folder
- Update project descriptions, technologies, and links

### 4. Contact Information

**File: `app/components/Contact.tsx`**
- Update your email address
- Add your social media links
- Modify contact form behavior (if implemented)

### 5. GitHub Repositories

**File: `app/components/Repositories.tsx`**
- Connect to GitHub API to fetch your repositories
- Or manually add your featured repositories

### 6. Styling and Colors

**File: `tailwind.config.js`**

Customize your color scheme:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          // Add more shades as needed
        }
      }
    }
  }
}
```

### 7. Adding Images

1. **Create a `public/images/` directory**
2. **Add your images** (profile picture, project screenshots, etc.)
3. **Reference them in components**:
   ```tsx
   <img src="/images/your-image.jpg" alt="Description" />
   ```

## 📝 Available Scripts

- **`npm run dev`**: Start development server
- **`npm run build`**: Build for production
- **`npm run start`**: Start production server
- **`npm run lint`**: Run ESLint for code quality

## 🛠️ Key Components Explained

### TimelineItem Component
**Location**: `app/components/ui/TimelineItem.tsx`

Reusable component for timeline entries with:
- Expand/collapse functionality
- Smooth height transitions
- Type-specific styling (experience, education, skills)
- Technology badges

### Resume Component
**Location**: `app/components/Resume.tsx`

Main timeline resume featuring:
- Interactive timeline with clickable entries
- Floating PDF download button
- Impact metrics section
- Responsive grid layout

### Hero Component
**Location**: `app/components/Hero.tsx`

Landing section with:
- Profile image/placeholder
- Name and professional title
- Social media links
- Call-to-action buttons

## 🎯 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out/` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Add to `next.config.js`:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```
2. Build and deploy the `out/` folder

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**: Make sure images are in the `public/` directory
2. **Styles not applying**: Check Tailwind CSS configuration
3. **Build errors**: Ensure all TypeScript types are correct
4. **Animations not working**: Verify Framer Motion is properly installed

### Development Tips

- Use the browser's developer tools to inspect and debug
- Check the console for any JavaScript errors
- Ensure all imports are correct and files exist
- Test responsiveness on different screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use! If you make improvements that could benefit others, consider submitting a pull request.

## 📞 Support

If you have questions or need help customizing your portfolio:
- Open an issue on GitHub
- Check the documentation
- Review the code comments for guidance

---

**Happy coding! 🚀** Make this portfolio your own and showcase your amazing work to the world!