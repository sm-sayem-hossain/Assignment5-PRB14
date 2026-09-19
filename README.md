# DevStack - Build Your Tech Stack

Live Link: https://assignment5-prb-14.vercel.app/

### Description
This is my simple website called DevStack. Here people can see different technologies and select them to make their own tech stack list easily.

### Technology I Used
- React
- Vite
- Tailwind CSS & DaisyUI
- TypeScript
- React-Toastify

### 3 Features
1. You can click and add technology cards to your stack.
2. If you click the same card again, it shows a warning alert.
3. You can remove a single item or remove all items at once.

### Questions and Answers

**1. What is JSX, and why is it used in React?**
JSX means writing HTML inside JavaScript code. It is used because it makes making website design very easy and simple in one place.

**2. What is the difference between props and state?**
Props is data sent from parent to child and child cannot change it. State is internal data inside component that can change anytime.

**3. What does the `useState` hook do, and where did you use it in this project?**
useState is used to remember and change data. In this project, I used it to save the technology cards, selected items, and loading state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
useEffect does work after page loads. I used it to fetch data from technologies.json file when page first opens.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
Key helps React know which item is clicked or deleted. Without key, React gets confused.

**6. What is conditional rendering? Show one place you used it.**
Showing different things based on true or false. Example: when selected list is 0, I showed "Your stack is empty" box. When item added, it shows the items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent sends data down to child using props. Child sends data back to parent by calling a function that parent gave inside props.
