import React from "react";

export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col gap-10
    items-center justify-center text-center max-w-[800px] w-full mx-auto"
    >
      <div className="flex flex-col gap-4">
        <p>Conditions générales d'utilisation de l'application</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Gym <span className="text-red-400">Coach</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Je reconnais par la présente que je peux devenir{" "}
        <span className="text-red-400">incroyablement gonflé</span> et j'accepte
        tous les risques de devenir la{" "}
        <span className="text-red-400">
          monstruosité de masse musculaire plus imposante du coin
        </span>
        , potentiellement affecté(e) par une{" "}
        <span className="text-red-400">
          dysmorphie corporelle sévère, incapable de passer par les portes.
        </span>
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] border-red-400 border-solid redShadow">
        <p>Accepter</p>
      </button>
    </div>
  );
}
