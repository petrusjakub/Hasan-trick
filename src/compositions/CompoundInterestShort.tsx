import React from "react";
import { ShortTemplate } from "../components/ShortTemplate";
import { compoundInterestSlides } from "../data/short-compound-interest";

export const CompoundInterestShort: React.FC = () => {
  return (
    <ShortTemplate
      slides={compoundInterestSlides}
      backgroundVariant="midnight"
      showWatermark={true}
    />
  );
};
