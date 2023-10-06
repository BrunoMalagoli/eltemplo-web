import ActionButton from "./components/ActionButton";
import MainTitle from "./components/MainTitle";
import HeroStyles from "./styles/index.module.css";

const Hero = () => {
  return (
    <section id={HeroStyles.heroContainer}>
      <div id={HeroStyles.mainTitleWrapper}>
        <MainTitle />
        <div className={HeroStyles.buttonContainer}>
          <ActionButton />
        </div>
      </div>
      <div id={HeroStyles.carouselContainer}>
        <p>carousel</p>
      </div>
    </section>
  );
};

export default Hero;
