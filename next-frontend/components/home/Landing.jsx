import React from "react";
import styles from "./Landing.module.css";
import TypewriterComponent from "typewriter-effect";

export const Landing = () => {
  const phrases = [
    "Revolucionando el área de RRHH",
    "Formación y Desarrollo Profesional",
    "Consultoría en HR",
    "Sé parte del Futuro del Capital Humano",
  ];

  return (
    <div className="relative w-full h-auto xl:h-[700px] flex">
      <video
        className="h-full w-full object-cover aspect-auto overflow-y-hidden opacity-85"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <div className={styles.textContainer}>
        <TypewriterComponent
          options={{
            autoStart: true,
            strings: phrases,
            loop: true,
            delay: 120,
            deleteSpeed: 40,
          }}
          onInit={(typewriter) => {
            typewriter.start();
          }}
        />
      </div>
    </div>
  );
};
