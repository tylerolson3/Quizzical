# About the Project
This project was the final solo challenge on the [Scrimba Frontend Career Path](https://scrimba.com/learn/frontend).  A Figma design file was provided to start, and all code was written from scratch.

The Challenge:

- Get quiz data from the Open Trivia Database API
- Display quiz questions and possible answers
- Tally correct answers after 'check answers' is clicked
- Style answers based on whether it was correct/incrorect

https://tylerolson3.github.io/Quizzical/ (update to netlify address)

![Screen Shot 2022-03-06 at 6 12 21 PM](https://user-images.githubusercontent.com/67395239/156948516-ff077ba6-18c0-4aa9-8540-49eabbdf46f7.png)


## How It's Made:

**Tech used:** 
- React
- React Hooks (useState, UseEffect)
- HTML, CSS

## Problems Solved

### Special Characters Not Displaying Correctly

- When inintially receiving the API data, special characters ($, ?, ", ...) would not display correctly.  For example, the following question: 

``
The New York Times slogan is, 'All The News That's Fit to...'
``

would incorrectly be displayed as


![Screen Shot 2022-03-06 at 12 43 48 PM](https://user-images.githubusercontent.com/67395239/156948815-b9d77f48-4d84-4778-bdba-f2a46b02c709.png)

***Solution***

- Using StackOverflow, I found a [HTML decoder library](https://github.com/mathiasbynens/he) that ensures special characters are displayed correctly.  

```javascript
const he = require("he");
...
  <h3 className="question">{he.decode(props.question)}</h3>
```


### Formatting Data Once Received from the API

- Since the API formatted the correct answer and incorrect answers as seperate values, I had to combine them into a single property array.  In order to avoid all questions having the same answer (e.g 1 = A, 2 = A, 3 = A, etc.) I had randomize the order of possibly answers.  I did this by creating a function that destructured all possible answers into a single array, and then randomized the order using .sort() & .random()

![Screen Shot 2022-03-06 at 4 36 35 PM](https://user-images.githubusercontent.com/67395239/156949520-668066d4-e459-4974-b8c0-2cf6cee07bbb.png)

```javascript
function shuffleAnswers(possibleAnswers) {
  let randomArr = [...possibleAnswers].sort(() => Math.random() - 0.5);
  let randomAnswerList = randomArr.map((item) => {
    return {
      value: item,
      id: nanoid(5),
      isHeld: false,
    };
  });
  return randomAnswerList;
}
```


You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

### The dangers of *git push --force*

While working on this project, I implemented a **Git Feature Branch Workflow** where I never make changes to the main branch, and instead use feature branches to update my code.

I was getting a *non-fast-forward merge error* and couldn't figure it out, so I did:

***git push --force orign main*** 

and somehow this overwrote all the changes I had made over the previous few hours.  Whoops...


