import React from 'react';
import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';

interface scrollToSectionProps {
  sectionId: string
}

const scrollToSection = ({sectionId}: scrollToSectionProps) => {
  scroller.scrollTo(sectionId, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

export {scrollToSection}