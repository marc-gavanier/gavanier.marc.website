import { Textarea as TextareaBase, type TextareaProps as TextareaBaseProps } from '@/libraries/ui/primitives/textarea';
import { cn } from '@/libraries/utils';
import { useFieldContext } from '../form-context';
import { hasError } from './has-error';

type InputProps = Omit<TextareaBaseProps, 'name'> & {
  isPending: boolean;
  isConnected?: boolean;
};

export const Textarea = ({ className = 'w-full', isPending, isConnected = true, ...props }: InputProps) => {
  const { name, state, handleBlur, handleChange } = useFieldContext<string>();

  return isConnected ? (
    <TextareaBase
      id={name}
      name={name}
      value={state.value}
      disabled={isPending ?? props.disabled}
      onBlur={handleBlur}
      onChange={(e) => handleChange(e.target.value)}
      className={cn(hasError(state) && 'input-error', className)}
      {...props}
    />
  ) : (
    <TextareaBase
      disabled={isPending ?? props.disabled}
      className={cn('w-full', hasError(state) && 'input-error', className)}
      {...props}
    />
  );
};
