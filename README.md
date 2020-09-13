## Slacker News 
#### a HackerNews clone of sorts

---

This app runs on React, Firebase, and TailwindCSS. Make sure you  ```npm install``` the following dependencies:

```
react
react-router-dom
tailwindcss
chokidar-cli
firebase
```

## *BEFORE YOU* ```npm start``` *SET UP TAILWIND FIRST*

---
## Setting up TailwindCSS
Refer to [this tutorial](https://daveceddia.com/tailwind-create-react-app/#production) on how to set up a production build of Tailwind.
### Step 1: Install tailwindcss and watch build all at once
```
npm install tailwindcss npm-run-all chokidar-cli
```

### Step 2: Replace the "scripts" section in ```package.json``` with the following:
```
"scripts": {
  "build:tailwind": "tailwind build src/tailwind.css -o src/tailwind.output.css",
  "watch:tailwind": "chokidar 'src/**/*.css' 'src/**/*.scss' --ignore src/tailwind.output.css -c 'npm run build:tailwind'",

  "start": "npm-run-all build:tailwind --parallel watch:tailwind start:react",
  "start:react": "react-scripts start",

  "prebuild": "run-s build:tailwind",

  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

### Step 3: Set up the Tailwind source CSS file
- Create ```tailwind.css``` directly in the ```/src``` folder (if it's not there already).
- Paste the following inside:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: In ```src/index.js```, replace ```import './index.css'``` with ```import './tailwind.css'```

### Step 5: ????
### Step 6: ```npm start```