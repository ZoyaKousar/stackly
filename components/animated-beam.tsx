'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

export interface AnimatedBeamProps {
  className?: string
  containerRef: React.RefObject<HTMLElement>
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  curvature?: number
  duration?: number
  delay?: number
  strokeWidth?: number
  pathColor?: string
  gradientStartColor?: string
  gradientStopColor?: string
}

export const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 3,
  delay = 0,
  strokeWidth = 2,
  pathColor = 'gray',
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
}: AnimatedBeamProps) => {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current || !pathRef.current || !svgRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const fromRect = fromRef.current.getBoundingClientRect()
      const toRect = toRef.current.getBoundingClientRect()

      const fromX = fromRect.left - containerRect.left + fromRect.width / 2
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2
      const toX = toRect.left - containerRect.left + toRect.width / 2
      const toY = toRect.top - containerRect.top + toRect.height / 2

      const midX = (fromX + toX) / 2
      const midY = (fromY + toY) / 2

      const dx = toX - fromX
      const dy = toY - fromY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance === 0) return

      const controlPointX = midX + (curvature * dy) / distance
      const controlPointY = midY - (curvature * dx) / distance

      const path = `M ${fromX},${fromY} Q ${controlPointX},${controlPointY} ${toX},${toY}`

      pathRef.current.setAttribute('d', path)

      const pathLength = pathRef.current.getTotalLength()
      if (pathLength > 0) {
        pathRef.current.style.strokeDasharray = `${pathLength}`
        pathRef.current.style.strokeDashoffset = `${pathLength}`
      }
    }

    // Initial delay to ensure elements are rendered
    const timeout = setTimeout(updatePath, 100)
    window.addEventListener('resize', updatePath)
    
    // Update on interval to catch dynamic changes
    const interval = setInterval(updatePath, 500)
    
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
      window.removeEventListener('resize', updatePath)
    }
  }, [containerRef, fromRef, toRef, curvature])

  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`

  return (
    <>
      <svg
        ref={svgRef}
        className={cn('pointer-events-none absolute left-0 top-0 transform-gpu', className)}
        width="100%"
        height="100%"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
            <stop offset="0%" stopColor={gradientStartColor} stopOpacity="1" />
            <stop offset="100%" stopColor={gradientStopColor} stopOpacity="1" />
            <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d=""
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeOpacity="0.6"
          style={{
            strokeDasharray: '100%',
            strokeDashoffset: '100%',
            animation: `dash ${duration}s ease-in-out ${delay}s infinite`,
          }}
        />
      </svg>
      <style jsx global>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 100%;
          }
          50% {
            stroke-dashoffset: 0%;
          }
          100% {
            stroke-dashoffset: -100%;
          }
        }
      `}</style>
    </>
  )
}
