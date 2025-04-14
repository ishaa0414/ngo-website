// src/components/SingleScrollWebsite.jsx

import { useState, useEffect, useRef } from 'react';

const SingleScrollWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    programs: useRef(null),
    impact: useRef(null),
    getInvolved: useRef(null),
    contact: useRef(null),
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        
        if (element && 
            element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId].current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-90 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">EduHope</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.keys(sectionRefs).map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600 hover:text-blue-500'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Donate
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section 
        ref={sectionRefs.home} 
        className="min-h-screen flex flex-col justify-center pt-16 pb-12 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Transforming Lives Through Quality Education
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Helping every child reach their full potential regardless of background or circumstance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-3 px-6 shadow-md transition-colors duration-200">
                  Donate Now
                </button>
                <button 
                  className="bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-md py-3 px-6 border border-blue-600 shadow-sm transition-colors duration-200"
                  onClick={() => scrollToSection('getInvolved')}
                >
                  Get Involved
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gray-300">
                  <img src="/api/placeholder/600/400" alt="Children learning" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Children Reached</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">120</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">75</div>
              <div className="text-gray-600">Schools Supported</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">350</div>
              <div className="text-gray-600">Teachers Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={sectionRefs.about} 
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gray-300">
                  <img src="/api/placeholder/600/400" alt="Our mission" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At EduHope, we believe that education is a fundamental right, not a privilege. Our mission is to create equal educational opportunities for underserved children, breaking the cycle of poverty through knowledge, skills, and empowerment.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2015, what began as a small initiative with just one classroom and three volunteer teachers has grown into a comprehensive educational support system that works across 12 regions to bridge educational gaps and empower communities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">A world where every child has access to quality education regardless of their circumstances.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Our Values</h4>
                  <p className="text-gray-600 text-sm">Equity, Excellence, Empowerment, Collaboration, and Sustainability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section 
        ref={sectionRefs.programs} 
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Programs</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We take a holistic approach to education, addressing not just academic needs but the entire ecosystem that supports a child's learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300">
                <img src="/api/placeholder/400/300" alt="Core Educational Support" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Educational Support</h3>
                <p className="text-gray-600 mb-4">
                  Providing foundational resources to help children access and succeed in education through supplies, scholarships, and infrastructure improvement.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300">
                <img src="/api/placeholder/400/300" alt="Teacher Training" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Teacher Training & Development</h3>
                <p className="text-gray-600 mb-4">
                  Equipping educators with innovative teaching methodologies, subject expertise, and classroom management strategies.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300">
                <img src="/api/placeholder/400/300" alt="Digital Learning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Learning Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Bridging the digital divide with computer literacy programs, digital libraries, and technology skills development for the future.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section 
        ref={sectionRefs.impact} 
        className="py-24 bg-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
            <div className="h-1 w-24 bg-white mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Success Stories</h3>
                <div className="bg-white rounded-lg p-6 text-gray-700 shadow-lg">
                  <p className="italic mb-4">
                    "Before EduHope came to our village, I never thought I could go to high school. Now I'm preparing for university and want to become a teacher to help other children like me."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0">
                      <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Mia Johnson</div>
                      <div className="text-sm text-gray-500">Student, Age 17</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Long-term Results</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>85% of our students complete secondary education compared to the 45% regional average</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Teachers trained by our program show a 60% increase in student engagement metrics</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Communities with our programs report 40% higher continuing education rates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Featured Story</h3>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-300">
                  <img src="/api/placeholder/600/400" alt="School transformation" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-gray-700">
                  <h4 className="text-xl font-semibold mb-2">Transforming Riverside School</h4>
                  <p className="text-gray-600 mb-4">
                    When we first arrived at Riverside School in 2018, there was just one teacher for 60 students, no proper supplies, and a leaking roof. Today, the school has 6 qualified teachers, a computer lab, and students regularly winning regional academic competitions.
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    Read the full story
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section 
        ref={sectionRefs.getInvolved} 
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get Involved</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              There are many ways you can support our mission to provide quality education to children in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Donate */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Donate</h3>
              <p className="text-gray-600 mb-4">
                Your financial support helps us provide educational resources, scholarships, and programs to children in need.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 shadow-sm transition-colors duration-200">
                Donate Now
              </button>
            </div>
            
            {/* Volunteer */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Share your skills and time as a teacher, mentor, event organizer, or administrative supporter.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 shadow-sm transition-colors duration-200">
                Join Our Team
              </button>
            </div>
            
            {/* Partner */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Partner</h3>
              <p className="text-gray-600 mb-4">
                Corporate partnerships, NGO alliances, and school collaborations can amplify our impact significantly.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 shadow-sm transition-colors duration-200">
                Become a Partner
              </button>
            </div>
            
            {/* Fundraise */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fundraise</h3>
              <p className="text-gray-600 mb-4">
                Create your own campaign through birthday fundraisers, community events, or athletic challenges.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 shadow-sm transition-colors duration-200">
                Start a Campaign
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact} 
        className="py-24 bg-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-blue-300">Email</div>
                    <a href="mailto:info@eduhope.org" className="text-gray-300 hover:text-white">info@eduhope.org</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-blue-300">Phone</div>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-white">(555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-blue-300">Address</div>
                    <div className="text-gray-300">
                      123 Education Way<br />
                      Suite 400<br />
                      Hope City, CA 90210
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 shadow-sm transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-blue-400 mb-2">EduHope</div>
              <p className="text-gray-400 text-sm">
                Transforming lives through education since 2015
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => scrollToSection('home')} className="hover:text-white">Home</button></li>
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About Us</button></li>
                  <li><button onClick={() => scrollToSection('programs')} className="hover:text-white">Programs</button></li>
                  <li><button onClick={() => scrollToSection('impact')} className="hover:text-white">Impact</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Support</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => scrollToSection('getInvolved')} className="hover:text-white">Donate</button></li>
                  <li><button onClick={() => scrollToSection('getInvolved')} className="hover:text-white">Volunteer</button></li>
                  <li><button onClick={() => scrollToSection('getInvolved')} className="hover:text-white">Fundraise</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} EduHope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SingleScrollWebsite;