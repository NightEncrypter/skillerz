import React from "react";
import { BarGraph } from "../../svgs/BarGraph";
import CalenderSvg from "../../svgs/CalenderSvg";
import EarthSvg from "../../svgs/EarthSvg";

const Overviews = () => {
  const cards = [
    {
      head: "Our method",
      desc: "Through innovative proprietary technology, LinkUp indexes millions of job listings directly from employer websites daily. We eliminate the ‘noise’ that pollutes other jobs datasets, so our labor market data is highly accurate and powerful in its clarity.",
      icon: <CalenderSvg />,
    },
    {
      head: "Valuable insights",
      desc: "With the largest, highest-quality index of global job listings, we’ve built the most extensive jobs dataset available. The quality, versatility and historical range of our dataset delivers unmatched value, with coverage and mapping of all job types.",
      icon: <EarthSvg />,
    },
    {
      head: "Our dataset",
      desc: "With the largest, highest-quality index of global job listings, we’ve built the most extensive jobs dataset available. The quality, versatility and historical range of our dataset delivers unmatched value, with coverage and mapping of all job types.",
      icon: <BarGraph />,
    },
  ];
  return (
    <div className=" my-8">
      {/* Card */}

      {cards.map((card, i) => (
        <div className="my-6 bg-white p-6 rounded-xl" key={i}>
          <h2
            className={`${
              i === 1 ? "text-[#AD00EB]" : "text-[#0073FD]"
            } font-semibold`}
          >
            {card.head}
          </h2>
          <p className="text-xs font-light my-1">{card.desc}</p>
          <div className="h-[100px] mt-4">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Overviews;
