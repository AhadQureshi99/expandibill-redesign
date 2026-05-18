import * as Lucide from 'lucide-react'

/**
 * Icon — render any lucide-react icon by string name.
 * Keeps data files plain JS (no JSX imports of icons).
 */
export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8, ...rest }) {
  const Cmp = Lucide[name] || Lucide.Circle
  return <Cmp className={className} strokeWidth={strokeWidth} {...rest} />
}
