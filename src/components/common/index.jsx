import React, { ReactElement, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

const FadeInContainer = ({ children }) => {
  const eleRef = useRef();
  const [triggerFadeIn, setTriggerFadeIn] = useState(false);

  useEffect(() => {
    let observer;
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === eleRef.current) {
          setTriggerFadeIn(true);
          observer && observer.disconnect();
        }
      });
    };

    const options = {
      rootMargin: "-200px",
    };

    observer = new IntersectionObserver(observerCallback, options);
    observer.observe(eleRef.current);

    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={eleRef}
      className={clsx(styles.wrap, triggerFadeIn && styles.fadeIn)}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}

export default FadeInContainer;
