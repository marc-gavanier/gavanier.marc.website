import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/libraries/utils';
import type { Color } from './color';
import type { Scale } from './scale';

export type TextareaClass<Prefix extends `${string}textarea` = 'textarea'> = {
  color?: `${Prefix}-${Color}`;
  kind?: `${Prefix}-${'ghost'}`;
  scale?: `${Prefix}-${Scale}`;
};

export type TextareaProps = ComponentProps<'textarea'> &
  TextareaClass & {
    left?: ReactNode;
    right?: ReactNode;
  };

const Textarea = ({ className, color, kind, scale, left, right, ...props }: TextareaProps) =>
  left == null && right == null ? (
    <textarea className={cn('textarea bg-textarea', color, kind, scale, className)} {...props} />
  ) : (
    <span className={cn('textarea bg-textarea', color, kind, scale, className)} tabIndex={-1}>
      {left}
      <textarea {...props} />
      {right}
    </span>
  );

export { Textarea };
