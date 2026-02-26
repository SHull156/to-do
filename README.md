# TaskFlow

TaskFlow is a lightweight to-do list generator. It allows users to add new items and then track each item through to completion. It uses a three-column kanban approach to allow users to keep track of the status of each item.


# Key idea
- Built to allow the user to track all outstanding tasks in one place

# Tech stack
- HTML
- CSS
- Vanilla JavaScript

# Features
- Input todo text
- - Move todo item through outstanding, in process and completed statuses by clicking on the item
- Items can be deleted by clicking the delete button next to each item
- Generated lists persist across page reloads using `localStorage`
- The same todo list is restored exactly as generated

# What this project demonstrates
- DOM manipulation — creating and appending elements dynamically without a framework
- Event delegation — single event listeners on parent elements handle all child interactions
- localStorage persistence — tasks survive page refresh using JSON serialisation
- Helper functions — reusable `createTaskElement` and `saveCurrentState` functions keep code DRY
- Vanilla JavaScript — no libraries or frameworks

# How to run locally
1. Clone the repository
2. Open `index.html` in your browser  
- live link: https://shull156.github.io/to-do/
