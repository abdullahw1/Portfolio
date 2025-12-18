import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

// Force rebuild - portfolio should be fully interactive

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdullah Waheed - AI Infrastructure Engineer',
  description: 'Senior AI Infrastructure Engineer specializing in LLM security, autonomous agents, and enterprise-scale AI deployments. Built DefendAI\'s core platform processing 10M+ daily requests.',
  keywords: 'AI Engineer, LLM Security, Kubernetes, DevOps, Machine Learning, DefendAI',
  authors: [{ name: 'Abdullah Waheed' }],
  openGraph: {
    title: 'Abdullah Waheed - AI Infrastructure Engineer',
    description: 'Senior AI Infrastructure Engineer specializing in LLM security and enterprise AI deployments',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}