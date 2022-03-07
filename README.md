# About the Project
This project was the final solo challenge on the [Scrimba Frontend Career Path](https://scrimba.com/learn/frontend).  A Figma design file was provided to start, and all code was written from scratch.

The Challenge:

- Build out this invoicing application and get it looking as close to the design as possible, including responsive-design elements
- See hover states for all interactive elements on the page
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid, & filter by status (draft/pending/paid)
- Create a full-stack application with CRUD functionality
- 
https://tylerolson3.github.io/Quizzical/ (update to netlify address)

![Screen Shot 2022-03-06 at 6 12 21 PM](https://user-images.githubusercontent.com/67395239/156948516-ff077ba6-18c0-4aa9-8540-49eabbdf46f7.png)


## How It's Made:

**Tech used:** 
- React
- React Hooks (useState, UseEffect)
- HTML, CSS

## Problems Solved

### Special Characterss Not Displaying Correctly

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


You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *fuck yeah I did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.



