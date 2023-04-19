import React, { useEffect, useRef } from 'react'

import styles from './Tracker.module.css'

const Tracker = () => {
  const trackerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === undefined || !trackerRef.current) {
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

      const { clientX, clientY } = event

      const keyFrames: {
        top: string
        left: string
        opacity?: number
        width?: string
        height?: string
        borderRadius?: string
      } = {
        top: `${clientX}px`,
        left: `${clientY}px`,
      }

      if (hoveredCard) {
        const { offsetHeight, offsetWidth } = hoveredCard
        const { x: elementX, y: elementY } = hoveredCard.getBoundingClientRect()
        keyFrames.top = `${elementY}px`
        keyFrames.left = `calc(${elementX}px - 12px)`
        keyFrames.opacity = 0.2
        keyFrames.height = `${offsetHeight}px`
        keyFrames.width = `${offsetWidth}px`
        keyFrames.borderRadius = '10px'
      } else {
        keyFrames.top = `${clientY}px`
        keyFrames.left = `${clientX}px`
        keyFrames.width = '0'
        keyFrames.height = '0'
        keyFrames.borderRadius = '100%'
      }

      trackerRef.current.animate(keyFrames, {
        duration: hoveredCard ? 1000 : 350,
        fill: 'forwards',
        iterationComposite: 'replace',
      })
    }
    window.onmousemove = handleTrackerPositionOffsetWithAnimations
  }, [])

  return <div className={styles.Tracker} id={'Tracker'} ref={trackerRef} />
}

export default Tracker
