import React, { useEffect, useRef } from 'react'

import styles from './Tracker.module.css'

const Tracker = () => {
  const trackerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === undefined || !trackerRef.current) {
      return
    }

    if ('ontouchstart' in window) {
      // not supported on touch devices (yet)
      return
    }

    function handleTrackerPositionOffsetWithAnimations(event: MouseEvent) {
      if (!trackerRef.current) {
        return
      }

      const hoveredCard = event
        .composedPath()
        .filter((element: EventTarget) =>
          (element as HTMLElement).id?.includes('card'),
        )[0] as HTMLElement

      const anchorHovered = event
        .composedPath()
        .filter(
          (element: EventTarget) => (element as HTMLElement).tagName === 'A',
        )[0] as HTMLElement

      const { clientX, clientY } = event

      const keyFrames: {
        top: string
        left: string
        width?: string
        height?: string
        borderRadius?: string
      } = {
        top: `${clientX}px`,
        left: `${clientY}px`,
      }

      const elementHovered = hoveredCard || anchorHovered
      if (elementHovered) {
        const { offsetHeight, offsetWidth } = elementHovered
        const { x: elementX, y: elementY } =
          elementHovered.getBoundingClientRect()
        keyFrames.top = `calc(${elementY}px - 6px)`
        keyFrames.left = `calc(${elementX}px - 6px)`
        keyFrames.height = `calc(${offsetHeight}px + 12px)`
        keyFrames.width = `calc(${offsetWidth}px + 12px)`
        keyFrames.borderRadius = '10px'
      } else {
        keyFrames.top = `${clientY}px`
        keyFrames.left = `${clientX}px`
        keyFrames.width = '0'
        keyFrames.height = '0'
        keyFrames.borderRadius = '100%'
      }

      trackerRef.current.animate(keyFrames, {
        duration: elementHovered ? 800 : 300,
        fill: 'forwards',
        iterationComposite: 'replace',
      })
    }
    window.onmousemove = handleTrackerPositionOffsetWithAnimations

    return () => {
      window.onmousemove = null
    }
  }, [])

  return <div className={styles.Tracker} id={'Tracker'} ref={trackerRef} />
}

export default Tracker
