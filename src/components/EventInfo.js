import {
  HiOutlineCalendar,
  HiOutlineGift,
  HiOutlineLightBulb,
} from "react-icons/hi";

const info = [
  {
    id: 1,
    icon: <HiOutlineCalendar />,
    title: "A Cerimônia",
    description: [
      "Domingo, 17 de dezembro de 2023",
      "Início da cerimônia - 14:30",
      "Biritiba Mirim",
      "Chácara Grão de Areia",
      "-23.540964, -46.079376",
    ],
  },
  {
    id: 2,
    icon: <HiOutlineGift />,
    title: "O Enxoval",
    description: [
      "informação",
      "informação",
      "informação",
      "informação",
      "informação",
    ],
  },
  {
    id: 3,
    icon: <HiOutlineLightBulb />,
    title: "Seu Traje",
    description: [
      "informação",
      "informação",
      "informação",
      "informação",
      "informação",
    ],
  },
];

const EventInfo = () => {
  return (
    <section className="section__info">
      <p className="title">O que você precisa saber?</p>
      <div className="cards__container">
        {info.map((item) => {
          const { id, icon, title, description } = item;

          return (
            <div key={id} className="card">
              <span className=".icon">{icon}</span>
              <p className="title card--title">{title}</p>
              {description.map((text, i) => {
                return (
                  <p key={i} className="text">
                    {text}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventInfo;
