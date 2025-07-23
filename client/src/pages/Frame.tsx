import React from "react";
import { MacbookAirSection } from "./sections/MacbookAirSection";
import { TextGraphicSection } from "./sections/TextGraphicSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col w-full">
          <MacbookAirSection />
          <TextGraphicSection />
        </div>
      </div>
    </div>
  );
};
