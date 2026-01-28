/** CUSTOM HOOKS
 * Sometimes we want to reuse a logic in multiple components - custom hooks hold this reusable logic
 * Convention is to prefix the custom hooks with 'use'
 * They can call other hooks, 
 * maintain their own state
 * 
 * This is a custom hook to manage the visibility
 * 
 * Features:
 * 1. Set initial visible state
 * 2. toggle visibility - show and hide methods
 * 3. return me the current visibility state
 * 4. 
 */

import React from 'react'
import { useState } from 'react'

const useVisibility = (initialVisibility = false) => {
    const [isVisible, setIsVisible] = useState(initialVisibility)
    const show = () => setIsVisible(true)
    const hide = () => setIsVisible(false)
    const toggle = () => setIsVisible((prev) => !prev)
  return ({
    isVisible,
    show,
    hide,
    toggle
  })
}

export default useVisibility