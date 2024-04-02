import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = ({
  handleLinkClick,
  activeLink,
  setActiveLink,
  tbilisiRef,
  aboutRef,
  translationRef,
  languageRef,
  contactRef,
}) => {
  const controls = useAnimation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const tbilisiSectionHeight = tbilisiRef.current?.offsetHeight || 0;
  //     const aboutSectionHeight = aboutRef.current?.offsetHeight || 0;
  //     const translationSectionHeight =
  //       translationRef.current?.offsetHeight || 0;
  //     const languageSectionHeight = languageRef.current?.offsetHeight || 0;
  //     const contactSectionHeight = contactRef.current?.offsetHeight || 0;

  //     const tbilisiSectionTop = tbilisiRef.current?.offsetTop || 0;
  //     const aboutSectionTop = aboutRef.current?.offsetTop || 0;
  //     const translationSectionTop = translationRef.current?.offsetTop || 0;
  //     const languageSectionTop = languageRef.current?.offsetTop || 0;
  //     const contactSectionTop = contactRef.current?.offsetTop || 0;

  //     if (
  //       scrollPosition >= tbilisiSectionTop &&
  //       scrollPosition < tbilisiSectionTop + tbilisiSectionHeight
  //     ) {
  //       setActiveLink('tbilisi');
  //     } else if (
  //       scrollPosition >= aboutSectionTop &&
  //       scrollPosition < aboutSectionTop + aboutSectionHeight
  //     ) {
  //       setActiveLink('about');
  //     } else if (
  //       scrollPosition >= translationSectionTop &&
  //       scrollPosition < translationSectionTop + translationSectionHeight
  //     ) {
  //       setActiveLink('translation');
  //     } else if (
  //       scrollPosition >= languageSectionTop &&
  //       scrollPosition < languageSectionTop + languageSectionHeight
  //     ) {
  //       setActiveLink('language');
  //     } else if (
  //       scrollPosition >= contactSectionTop &&
  //       scrollPosition < contactSectionTop + contactSectionHeight
  //     ) {
  //       setActiveLink('contact');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [
  //   controls,
  //   tbilisiRef,
  //   aboutRef,
  //   translationRef,
  //   languageRef,
  //   contactRef,
  //   setActiveLink,
  // ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const tbilisiSectionHeight = tbilisiRef.current?.offsetHeight || 0;

      if (scrollPosition >= tbilisiSectionHeight - 90) {
        controls.start({
          opacity: 1,
          y: 0,
          position: 'fixed',
          top: 20,
          zIndex: 999,
          transition: 'all 2s ease',
        });
      } else {
        controls.start({
          position: 'static',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, tbilisiRef]);

  return (
    <>
      <div></div>
      <motion.div
        className={`flex items-center navbar ${
          activeLink ? 'active_border' : ''
        }`}
        animate={controls}
      >
        <ul className="flex justify-between min-w-full">
          <li>
            <a
              href="#tbilisi"
              onClick={(e) => handleLinkClick(e, 'tbilisi')}
              className={
                activeLink === 'tbilisi' ? 'active_border active_div' : ''
              }
            >
              Tbilisi AI Lab
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className={
                activeLink === 'about' ? 'active_border active_div' : ''
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#translation"
              onClick={(e) => handleLinkClick(e, 'translation')}
              className={
                activeLink === 'translation' ? 'active_border active_div' : ''
              }
            >
              Translation
            </a>
          </li>
          <li>
            <a
              href="#language"
              onClick={(e) => handleLinkClick(e, 'language')}
              className={
                activeLink === 'language' ? 'active_border active_div' : ''
              }
            >
              Language Model
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={
                activeLink === 'contact' ? 'active_border active_div' : ''
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
