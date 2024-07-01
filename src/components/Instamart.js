import { useState } from "react";

const Section = ({ title, description, id, isVisible, setIsVisible }) => {
  return (
    <div>
      <h1>{title}</h1>
      {isVisible ? (
        <>
          <button
            onClick={() => {
              console.log(isVisible);
              setIsVisible(false);
              console.log(isVisible);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => {
            console.log(isVisible);
            setIsVisible(true);
            console.log(isVisible);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  const obj = [
    {
      id: 1,
      title: "This Is About Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aspernatur aut est rerum quas rem accusamus ipsa natus. Consectetur libero sunt facilis! Quaerat consequatur voluptas in fugit soluta unde totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi esse doloribus modi vero perferendis, temporibus laudantium. A exercitationem, porro expedita accusantium quis quas consequuntur. Earum aut necessitatibus veritatis ad.",
    },
    {
      id: 2,
      title: "This Is Careers Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aspernatur aut est rerum quas rem accusamus ipsa natus. Consectetur libero sunt facilis! Quaerat consequatur voluptas in fugit soluta unde totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi esse doloribus modi vero perferendis, temporibus laudantium. A exercitationem, porro expedita accusantium quis quas consequuntur. Earum aut necessitatibus veritatis ad.",
    },
    {
      id: 3,
      title: "This Is Cart Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aspernatur aut est rerum quas rem accusamus ipsa natus. Consectetur libero sunt facilis! Quaerat consequatur voluptas in fugit soluta unde totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi esse doloribus modi vero perferendis, temporibus laudantium. A exercitationem, porro expedita accusantium quis quas consequuntur. Earum aut necessitatibus veritatis ad.",
    },
  ];
  return (
    <div className="not-found">
      {obj.map((ele) => {
        return (
          <Section
            key={ele.id}
            title={ele.title}
            description={ele.description}
            id={ele.id}
            isVisible={visibleSection === ele.id}
            setIsVisible={(display) => {
              if (display) {
                setVisibleSection(ele.id)
              } else {
                setVisibleSection(" ");
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Instamart;