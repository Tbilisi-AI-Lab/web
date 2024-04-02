import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TranslationTransition = () => {
  const [text, setText] = useState(
    'Recover fine details in low-resolution images with Face Recovery AI.'
  );
  const newText =
    'აღადგინეთ დეტალები დაბალი გარჩევადობის სურათებში ხელოვნური ინტელექტით.';
  const [index, setIndex] = useState(0);
  const [disappearingIndex, setDisappearingIndex] = useState(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
          } else {
            setIsVisible(false);
            controls.start({ opacity: 0, y: 20 });
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to change when the animation starts
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [controls]);

  useEffect(() => {
    if (!animationCompleted && isVisible) {
      const timer = setTimeout(() => {
        if (index <= newText.length) {
          setText((prevText) => {
            const newTextArray = prevText.split('');
            if (index < newText.length) {
              if (newText[index] === ' ') {
                newTextArray[index] = ' ';
              } else {
                newTextArray[index] = newText[index];
              }
            }
            return newTextArray.join('');
          });
          setDisappearingIndex(index);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          const resetTimer = setTimeout(() => {
            setAnimationCompleted(true);
          }, 3000);
          return () => clearTimeout(resetTimer);
        }
      }, 28);
      return () => clearTimeout(timer);
    }
  }, [index, newText, animationCompleted, isVisible]);

  return (
    <div ref={sectionRef}>
      <motion.div className="flex items-center justify-center">
        <h1
          className="text-animation text-white font-mono"
          style={{
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            overflowX: 'auto',
            textWrap: 'wrap',
          }}
        >
          {text.split('').map((letter, i) => (
            <span
              key={i}
              className={`letter ${i === disappearingIndex ? 'disappear' : ''}`}
              style={{
                opacity:
                  i < 10 || i >= text.length - 10
                    ? 0.68
                    : i === Math.floor(text.length / 2)
                    ? 0.73
                    : 0.78,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
              }}
            >
              {i === text.length - 1 && index >= newText.length
                ? newText[newText.length - 1]
                : letter === ' '
                ? '\u00A0'
                : letter}
            </span>
          ))}
        </h1>
      </motion.div>
    </div>
  );
};

export default TranslationTransition;
