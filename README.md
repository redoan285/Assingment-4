# JavaScript DOM & Event Concepts (Short Notes)

## 1. Difference Between getElementById, getElementsByClassName, querySelector, and querySelectorAll

### getElementById()
- Selects one element by its **id**
- Returns a single element
- Very fast
- Example:
  ```js
  document.getElementById("myId");
  ```

### getElementsByClassName()
- Selects elements by **class name**
- Returns an **HTMLCollection**
- Live collection (auto updates if DOM changes)
- Example:
  ```js
  document.getElementsByClassName("myClass");
  ```

### querySelector()
- Selects the **first matching element**
- Uses CSS selectors (#id, .class, div, etc.)
- Returns a single element
- Example:
  ```js
  document.querySelector(".myClass");
  ```

### querySelectorAll()
- Selects **all matching elements**
- Uses CSS selectors
- Returns a **NodeList**
- Not live (static list)
- Example:
  ```js
  document.querySelectorAll(".myClass");
  ```

Main Difference:
- getElementById → single id
- getElementsByClassName → multiple class elements (live)
- querySelector → first match (CSS selector)
- querySelectorAll → all matches (CSS selector)

---

## 2. How to Create and Insert a New Element into the DOM

Step 1: Create element
```js
const newDiv = document.createElement("div");
```

Step 2: Add content
```js
newDiv.innerText = "Hello World";
```

Step 3: Insert into DOM
```js
document.body.appendChild(newDiv);
```

Other methods:
- append()
- prepend()
- insertBefore()

---

## 3. What is Event Bubbling?

Event Bubbling is when an event starts from the target element and moves upward to its parent elements.

Example:
If you click a button inside a div:
- Button event runs first
- Then div event runs
- Then body event runs

Flow:
Child → Parent → Grandparent → Document

---

## 4. What is Event Delegation? Why is it Useful?

Event Delegation is a technique where you attach an event listener to a parent element instead of multiple child elements.

Example:
```js
parent.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```

Why Useful:
- Improves performance
- Works for dynamically added elements
- Less code
- Cleaner structure

---

## 5. Difference Between preventDefault() and stopPropagation()

### preventDefault()
- Stops the default browser behavior
- Example: Stop form submission or link navigation
```js
event.preventDefault();
```

### stopPropagation()
- Stops the event from bubbling to parent elements
```js
event.stopPropagation();
```

Main Difference:
- preventDefault() → Stops default action
- stopPropagation() → Stops event bubbling
