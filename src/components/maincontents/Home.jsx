import React from 'react';
import IntroSection from '../../components/maincontents/IntroSection';
import ServicesSection from '../../components/maincontents/services';
import GallerySection from '../../components/maincontents/gallery';
import TeamSection from '../../components/maincontents/TeamSection';
import ContactSection from '../../components/maincontents/contactForm';
import ProjectsSection from './projects';
import { useSelector } from 'react-redux';



export default function Home() {
  const { intro } = useSelector((state) => state.siteContent);

  return (
    <>
      <IntroSection
        logo={intro.imageSrc}
        heading={intro.title}
        description={intro.description}
      />
      <ServicesSection />
      <ProjectsSection/>
      <GallerySection/>
      <TeamSection/>
      <ContactSection/>
      {/* You can add more sections like Projects, Gallery, etc. here */}
    </>
  );
}
