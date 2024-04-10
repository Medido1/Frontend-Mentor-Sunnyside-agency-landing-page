import React from 'react';
import serviceList from '../data/servicesData';
import '../styles/services.css';

export default function Services() {
  return (
    <ul className="services_container">
      {serviceList.map((service) => (
        <li
          key={service.id}
          className="service"
          style={
            {
              backgroundImage: window.innerWidth < 768
                ? `url(${service.backgroundImgMob})` : `url(${service.backgroundImgDesk})`,
            }
            }
        >
          <h2>
            {service.title}
          </h2>
          <p>{service.description}</p>
        </li>
      ))}
    </ul>
  );
}
