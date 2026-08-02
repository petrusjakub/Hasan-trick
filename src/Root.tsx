import React from "react";
import { Composition } from "remotion";
import { CompoundInterestShort } from "./compositions/CompoundInterestShort";
import { FullShortExample } from "./compositions/FullShortExample";
import { LatteFactorShort } from "./compositions/LatteFactorShort";

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
      <Composition
        id="FullShortExample"
        component={FullShortExample}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="LatteFactorShort"
        component={LatteFactorShort}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
