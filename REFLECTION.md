# Week 2 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between props and state?

- props are data or functions passed from parent to a child. state stores information that can change while the app is running such as cart items

2. Why do we use .map() and key when displaying list?

- .map() create component for each item in array. key will helps React to identify each item, so i use unique ID instead of array index

3. How does the cart badge update?

- when i click add to cart, the handleAddToCart function updates the cart state using setCart. header will receives cart.length through props and displays the updated count

4. What did i learn from this lab?

- i learned how to seperate data from UI components, pass using props, display lists dynamically and use state to respond to user clicks
