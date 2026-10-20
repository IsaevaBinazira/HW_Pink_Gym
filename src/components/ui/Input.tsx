import type { InputHTMLAttributes } from 'react'

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  label: string
  size?: 'sm' | 'md' | 'lg'
  error?: string
}

export function Input({
  label,
  size = 'md',
  error,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  }

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={inputId}
        className={`w-full rounded-lg border outline-none focus:ring-2 focus:ring-pink-300 ${sizes[size]} ${
          error
            ? 'border-red-500'
            : 'border-gray-300 focus:border-pink-500'
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
