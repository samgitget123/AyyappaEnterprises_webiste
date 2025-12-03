import { createSlice } from '@reduxjs/toolkit';
import companyLogo from '../../assets/AE_logo.png';

const initialState = {
  brand: "Ayyappa Enterprises",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "What we can do", href: "/services" },
    { label: "What we did", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  intro: {
    id: "home",
    imageSrc: companyLogo,
    title: "Welcome to Ayyappa Enterprises",
    description:
      "We build, design, and deliver your dream spaces. With precision, quality, and a commitment to excellence, we turn visions into reality.",
  },
 services: {
  heading: "What We Can Do",
  items: [
    {
      id: 1,
      title: "Construction",
      description: "High-quality construction services from foundation to finish.",
      icon: "bi bi-building",
    },
    {
      id: 2,
      title: "Interior Design",
      description: "Creative and functional interiors tailored to your needs.",
      icon: "bi bi-brush",
    },
    {
      id: 3,
      title: "Real Estate",
      description: "Reliable real estate solutions for buying and selling properties.",
      icon: "bi bi-house",
    },
    {
      id: 4,
      title: "Banking Assistance",
      description: "Helping clients with financial solutions and loan assistance.",
      icon: "bi bi-cash-coin",
    },
  ],
},


projects: {
  heading: "What We Did",
  items: [
    {
      id: 1,
      title: "Residential Villa Construction",
      description:
        "Complete construction of a luxury villa with premium interiors and landscaping.",
      image: "/images/project1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Commercial Complex",
      description:
        "Multi-story commercial complex with modern architectural design.",
      image: "/images/project2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Interior Renovation",
      description:
        "Full-scale renovation for a corporate office space with modular furniture.",
      image: "/images/project3.jpg",
      link: "#",
    },
  ],
},

gallery: {
  heading: "Gallery",
  images: [
    { id: 1, src: companyLogo, alt: "Company Office" },
    { id: 2, src: companyLogo, alt: "Construction Site" },
    { id: 3, src: companyLogo, alt: "Interior Work" },
    { id: 4, src: companyLogo, alt: "Team at Work" },
    { id: 5, src: companyLogo, alt: "Completed Project" },
  ],
},

  contact: {
    heading: "Get in Touch",
    phoneNumber: "919848851443", // WhatsApp target number
    formFields: [
      { name: "name", label: "Name", type: "text", placeholder: "Enter your name", required: true },
      { name: "contact", label: "Contact Number", type: "tel", placeholder: "Enter contact number", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "Enter email address", required: true },
      { name: "description", label: "Description", type: "textarea", placeholder: "Describe your requirement", required: true },
    ],
    submitButton: "Submit Request"
  },

  team: {
     heading: "Meet Our Team",
  members: [
    {
      id: 1,
      name: "Ravi Kumar",
      role: "Founder & CEO",
      description:
        "With vast experience across construction, real estate, and financial services, Ravi leads Ayyappa Enterprises with vision and dedication.",
      image: companyLogo,
      social: {
        linkedin: "#",
        twitter: "#",
        whatsapp: "#",
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Interior Design",
      description:
        "Priya specializes in functional and elegant interior solutions, blending creativity with practicality.",
      image: companyLogo,
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Vikram Reddy",
      role: "Construction Manager",
      description:
        "Overseeing projects from foundation to finish, Vikram ensures top-notch quality and timely delivery.",
      image: companyLogo,
      social: {
        linkedin: "#",
        facebook: "#",
      },
    },
  ],
  }

};

const siteContentSlice = createSlice({
  name: 'siteContent',
  initialState,
  reducers: {
    // Optional: add reducers to update site content later
  },
});

export default siteContentSlice.reducer;
