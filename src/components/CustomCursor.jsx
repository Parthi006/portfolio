import React, {useEffect,useRef,useState,useCallback} from "react"
import { pokeball } from "../assets"
const IsDevice = (() => {
    if (typeof navigator == 'undefined') return
  
    let ua = navigator.userAgent
  
    return {
      info: ua,
  
      Android() {
        return ua.match(/Android/i)
      },
      BlackBerry() {
        return ua.match(/BlackBerry/i)
      },
      IEMobile() {
        return ua.match(/IEMobile/i)
      },
      iOS() {
        return ua.match(/iPhone|iPad|iPod/i)
      },
      iPad() {
        return (
          ua.match(/Mac/) &&
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2
        )
      },
      OperaMini() {
        return ua.match(/Opera Mini/i)
      },
  
      /**
       * Any Device
       */
      any() {
        return (
          IsDevice.Android() ||
          IsDevice.BlackBerry() ||
          IsDevice.iOS() ||
          IsDevice.iPad() ||
          IsDevice.OperaMini() ||
          IsDevice.IEMobile()
        )
      }
    }
  })()


function useEventListener(eventName, handler, element = document) {
    const savedHandler = useRef()
  
    useEffect(() => {
      savedHandler.current = handler
    }, [handler])
  
    useEffect(() => {
      const isSupported = element && element.addEventListener
      if (!isSupported) return
  
      const eventListener = (event) => savedHandler.current(event)
  
      element.addEventListener(eventName, eventListener)
  
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    }, [eventName, element])
  }
  
