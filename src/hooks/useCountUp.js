import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — animates a number from 0 → end once the element is in view.
 * Returns [ref, value].
 */
export function useCountUp(end, { duration = 1600, start = 0 } = {}) {
  const [value, setValue] = useState(start)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          // ease-out cubic for a soft landing
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(start + (end - start) * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration, start])

  return [ref, value]
}
