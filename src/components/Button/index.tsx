import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none border-2',
  {
    variants: {
      variant: {
        primary:
          'bg-button-primary border-button-primary text-white ' +
          'hover:bg-button-primary-hover hover:border-button-primary-hover ' +
          'focus:bg-button-primary-focus focus:border-button-primary-focus ' +
          'disabled:bg-button-disabled disabled:text-foreground-subtle disabled:border-button-disabled',
        secondary:
          'bg-white text-grey-900 border-border ' +
          'hover:bg-button-secondary-hover hover:border-button-secondary-border-hover ' +
          'focus:bg-button-secondary-focus focus:border-button-secondary-border-focus ' +
          'disabled:bg-button-secondary-disabled disabled:border-button-secondary-border-disabled disabled:text-foreground-subtle',
        tertiary:
          'bg-transparent border-transparent text-foreground ' +
          'hover:bg-button-tertiary-hover hover:border-button-tertiary-hover ' +
          'focus:bg-button-tertiary-focus focus:border-button-tertiary-focus ' +
          'disabled:text-foreground-subtle',
        success:
          'bg-green-400 border-green-400 text-black ' +
          'hover:bg-green-500 hover:border-green-500 ' +
          'focus:bg-green-600 focus:border-green-600 ' +
          'disabled:bg-button-disabled disabled:border-button-disabled disabled:text-foreground-subtle',
        danger:
          'bg-red-600 border-red-600 text-white ' +
          'hover:bg-red-700 hover:border-red-700 ' +
          'focus:bg-red-800 focus:border-red-800 ' +
          'disabled:bg-button-disabled disabled:border-button-disabled disabled:text-foreground-subtle'
      },
      size: {
        lg: 'px-4 py-3 text-base',
        md: 'p-2.5 text-sm',
        sm: 'px-2.5 py-2 text-sm',
        xs: 'px-2 py-2.5 text-xs'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
