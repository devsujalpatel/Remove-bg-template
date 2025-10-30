// src/components/layout/content-wrapper.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative z-10 w-full max-w-[1441px] mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ContentWrapper.displayName = 'ContentWrapper'

export { ContentWrapper }