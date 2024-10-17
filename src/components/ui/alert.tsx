import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@lib/utils';
import { AlertCircle, CheckCircle, HelpCircle, Info } from 'lucide-react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        info: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-200 [&>svg]:text-blue-500',
        success:
          'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/50 dark:text-green-200 [&>svg]:text-green-500',
        warning:
          'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 [&>svg]:text-yellow-500',
        tip: 'border-purple-200 bg-purple-50 text-purple-800 dark:border-purple-800 dark:bg-purple-900/50 dark:text-purple-200 [&>svg]:text-purple-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof alertVariants> {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant, title, description, children = null, ...props },
    ref
  ) => {
    const IconComponent = {
      default: AlertCircle,
      destructive: AlertCircle,
      info: Info,
      success: CheckCircle,
      warning: AlertCircle,
      tip: HelpCircle,
    }[variant || 'default'];

    return (
      <div
        ref={ref}
        role='alert'
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className='flex items-start gap-4'>
          <IconComponent className='h-4 w-4 mr-2 mt-1 flex-shrink-0' />
          <div>
            {title && <AlertTitle>{title}</AlertTitle>}
            {description && <AlertDescription>{description}</AlertDescription>}
            {children && <div className='mt-2'>{children}</div>}
          </div>
        </div>
      </div>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
