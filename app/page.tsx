'use client'
import { useEffect } from 'react';
import Banner from '../components/sections/Banner';
import About from '../components/sections/About';
import SlidingText from '../components/sections/SlidingText';
import Services from '../components/sections/Services';
import Counter from '../components/sections/Counter';
import WhyChoose from '../components/sections/WhyChoose';
import Feature from '../components/sections/Feature';
import Project from '../components/sections/Project';
import Testimonial from '../components/sections/Testimonial';
import Contact from '../components/sections/Contact';
import Brand from '../components/sections/Brand';
import Team from '../components/sections/Team';
import Blog from '../components/sections/Blog';



function App() {
  useEffect(() => {
    document.body.className = 'custom-cursor';
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor__cursor';
    const cursorTwo = document.createElement('div');
    cursorTwo.className = 'custom-cursor__cursor-two';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorTwo);

    return () => {
      document.body.className = '';
      cursor.remove();
      cursorTwo.remove();
    };
  }, []);

  return (
    <div className="page-wrapper">
      
      <Banner />
      <About />
      <SlidingText />
      <Services />
      <Counter />
      <WhyChoose />
      <Feature />
      <Project />
      <Testimonial />
      <Contact />
      <Brand />
      <Team />
      <Blog />
    </div>
  );
}

export default App;
