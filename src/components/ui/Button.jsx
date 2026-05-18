const variants = {
  primary: 'btn-primary',
  ghost:   'btn-ghost',
  dark:    'btn-dark',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`${variants[variant] || variants.primary} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