function CursorCore({
    cursor,
    outerStyle,
    innerStyle,
    color = '220, 90, 90',
    outerAlpha = 0.3,
    innerSize = 20, // Adjusted size for image
    outerSize = 20, // Adjusted size for image
    outerScale = 6,
    innerScale = 0.6,
    trailingSpeed = 8,
    clickables = [
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]
  }) {
    const cursorOuterRef = useRef()
    const cursorInnerRef = useRef()
    const requestRef = useRef()
    const previousTimeRef = useRef()
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isActiveClickable, setIsActiveClickable] = useState(false)
    let endX = useRef(0)
    let endY = useRef(0)
  
    const onMouseMove = useCallback(({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY })
      cursorInnerRef.current.style.top = `${clientY}px`
      cursorInnerRef.current.style.left = `${clientX}px`
      endX.current = clientX
      endY.current = clientY
    }, [])
  
    // Outer Cursor Animation Delay
    const animateOuterCursor = useCallback(
      (time) => {
        if (previousTimeRef.current !== undefined) {
          coords.x += (endX.current - coords.x) / trailingSpeed
          coords.y += (endY.current - coords.y) / trailingSpeed
          cursorOuterRef.current.style.top = `${coords.y}px`
          cursorOuterRef.current.style.left = `${coords.x}px`
        }
        previousTimeRef.current = time
        requestRef.current = requestAnimationFrame(animateOuterCursor)
      },
      [requestRef] // eslint-disable-line
    )
  
    // RAF for animateOuterCursor
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animateOuterCursor)
      return () => cancelAnimationFrame(requestRef.current)
    }, [animateOuterCursor])
  
    // Mouse Events State updates
    const onMouseDown = useCallback(() => setIsActive(true), [])
    const onMouseUp = useCallback(() => setIsActive(false), [])
    const onMouseEnterViewport = useCallback(() => setIsVisible(true), [])
    const onMouseLeaveViewport = useCallback(() => setIsVisible(false), [])
  
    useEventListener('mousemove', onMouseMove)
    useEventListener('mousedown', onMouseDown)
    useEventListener('mouseup', onMouseUp)
    useEventListener('mouseover', onMouseEnterViewport)
    useEventListener('mouseout', onMouseLeaveViewport)
  
    // Cursors Hover/Active State
    useEffect(() => {
      if (isActive) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${innerScale})`
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale})`
      } else {
        cursorInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
        cursorOuterRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }, [innerScale, outerScale, isActive])
  
    // Cursors Click States
    useEffect(() => {
      if (isActiveClickable) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
          innerScale * 1.2
        })`
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
          outerScale * 1.4
        })`
      }
    }, [innerScale, outerScale, isActiveClickable])
  
    // Cursor Visibility State
    useEffect(() => {
      if (isVisible) {
        cursorInnerRef.current.style.opacity = 1
        cursorOuterRef.current.style.opacity = 0.5
      } else {
        cursorInnerRef.current.style.opacity = 0
        cursorOuterRef.current.style.opacity = 0
      }
    }, [isVisible])
  
    useEffect(() => {
      const clickableEls = document.querySelectorAll(clickables.join(','))
  
      clickableEls.forEach((el) => {
        el.style.cursor = 'none'
  
        el.addEventListener('mouseover', () => {
          setIsActive(true)
        })
        el.addEventListener('click', () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.addEventListener('mousedown', () => {
          setIsActiveClickable(true)
        })
        el.addEventListener('mouseup', () => {
          setIsActive(true)
        })
        el.addEventListener('mouseout', () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
  
      return () => {
        clickableEls.forEach((el) => {
          el.removeEventListener('mouseover', () => {
            setIsActive(true)
          })
          el.removeEventListener('click', () => {
            setIsActive(true)
            setIsActiveClickable(false)
          })
          el.removeEventListener('mousedown', () => {
            setIsActiveClickable(true)
          })
          el.removeEventListener('mouseup', () => {
            setIsActive(true)
          })
          el.removeEventListener('mouseout', () => {
            setIsActive(false)
            setIsActiveClickable(false)
          })
        })
      }
    }, [isActive, clickables])
  
    // Cursor Styles
    const styles = {
      cursorInner: {
        zIndex: 999,
        display: 'block',
        position: 'fixed',
        borderRadius: '50%',
        width: innerSize * 2,
        height: innerSize * 2,
        pointerEvents: 'none',
        backgroundImage: `url(${cursor ? cursor : pokeball})`,
        backgroundSize: 'cover',
        // backgroundColor: `rgba(${color}, 1)`,
        ...(innerStyle && innerStyle),
        transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out'
      },
      cursorOuter: {
        zIndex: 999,
        display: 'block',
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        width: outerSize * 2,
        height: outerSize * 2,
        backgroundImage: `url(${ cursor ? cursor : pokeball})`,
        backgroundSize: 'cover',
        opacity : "0.2",
        // backgroundColor: `rgba(${color}, ${outerAlpha})`,
        transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
        willChange: 'transform',
        ...(outerStyle && outerStyle)
      }
    }
  
    // Hide / Show global cursor
    document.body.style.cursor = 'none'
  
    return (
      <React.Fragment>
        <div ref={cursorOuterRef} style={styles.cursorOuter} />
        <div ref={cursorInnerRef} style={styles.cursorInner} />
      </React.Fragment>
    )
  }
  
  /**
   * AnimatedCursor
   * Calls and passes props to CursorCore if not a touch/mobile device.
   */
  function AnimatedCursor({
    cursor,
    outerStyle,
    innerStyle,
    color,
    outerAlpha,
    innerSize,
    innerScale,
    outerSize,
    outerScale,
    trailingSpeed,
    clickables
  }) {
    if (typeof navigator !== 'undefined' && IsDevice.any()) {
      return <React.Fragment></React.Fragment>
    }
    return (
      <CursorCore
      cursor={cursor}
        outerStyle={outerStyle}
        innerStyle={innerStyle}
        color={color}
        outerAlpha={outerAlpha}
        innerSize={innerSize}
        innerScale={innerScale}
        outerSize={outerSize}
        outerScale={outerScale}
        trailingSpeed={trailingSpeed}
        clickables={clickables}
      />
    )
  }
  
 
export default AnimatedCursor