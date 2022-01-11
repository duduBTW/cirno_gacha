// types
import { FC } from "react";

// components
import Title from "../../molecules/Title";
import Options from "../../molecules/Options";
import Money from "../../atoms/Money";
import Particles, { IParticlesProps } from "react-tsparticles";

// styles
import { HomeTemplateWrapper } from "./HomeTemplate.styles";
import useDefaultConfigs from "../../utils/useLoadDefaultConfigs";

const PARTICLE_OPTINS: IParticlesProps["options"] = {
  particles: {
    number: {
      value: 22,
      density: {
        enable: true,
        value_area: 631.3280775270874,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "attract",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        // speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const HomeTemplate: FC = () => {
  useDefaultConfigs();

  return (
    <>
      <Particles id="tsparticles" options={PARTICLE_OPTINS} />
      <HomeTemplateWrapper>
        <_ />
        <Money />
        <_ />
        <Title />
        <_ />
        <Options />
        <_ />
      </HomeTemplateWrapper>
    </>
  );
};

const _ = () => <div />;

export default HomeTemplate;
