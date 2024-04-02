// App.js
import React, { useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import TranslationTransition from './components/TranslationTransition';
import { TypeAnimation } from 'react-type-animation';
import AiLabVid from './assets/aiLab.mp4';
import Form from './components/Form';
import CarouselCard from './components/CarouselCard';
import ContainerAnimation from './components/ContainerAnimation';
import Translate from './i18n/Translate';

const App = () => {
  const tbilisiRef = useRef();
  const aboutRef = useRef();
  const translationRef = useRef();
  const languageRef = useRef();
  const contactRef = useRef();

  const [activeLink, setActiveLink] = useState('tbilisi');

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId); // Update activeLink state with the clicked link's sectionId

    switch (sectionId) {
      case 'tbilisi':
        tbilisiRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'translation':
        translationRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'language':
        languageRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        id="tbilisi"
        className="container container_about min-h-screen mx-auto flex flex-col justify-between py-6"
        ref={tbilisiRef}
      >
        <Header />
        <MainPage />
        <Navbar
          handleLinkClick={handleLinkClick}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          tbilisiRef={tbilisiRef}
          aboutRef={aboutRef}
          translationRef={translationRef}
          languageRef={languageRef}
          contactRef={contactRef}
        />
      </div>

      <ContainerAnimation>
        <section id="about" className="intro" ref={aboutRef}>
          <p>
            The Gemini ecosystem represents Google's{' '}
            <span className="intro_span">most capable AI.</span>
          </p>
          <p>
            Our Gemini models are built from the ground up for{' '}
            <span className="intro_span">multimodality</span> — reasoning
            seamlessly across text, images, audio, video, and code.
          </p>
        </section>
      </ContainerAnimation>

      <ContainerAnimation>
        <div className="video-section">
          <div className="video_info">
            <h2>Tbilisi AI era</h2>
            <p>
              Gemini represents a significant leap forward in how AI can help
              improve our daily lives.
            </p>
          </div>
          <video
            data-testid="hero-video"
            playsInline
            autoPlay
            muted
            loop
            className="HeroVideo-styled__StyledVideo-sc-b07761df-0 gUMBeg"
          >
            <source type="video/mp4" src={AiLabVid} />
          </video>
        </div>

        <section id="translation" ref={translationRef}>
          <div className="intro lab-ai_intro">
            <div className="intro_heading">
              <p>Introducing</p>
              <p className="intro_span">Gemini 1.5</p>
            </div>
            <div className="intro_description">
              <p className="intro_description-header">
                <TypeAnimation
                  sequence={[
                    `Welcome to LAB ai Tbilisi! LETS ROCK & ROLL.`,
                    1000,
                    '',
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
                  repeat={Infinity}
                />
              </p>
              <p>
                Gemini 1.5 delivers dramatically enhanced performance with a
                more efficient architecture. The first model we’ve released for
                early testing, Gemini 1.5 Pro, introduces a breakthrough
                experimental feature in long-context understanding.
              </p>
            </div>
          </div>
        </section>
      </ContainerAnimation>

      <ContainerAnimation>
        <section
          className="carousel_section min-h-80"
          ref={languageRef}
          id="language"
        >
          <CarouselCard />
        </section>
      </ContainerAnimation>

      <ContainerAnimation>
        <section className="text-white">
          <div className="intro lab-ai_intro">
            <div className="intro_heading">
              <p>Introducing</p>
              <p className="intro_span">Gemini 1.5</p>
            </div>
            <div className="intro_description">
              <TranslationTransition />

              <p>
                Gemini 1.5 delivers dramatically enhanced performance with a
                more efficient architecture. The first model we’ve released for
                early testing, Gemini 1.5 Pro, introduces a breakthrough
                experimental feature in long-context understanding.
              </p>
            </div>
          </div>
        </section>
      </ContainerAnimation>

      <section className="form_section" ref={contactRef} id="contact">
        <Form />
      </section>

      <Footer />
    </>
  );
};

export default App;
