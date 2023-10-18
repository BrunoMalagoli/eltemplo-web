import ActionButton from "./components/ActionButton";
import CarouselComponent from "./components/Carousel";
import MainTitle from "./components/MainTitle";
import HeroStyles from "./styles/index.module.css";
import { Element } from "react-scroll"
const Hero = () => {
  return (
    <Element name="inicio">
    <section id={HeroStyles.heroContainer}>
      <div id={HeroStyles.mainTitleWrapper}>
        <MainTitle />
        <div className={HeroStyles.buttonContainer}>
          <ActionButton />
        </div>
      </div>
      <div id={HeroStyles.carouselContainer}>
        <CarouselComponent/> 
      </div>
    </section>
    </Element>
  );
};

export default Hero;
