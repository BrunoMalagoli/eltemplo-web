import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import useOnResize from '../../../hooks/useOnResize';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition : 'center',
  height: '60dvh',
  width: "50vw"
}
const MobileDivStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition : 'center',
  width: "100vw"
}
const slideImages = [
  {
    url: '/luigi-bosca.jpg',
    urlMobile: "/luigi-bosca.jpg"
  },
  {
    url: '/alma-negra.png',
    urlMobile : '/barrels.jpg'
  },
  {
    url: '/bramare.jpg',
    urlMobile: "/jack.jpg"
  },
];

const Carousel = () => {
  const {isMedium} = useOnResize();
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={ isMedium ? { ...MobileDivStyle, 'backgroundImage': `url(${slideImage.urlMobile})` , "height" : "calc(80dvh * (43.5/100))" }: { ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}/>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Carousel