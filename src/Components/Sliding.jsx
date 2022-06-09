import React, { useEffect, useState } from 'react';
import '../styles/Sliding.scss';

export default function Sliding({ show, children, classes }) {
  const [shouldRender, setRender] = useState(show);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  return (
    shouldRender && (
      <div
        className={classes}
        style={{ animation: `${show ? 'slideOut' : 'slideIn'} 0.3s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
}
