import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { delay } from "./utils";

const slogans = [
  { id: 0, text: "Compare CS programs" },
  { id: 1, text: "Plan your next 4 years" },
  { id: 2, text: "Find the school for you" },
];

const SloganScreen = () => {
  const [activeSlogans, setActiveSlogans] = useState([slogans[0]]);
  const transitions = useTransition(activeSlogans, (slogan) => slogan.id, {
    from: { opacity: 0, transform: "translateY(-100px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(100px)" },
  });
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlogans([]);
      delay(1000).then(() => {
        let nextIndex = activeSlogans[0].id + 1;
        if (nextIndex === slogans.length) {
          nextIndex = 0;
        }
        setActiveSlogans([slogans[nextIndex]]);
      });
    }, 2000);
    return () => clearInterval(id);
  });
  return (
    <div>
      {transitions.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          <h2>{item.text} </h2>
        </animated.div>
      ))}
    </div>
  );
};

export default SloganScreen;
