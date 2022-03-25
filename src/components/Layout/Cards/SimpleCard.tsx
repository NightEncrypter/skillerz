import { Icon } from "@iconify/react";

const SimpleCard = () => {
  const cards = [
    {
      head: "Broadcast with candidate sourcing",
      icon: (
        <Icon icon={"ic:twotone-track-changes"} color={"#9E23FF"} width={40} />
      ),
      color: "text-[#9E23FF]",
      bg: "bg-[#E8C9FF]",
    },
    {
      head: "Collaborate on hiring",
      icon: (
        <Icon
          icon={"fluent:people-community-16-regular"}
          width={40}
          color="#4392F0"
        />
      ),
      color: "text-[#4392F0]",
      bg: "bg-[#D3E8FF]",
    },
    {
      head: "Candidate screening tools",
      icon: (
        <Icon icon={"ic:twotone-track-changes"} color={"#9E23FF"} width={40} />
      ),
      color: "text-[#9E23FF]",
      bg: "bg-[#E8C9FF]",
    },
    {
      head: "Track applicants and offers",
      icon: (
        <Icon
          icon={"fluent:box-multiple-20-filled"}
          color={"#0074FF"}
          width={40}
        />
      ),
      color: "text-[#4392F0]",
      bg: "bg-[#D3E8FF]",
    },
  ];
  return (
    <div className="my-8">
      <div className="text-center my-6">
        <h3 className="font-medium mb-1 ">
          {" "}
          Why you will <span className="text-[#9E23FF] text-2xl">
            love
          </span>{" "}
          using RecruiterX Hire
        </h3>
        <h3 className="font-medium">We inform all thing in realtime</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-5 px-4">
        {cards.map((card, i) => (
          <div
            className={`p-3 px-4 shadow-lg hover:shadow-2xl transition duration-200 cursor-pointer rounded-xl flex  flex-col items-center  ${card.bg} `}
            key={i}
          >
            {card.icon}
            <h3
              className={`${card.color} text-xs font-medium mb-2 tracking-wider text-center`}
            >
              {card.head}
            </h3>
            <p className="text-xs font-light ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto soluta dicta ipsum dolorum sit possimus? Lorem ipsum
              vel dolore officia. Accusamus enim eligendi expedita id
              accusantium?
            </p>
            <button
              className={` ${
                i % 2 !== 0 ? "main_btn_color" : "card_btn_color"
              } block   py-1 px-5 text-white text-xs  capitalize tracking-widest mt-3 rounded-xl hover:shadow-lg transition-shadow duration-150  `}
              // onClick={redirect_to_login}
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCard;
