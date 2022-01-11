/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC, useState } from "react";
import Particles, { IParticlesProps } from "react-tsparticles";
import { Rarity } from "../../types/emotes";
import useSelector from "../../utils/useSelector";

// styles
import {
  GachaTemplateWrapper,
  Fairy,
  InstructionLabel,
  Back,
} from "./ShakeTheFairy.styles";

const PARTICLE_OPTINS: IParticlesProps["options"] = {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 631.3280775270874,
      },
    },
    color: {
      value: "#ade8ff",
    },
    shape: {
      type: "circle",
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
      value: 5,
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

const getShadow = (ratiry: Rarity | undefined) => {
  switch (Number(ratiry)) {
    case 5:
      return "rgba(255, 232, 69, 0.5)";
    case 4:
      return "rgba(99, 204, 198, 0.5)";
    case 3:
      return "rgba(149, 87, 87, 0.5)";
    case 2:
      return "rgba(163, 163, 163, 0.5)";
    default:
      return "";
  }
};

interface Props {
  onPull(): void;
}

const ShakeTheFairy: FC<Props> = ({ onPull }) => {
  const nextPull = useSelector(({ emotes }) => emotes.nextPull?.mostRare);
  const [dragging, setDragging] = useState(false);

  const onDragStart = () => setDragging(true);
  const onDragEnd = () => {
    setDragging(false);

    setTimeout(() => {
      onPull();
    }, 600);
  };

  return (
    <GachaTemplateWrapper>
      <Particles id="tsparticles" options={PARTICLE_OPTINS} />

      <Fairy
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragSnapToOrigin
        dragElastic={0.6}
        animate={{
          filter: "drop-shadow(0px 0px 32px rgba(255, 232, 69, 0))",
        }}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        whileDrag={{
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
          filter: `drop-shadow(0px 0px 22px ${getShadow(nextPull)})`,
          pointerEvents: "none",
        }}
      >
        {!dragging && (
          <InstructionLabel>shake the fairy for gacha</InstructionLabel>
        )}
      </Fairy>

      <Link href="/" passHref>
        <Back
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
        />
      </Link>
    </GachaTemplateWrapper>
  );
};

export default ShakeTheFairy;
