// src/components/layout/section-wrapper.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative py-10 md:py-14 overflow-hidden bg-[#E1EEFD] rounded-2xl mx-2 sm:mx-3 md:mx-4 px-3 md:px-5',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

SectionWrapper.displayName = 'SectionWrapper'

export { SectionWrapper }