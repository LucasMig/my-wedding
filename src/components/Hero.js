import heroImg from "../assets/hero_provisorio.webp";

const Hero = () => {
  return (
    <section id="hero" className="section__hero">
      <div className="hero__message">
        <p className="text">Vamos nos casar!</p>
      </div>
      <img src={heroImg} className="hero__image" alt="aliancas" />
    </section>
  );
};

export default Hero;
