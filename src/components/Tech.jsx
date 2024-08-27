import React, { useEffect, useState, useMemo } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  let arr = ["MUI", "Ant Design", "Ag Grid", "git", "github", "Tailwind CSS"];
  const tech = useMemo(
    () =>
      isMobile
        ? technologies.filter((item) => !arr.includes(item.name))
        : technologies,
    [isMobile]
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {tech &&
        tech.map((technology) => (
          <div className="w-28 h-27" key={technology.name}>
            <BallCanvas icon={technology.icon} />  
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
