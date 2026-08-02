import React from "react";
import { Composition } from "remotion";
import { CompoundInterestShort } from "./compositions/CompoundInterestShort";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="CompoundInterestShort"
        component={CompoundInterestShort}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
