import React, { useEffect, useState } from 'react';

export default function useMountTransition(isMounted, unmountDelay) {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  useEffect(() => {
    let timeOutId;
    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeOutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);
  return hasTransitionedIn;
}
