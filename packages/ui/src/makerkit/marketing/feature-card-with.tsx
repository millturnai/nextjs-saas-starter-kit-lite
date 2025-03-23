import React from 'react';

import { cn } from '../../lib/utils';
import { CardDescription, CardHeader, CardTitle } from '../../shadcn/card';

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  description: string;
}

export const FeatureCardWith: React.FC<FeatureCardProps> = ({
  className,
  label,
  description,
  ...props
}) => {
  return (
    <div className={cn('rounded-xl border p-4', className)} {...props}>
      <CardHeader>
        <CardTitle className="text-xl font-medium">{label}</CardTitle>

        <CardDescription className="text-muted-foreground max-w-xs text-sm font-normal">
          {description}
        </CardDescription>
        <CardDescription className="text-muted-foreground max-w-xs text-sm font-normal mt-8">
          {props.children}
        </CardDescription>
      </CardHeader>
    </div>
  );
};
