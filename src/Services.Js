import React from 'react';
import './Services.css';


function Services() {
  const servicesData = [
    {
      id: 1,
      icon: '📚',
      title: 'Education Support',
      description:
        'We help students grow through practical learning opportunities, career guidance, and access to academic resources.',
      Features: [
        'Online courses',
        'Workshops',
        'Certification programmes',
        'Mentorship programs',
        'Career counselling',
        'Scholarship opportunities',
      ],
    },
    {
      id: 2,
      icon: '🤝',
      title: 'Student Welfare',
      description:
        'Our welfare programs create a safe and encouraging environment where every student can thrive.',
      Features: [
        'School meal programmes',
        'Special education support',
        'Counselling and mental health services',
        'Tutoring and academic support',
        'Family engagement initiatives',
        'Volunteer and community opportunities',
      ],
    },
    {
      id: 3,
      icon: '🩺',
      title: 'Health and Wellness',
      description:
        'We support students physically and emotionally so they can stay healthy, confident, and focused.',
      Features: [
        'Health check-ups',
        'Nutrition counselling',
        'Mental health support',
        'Wellness workshops',
        'Fitness programs',
        'Stress management activities',
      ],
    },
    {
      id: 4,
      icon: '🏅',
      title: 'Sports and Recreation',
      description:
        'We encourage active lifestyles through sports, recreation, and fun opportunities that build teamwork and confidence.',
      Features: [
        'Sports teams and leagues',
        'Fitness classes',
        'Outdoor recreation activities',
        'Intramural sports',
        'Recreational facilities',
        'Sports camps and clinics',
      ],
    },
  ];

  return (
    <section className="services-section">
      <div className="services-hero">
        <p className="services-eyebrow">Student Support Hub</p>
        <h2 className="services-title">Services We Offer</h2>
        <p className="services-intro">
          We provide student-centered services that support learning, wellbeing, and personal growth every step of the way.
        </p>
      </div>

      <div className="services-container">
        {servicesData.map((service) => (
          <article key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title-card">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.Features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
