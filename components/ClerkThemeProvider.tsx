'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from '@/contexts/ThemeContext';

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({
  children,
}: ClerkThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        variables: {
          colorPrimary: theme === 'dark' ? '#10b981' : '#059669', // emerald-500/600
          colorBackground: theme === 'dark' ? '#1f2937' : '#ffffff',
          colorInputBackground: theme === 'dark' ? '#374151' : '#f9fafb',
          colorInputText: theme === 'dark' ? '#f3f4f6' : '#1f2937',
          borderRadius: '0.75rem',
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: theme === 'dark' ? '#10b981' : '#059669',
            '&:hover': {
              backgroundColor: theme === 'dark' ? '#059669' : '#047857',
            },
          },
          card: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(16px)',
            border:
              theme === 'dark'
                ? '1px solid rgba(75, 85, 99, 0.3)'
                : '1px solid rgba(229, 231, 235, 0.3)',
          },
          headerTitle: {
            color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
          },
          headerSubtitle: {
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },
          socialButtonsBlockButton: {
            border:
              theme === 'dark'
                ? '1px solid rgba(75, 85, 99, 0.3)'
                : '1px solid rgba(229, 231, 235, 0.3)',
            backgroundColor:
              theme === 'dark'
                ? 'rgba(55, 65, 81, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
          },
          dividerLine: {
            backgroundColor:
              theme === 'dark'
                ? 'rgba(75, 85, 99, 0.3)'
                : 'rgba(229, 231, 235, 0.3)',
          },
          formFieldInput: {
            backgroundColor:
              theme === 'dark'
                ? 'rgba(55, 65, 81, 0.5)'
                : 'rgba(249, 250, 251, 0.8)',
            backdropFilter: 'blur(8px)',
            border:
              theme === 'dark'
                ? '1px solid rgba(75, 85, 99, 0.3)'
                : '1px solid rgba(229, 231, 235, 0.3)',
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}