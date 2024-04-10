import React from 'react';
import milkBottles from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import milkBottlesDesk from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../assets/images/mobile/image-gallery-orange.jpg';
import orangeDesk from '../assets/images/desktop/image-gallery-orange.jpg';
import cone from '../assets/images/mobile/image-gallery-cone.jpg';
import coneDesk from '../assets/images/desktop/image-gallery-cone.jpg';
import sugarCubes from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';
import sugarCubesDesk from '../assets/images/desktop/image-gallery-sugarcubes.jpg';
import '../styles/images.css';

export default function Images() {
  return (
    <div className="images_container">
      <img src={window.innerWidth < 768 ? milkBottles : milkBottlesDesk} alt="milk bottles" />
      <img src={window.innerWidth < 768 ? orange : orangeDesk} alt="orange" />
      <img src={window.innerWidth < 768 ? cone : coneDesk} alt="cone" />
      <img src={window.innerWidth < 768 ? sugarCubes : sugarCubesDesk} alt="sugar cubes" />
    </div>
  );
}
