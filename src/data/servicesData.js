import graphicDesign from '../assets/images/mobile/image-graphic-design.webp';
import graphicDesignDesk from '../assets/images/desktop/image-graphic-design.jpg';
import photoGraphy from '../assets/images/mobile/image-photography.webp';
import photoGraphyDesk from '../assets/images/desktop/image-photography.jpg';

const serviceList = [
  {
    id: 1,
    backgroundImgMob: graphicDesign,
    backgroundImgDesk: graphicDesignDesk,
    title: 'Graphic Design',
    description: `Great design makes you memorable. We deliver artwork that underscores your brand 
    message and captures potential clients’ attention.`,
  },
  {
    id: 2,
    backgroundImgMob: photoGraphy,
    backgroundImgDesk: photoGraphyDesk,
    title: 'Photography',
    description: `Increase your credibility by getting the most stunning,
     high-quality photos that improve your business image.`,
  },
];

export default serviceList;
