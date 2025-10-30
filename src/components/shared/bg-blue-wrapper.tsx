import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props interface for the BgBlueWrapper component
 */
interface BgBlueWrapperProps {
  /** The content to be wrapped inside the blue background container */
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
 * A professional wrapper component that provides a blue background container
 * with responsive padding and rounded corners.
 * 
 * @param props - The component props
 * @returns A section element containing a blue background wrapper
 * 
 * @example
 * ```tsx
 * <BgBlueWrapper className="my-custom-class">
 *   <h1>My Content</h1>
 * </BgBlueWrapper>
 * ```
 */
const BgBlueWrapper: React.FC<BgBlueWrapperProps> = ({ 
  children, 
  className,
  id,
  'aria-label': ariaLabel,
  role = 'region'
}) => {
  return (
    <section 
      className="w-full xl:px-[50px] lg:px-8 px-4"
      id={id}
      aria-label={ariaLabel}
      role={role}
    >
      <div 
        className={cn(
          "w-full bg-[#E1EEFD] rounded-[20px]",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

// Set display name for better debugging
BgBlueWrapper.displayName = 'BgBlueWrapper';

export default BgBlueWrapper;
