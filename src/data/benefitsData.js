import transform from '../assets/images/mobile/image-transform.jpg';
import transformDesk from '../assets/images/desktop/image-transform.jpg';
import standOut from '../assets/images/mobile/image-stand-out.jpg';
import standOutDesk from '../assets/images/desktop/image-stand-out.jpg';

const benefitArr = [
  {
    id: 1,
    srcMobile: transform,
    srcDestop: transformDesk,
    alt: 'egg',
    title: 'Transfom your brand',
    description: `We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.`,
    color: '4px solid hsl(51, 100%, 49%)',
  },
  {
    id: 2,
    srcMobile: standOut,
    srcDestop: standOutDesk,
    alt: 'rose cup',
    title: 'Stand out to the right audience',
    description: `Using a collaborative formula of designers, 
    researchers, photographers, videographers, and copywriters, we’ll build and extend your
     brand in digital places.`,
    color: '4px solid hsl(7, 99%, 70%)',
  },
];

export default benefitArr;
