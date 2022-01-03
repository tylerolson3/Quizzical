import { nanoid } from "nanoid";

function shuffleArray(array) {
  let randomArr = [...array].sort(() => Math.random() - 0.5);
  let objArr = randomArr.map((item) => {
    return {
      value: item,
      id: nanoid(5),
      isHeld: false,
    };
  });
  return objArr;
}

export default shuffleArray;
