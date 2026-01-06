# React  App
## Here is the live preview 
   https://movie-assignment-coral.vercel.app/
## Setup Instructions
  ```bash
    Clone the repository with
    git clone https://github.com/yadnik-kamble/Movie-Assignment-
    and then run these commands
    npm install
    npm start
```

## Explanation of Debounce Implementation
  ### Debounce Implementation
  The search functionality is implemented using a custom useDebounce hook. 
  The hook delays updating the search value by 300 milliseconds after the user stops typing. Each time the input value changes, the previous timeout is cleared and a new one is created.
  This ensures that the filtering logic runs only after the user pauses typing,reducing unnecessary computations and improving performance.
  Key Hook-Related Decisions
	useEffect is used to fetch movie data once when the component mounts to prevent repeated API calls.
	useState is used only for essential state such as raw API data, loading and error states, and user input.
	useDebounce is used to delay search processing and avoid filtering on every keystroke.
	useMemo is used to derive the filtered movie list instead of storing derived data in state, which prevents state duplication.
## Folder Structure
   ```bash
   assignment
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── MovieList.jsx
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

