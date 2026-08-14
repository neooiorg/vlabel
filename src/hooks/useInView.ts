'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView({
  threshold = 0.12,
  rootMargin = '0px 0px -48px 0px',
  once = true,
}: {
  threshold?: number
  rootMargin?: string
  once?: boolean
} = {}) {
  const ref = useRef<Element | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView] as const
}
