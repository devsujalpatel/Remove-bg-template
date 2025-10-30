import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props interface for the BgWhiteWrapper component
 */
interface BgWhiteWrapperProps {
  /** The content to be wrapped inside the white background container */
  children: React.ReactNode;
  /** Additional CSS classes to apply to the inner container */
  className?: string;
  /** Optional ID for the wrapper section */
  id?: string;
  /** Optional aria-label for accessibility */
  'aria-label'?: string;
  /** Optional role for accessibility */
  role?: string;
}

/**
 * A professional wrapper component that provides a white background container
 * with responsive padding.
 * 
 * @param props - The component props
 * @returns A section element containing a white background wrapper
 * 
 * @example
 * ```tsx
 * <BgWhiteWrapper className="my-custom-class">
 *   <h1>My Content</h1>
 * </BgWhiteWrapper>
 * ```
 */
const BgWhiteWrapper: React.FC<BgWhiteWrapperProps> = ({ 
  children, 
  className,
  id,
  'aria-label': ariaLabel,
  role = 'region'
}) => {
  return (
    <section 
      className="w-full"
      id={id}
      aria-label={ariaLabel}
      role={role}
    >
      <div 
        className={cn(
          "container",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

// Set display name for better debugging
BgWhiteWrapper.displayName = 'BgWhiteWrapper';

export default BgWhiteWrapper;
