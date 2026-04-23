import {
  FaLinux,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaReadme,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BsJavascript } from "react-icons/bs";
import { SiMysql, SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";

export const Commands = [
  // HTML
  {
    techRoute: "/html",
    techName: "HTML",
    techIcon: FaHtml5,
    techDescription:
      "HTML is Hyper Text Markup Language which uses tags to build the structure of website.",
    techCategory: "Web Development",
    commands: [
      // Boilerplate

      {
        cmdId: 1,
        cmdTitle: "HTML Boilerplate",
        cmdDescription:
          "It is used to setup HTML file structure for browsers to display HTML correctly.",
        cmdCategory: "Boilerplate",
        cmd: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="shortcut icon" href="favicon.png" type="image/png" />
  <title>Document</title>
</head>
<body>
  <!-- Elements/Tags -->

  <script src="file.js"></script>
</body>
</html>

<! -- Basic Tags Info -->
<!--
<html lang="en"></html> : it is used to tell the data inside this is in HTML format, in English
<head></head> : it is used to store meta data inside it, including character encoding format, initial size and zoom/scale of website, title and links to load before HTML starts rendering
<body></body> : this is where actual HTML tags/elements are written to be displayed in website, JavaScript or functionalities is usually at its end
-->`,
      },

      // Tags
      {
        cmdId: 2,
        cmdTitle: "Heading tag",
        cmdDescription:
          "It is used to adjust size of text. It can range from h1 - h6 with sizes in decreasing order.",
        cmdCategory: "Tags",
        cmd: "<h1> Your Text Here <h1/>",
      },

      {
        cmdId: 3,
        cmdTitle: "Paragraph tag",
        cmdDescription: "It is used to display long texts as paragraphs.",
        cmdCategory: "Tags",
        cmd: "<p> Your Text Here <p/>",
      },

      {
        cmdId: 4,
        cmdTitle: "Button tag",
        cmdDescription:
          "It is used to make buttons with some default features like cursor and click behaviour.",
        cmdCategory: "Tags",
        cmd: `<button> Your Text Here <button/>
<!-- Attributes -->
onclick(()=>{
// callback function to execute on clicking this button  
})

type="submit" <!-- or can be input, etc. for forms -->
`,
      },

      {
        cmdId: 5,
        cmdTitle: "Division tag",
        cmdDescription:
          "It is used to make wrappers/containers around other HTML elements. It do not have significance of its own.",
        cmdCategory: "Tags",
        cmd: "<div> Your content Here <div/>",
      },

      {
        cmdId: 6,
        cmdTitle: "Anhor tag",
        cmdDescription: "It is used to provide links to go through this.",
        cmdCategory: "Tags",
        cmd: `<a> Your content Here <a/>
<!-- Attributes -->
href="path/link"
target="_blank"
rel="noreferrer noopener"
`,
      },

      {
        cmdId: 7,
        cmdTitle: "Line Break Tag",
        cmdDescription:
          "It is used to provide line break at the position it is used.",
        cmdCategory: "Tags",
        cmd: "<br></br>",
      },

      {
        cmdId: 8,
        cmdTitle: "Horizontal Rule Tag",
        cmdDescription: "It is used to provide horizontal separation line.",
        cmdCategory: "Tags",
        cmd: `<hr></hr>
<!-- Attributes -->
size="units"`,
      },

      // Lists
      {
        cmdId: 9,
        cmdTitle: "Unordered list",
        cmdDescription:
          "It is used to display items as list in non-numerical formats like bullet points.",
        cmdCategory: "Lists",
        cmd: `<ul>
<li>List Item 1</li>
<li>List Item 2</li>
</ul>`,
      },

      {
        cmdId: 10,
        cmdTitle: "Ordered list",
        cmdDescription:
          "It is used to display items as list in numerical formats like 1,2,3 or i, ii, iii and so on.",
        cmdCategory: "Lists",
        cmd: `<ol>
<li>List Item 1</li>
<li>List Item 2</li>
</ol>`,
      },

      // File Handling

      {
        cmdId: 11,
        cmdTitle: "Image tag",
        cmdDescription:
          "It is used to display image through image address/path.",
        cmdCategory: "File Handling",
        cmd: `<img><img/>
<!-- Attributes -->
src="image address or path"
alt="alternate text if image is not displayed for accessibility"`,
      },

      {
        cmdId: 12,
        cmdTitle: "Video tag",
        cmdDescription:
          "It is used to display video through video address/path.",
        cmdCategory: "File Handling",
        cmd: `<video>
  <source></source>
<video/>
<!-- Video tag Attributes -->
width="units"
controls
<!-- Source tag Attributes -->
src="video address or path"
type="video/mp4"
`,
      },

      // Form Handling
      {
        cmdId: 13,
        cmdTitle: "Form & Inputs",
        cmdDescription:
          "It is used to take inputs from user, colllect them as a form and send to backend.",
        cmdCategory: "Form Handling",
        cmd: `<form onsubmit="handleSubmitFn()">
<label name="labelName" for="input name attribute's value"> Label for Input </label>

<input 
name="inputName" 
type"text/number/email/password/date/time/file/checkbox"
min="units" max="units"
placeholder="text to display when no input">
</input>

<button type="submit">Submit Form</button>
<form/>`,
      },
    ],
  },

  // -----------------------------

  // CSS
  {
    techRoute: "/css",
    techName: "CSS",
    techIcon: IoLogoCss3,
    techDescription:
      "CSS is Cascading Style Sheets i.e. used to style the HTML elements.",
    techCategory: "Web Development",
    commands: [
      // Setup
      {
        cmdId: 1,
        cmdTitle: "CSS integration with HTML",
        cmdDescription:
          "3 methods are available to use CSS with HTMl, including inline CSS (as style attribute), internal CSS (as style tag) and external CSS (as linked stylesheet).",
        cmdCategory: "Setup",
        cmd: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css"> <!-- External CSS -->
  <title>Document</title>

  <!-- Internal CSS -->
  <style>
        selector {
          property1: value1;
          property2: value2;
        }
  </style>

</head>
<body>
  <!-- Inline CSS -->
  <h1 style="property1: value1; property2: value2;"></h1>
</body>
</html>

<!-- ./style.css : External CSS file as Best practice -->
selector {
    property1: value1;
    property2: value2;
}
    
<!-- 3 types of Selectors -->
.nameOfClass : class = "nameOfClass" is given to HTML element to style all elements of 1 class together in 1 CSS block
#idName : id = "nameOfId" is given to HTML element to uniquely style it
directHTMLElementName : direct HTML tag name is used like p {}, div {}, etc. to style all those elements`,
      },

      {
        cmdId: 2,
        cmdTitle: "List of commonly used CSS Properties",
        cmdDescription:
          "The following properties are commonly used in CSS. Comment is attached alongside for knowing its purpose.",
        cmdCategory: "CSS Properties",
        cmd: `selector {
  background-color: colorName/#hexCode; /* to give color to background, either of full website, or button or a box or anything */
  opacity: anyNumber %; /* to set visibility of an HTML element */
  color: colorName/#hexCode; /* to give color to text */
  font-size: anyNumber px/rem/%/vw/vh; /* to set size of text */
  font-weight: 50-900; /* to set darkness of font, fixed unitless value from 50, 100, 200, .. 900 */
  text-align: center/justify; /* to configure text alignment w.r.t. available size it occupies */
  border: size type color; /* to give border w.r.t. given size in px/rem/%/vw/vh, type: solid/dotted and given color: colorName/#hexCode */ 
  border-radius: anyNumber px/rem/%/vw/vh; /* to give curvature to border */
  width: anyNumber px/rem/%/vw/vh; /* to give width to HTML elements in different units */
  height: anyNumber px/rem/%/vw/vh; /* to give width to HTML elements in different units */
  margin: anyNumber px/rem/%/vw/vh; /* applied independantly, gives spacing from outer boundary, equal from all sides if 1 value given else top right bottom left separately */
  padding: anyNumber px/rem/%/vw/vh; /* applied at parent, gives spacing inside parent, equal from all sides if 1 value given else top right bottom left separately */
  position: relative/absolute/fixed/sticky; /* to display HTML element relative to parent or DOM if no relative parent */
  top/right/bottom/left: anyNumber px/rem/%/vw/vh; /* if position is given, then its coordinates can be given like this */
  z-index: unitlessValue; /* to give priority to be at front/behind w.r.t. other HTML elements */
  display: block/inline-block/flex/grid; /* to display children items as per selected format */
  grid-template-columns: 1fr 1fr 1fr; /* fr means equal unit, 1fr x3 times means 3 cols of equal units */
  flex-direction: row/column; /* for configuring direction of children elements if display is flex */
  flex-wrap: wrap/nowrap; /* for configuring children element adjustment like wrap to next line or nowrap for same line if display is flex */
  align-items: center/flex-start/flex-end; /* vertical alignment if flex row, horizontal alignment if flex col /*
  justify-content: center/evenly/space-around; /* horizontal alignment if flex row, vertical alignment if flex col /*
  gap: anyNumber px/rem/%/vw/vh; /* for adjusting equal vertical and horizontal gaps among flex/grid elements */
}`,
      },
    ],
  },

  // -----------------------------

  // React.js
  {
    techRoute: "/reactjs",
    techName: "React.js",
    techIcon: GrReactjs,
    techDescription:
      "React.js is frontend library of Node.js i.e. used to build Single Page Applications (SPAs) using components through Virtual DOM.",
    techCategory: "Web Development",
    commands: [
      // Vite Project Setup
      {
        cmdId: 1,
        cmdTitle: "Install vite-based react.js project setup",
        cmdDescription: "It is used to setup react.js project in your system.",
        cmdCategory: "Vite Project Setup",
        cmd: `npm create vite@latest
(y) Enter
Give project name in lowercase, can be separated by hyphen -
Select : React
Select : JavaScript
Install with npm and start now? yes`,
      },

      {
        cmdId: 2,
        cmdTitle: "Clean & Customize files",
        cmdDescription:
          "Clean the newly downloaded files as per following steps.",
        cmdCategory: "Vite Project Setup",
        cmd: `/assets & /public folders: delete all logos
./index:html: give title, remove favicon logo
./index.css: remove all code, either setup tailwind or use css global codes here
./App.css: delete this file
./App.jsx: remove all code & use functional component layout i.e. export const App = () => { return <div>App</div>;}`,
      },

      {
        cmdId: 3,
        cmdTitle: "Setup folder structure",
        cmdDescription:
          "Make the following folders if not available so that proper folder structure is followed.",
        cmdCategory: "Vite Project Setup",
        cmd: `projectname/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│       └── ComponentName.jsx
│   ├── pages/
│       └── PageName.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md`,
      },

      // Routes Setup
      {
        cmdId: 4,
        cmdTitle: "Routes setup using React Router DOM",
        cmdDescription:
          "Configure the routes in which different pages will be displayed.",
        cmdCategory: "Routes Setup",
        cmd: `// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import PageName from "./pages/PageName";

const App = () => {
  return (
    <>
      <BrowserRouter>

      <Navbar />

      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<PageName />} />
        </Routes>
      </div>

      <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;`,
      },

      // Functional Components
      {
        cmdId: 5,
        cmdTitle: "Functional Components Boilerplate",
        cmdDescription:
          "Functional components are used to wrap html and javascript code in a single re-usable file.",
        cmdCategory: "Functional Components",
        cmd: `// ComponentName.jsx
import React from "react";

const ComponentName = ({props}) => {
  // JAVSCRIPT CONTENT IN REACT-BASED SYNTAX HERE

  return (
    <>
      {/* HTML CONTENT HERE "/}
    </>
  );
};

export default ComponentName;`,
      },

      {
        cmdId: 6,
        cmdTitle: "Functional Components Usage",
        cmdDescription:
          "Re-usable functional components can be used and props can be passed simply from parent to component being rendered.",
        cmdCategory: "Functional Components",
        cmd: `<ComponentName propName={valueToSendToComponent} />`,
      },

      // State Management
      {
        cmdId: 7,
        cmdTitle: "useState to set data",
        cmdDescription:
          "useState is used to set initial data to a JavaScript variable.",
        cmdCategory: "State Management",
        cmd: `import {useState} from "react";
const ComponentName = () => {
  const [stateName, setStateName] = useState(initialValue); // initialValue can be of any datatype
  // e.g. 0, "welcome", true, false, [], {}, null, etc.

  return (
    <div>{count}</div>
)};
  
export default ComponentName;`,
      },

      {
        cmdId: 8,
        cmdTitle: "useEffect to fetch data conditionally or on reload",
        cmdDescription:
          "useState is used to fetch data when website reloads or value of some variable is changed.",
        cmdCategory: "State Management",
        cmd: `import {useEffect} from "react";
const ComponentName = () => {
  const [stateName, setStateName] = useState(initialValue); 

  // [] means on execute on website reload, without [] it enters infinite call
  useEffect(()=>{
    setCount((prev)=>prev+1);  
  },[]); 

  // if you want to execute on some value changes, then use that inside [] as:
  useEffect(()=>{
      setCount(0);  
    },[count]); 

  return (
    <div>{count}</div>
)};
  
export default ComponentName;`,
      },

      {
        cmdId: 9,
        cmdTitle: "useLocation to fetch current path",
        cmdDescription:
          "useLocation is used to fetch current route or url related items.",
        cmdCategory: "State Management",
        cmd: `import {useLocation} from "react-router-dom";
const ComponentName = () => {
  const location = useLocation();
  console.log(location.pathname); // to know which route we are currently in

  return (
    {/* HTML CODE */}
)};
  
export default ComponentName;`,
      },

      {
        cmdId: 10,
        cmdTitle: "useParams to fetch current path's params",
        cmdDescription:
          "useParams is used to fetch current route's parameters that are configured in App.jsx routes as /path/:paramName .",
        cmdCategory: "State Management",
        cmd: `import {useParams} from "react-router-dom";
const ComponentName = () => {
  const {paramName} = useParams();
  console.log(paramName); // to know exact value of passed param

  return (
    {/* HTML CODE */}
)};
  
export default ComponentName;`,
      },

      {
        cmdId: 11,
        cmdTitle: "useSearchParams to fetch current path's params",
        cmdDescription:
          "useSearchParams is used to fetch current route's search parameters i.e. /path?searchId=123 .",
        cmdCategory: "State Management",
        cmd: `import {useSearchParams} from "react-router-dom";
const ComponentName = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get.paramName);
  // to know exact value of passed search parameter after ?paramName=123, it gives 123 based on exact matching search param key name

  return (
    {/* HTML CODE */}
)};
  
export default ComponentName;`,
      },

      {
        cmdId: 12,
        cmdTitle:
          "useNavigate to navigate to other pages from JavaScript logic",
        cmdDescription:
          "useNavigate is used to navigate to other pages. Mostly used with function logic based navigation like after login go to profile page and so on.",
        cmdCategory: "State Management",
        cmd: `import {useNavigate} from "react-router-dom";
const ComponentName = () => {
  const navigate = useNavigate();
  navigate("/pathToNavigate); 

  return (
    {/* HTML CODE */}
)};
  
export default ComponentName;`,
      },

      {
        cmdId: 13,
        cmdTitle: "Link to navigate to other pages from HTML component",
        cmdDescription:
          "Link is used to navigate to other pages. Mostly used as wrapper of HTML components, obeys all rules of class names, etc. like as usual HTML. It is used to navigate to that path after clicking in that area under Link tag.",
        cmdCategory: "State Management",
        cmd: `import {Link} from "react-router-dom";
const ComponentName = () => {
  return (
    <Link to={"/path"}> Click to navigate to that path </Link>
)};
  
export default ComponentName;`,
      },

      // Tailwind CSS
      {
        cmdId: 14,
        cmdTitle: "Installation of Tailwind CSS",
        cmdDescription:
          "The complete guide of Tailwind CSS can be seen at https://tailwindcss.com/. General vite-react and tailwind setup is presented below.",
        cmdCategory: "Tailwind CSS",
        cmd: `npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p`,
      },

      {
        cmdId: 15,
        cmdTitle: "Configuration of Tailwind CSS (tailwind.config.js)",
        cmdDescription:
          "The complete guide of Tailwind CSS can be seen at https://tailwindcss.com/. Mak sure to download PostCSS Language Support Extension in VS Code for Tailwind CSS to work..",
        cmdCategory: "Tailwind CSS",
        cmd: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
      },

      {
        cmdId: 16,
        cmdTitle: "Configuration of Tailwind CSS (index.css)",
        cmdDescription:
          "The complete guide of Tailwind CSS can be seen at https://tailwindcss.com/. Mak sure to download PostCSS Language Support Extension in VS Code for Tailwind CSS to work..",
        cmdCategory: "Tailwind CSS",
        cmd: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
      },

      // React Icons
      {
        cmdId: 17,
        cmdTitle: "Install command of react icons library",
        cmdDescription:
          "This command is used to install react icons library through which icons can be used as React Components directly after import.",
        cmdCategory: "React Icons",
        cmd: "npm i react-icons",
      },

      {
        cmdId: 18,
        cmdTitle: "Usage of react icons",
        cmdDescription:
          "The usage of react icons can be seen from https://react-icons.github.io/react-icons/ by searching any icon. General syntax is presented below.",
        cmdCategory: "React Icons",
        cmd: `import {IconName} from "react-icons/pathAsPerWebsite";
// Usage inside return as HTML/React Component
<IconName />
        `,
      },

      // React Toastify
      {
        cmdId: 19,
        cmdTitle: "React Toastify Installation",
        cmdDescription:
          "React toastify is used to display beautiful alerts. It can be installed using following command.",
        cmdCategory: "React Toastify",
        cmd: "npm i react-toastify",
      },

      {
        cmdId: 20,
        cmdTitle: "React Toastify Configuration (App.jsx)",
        cmdDescription:
          "This is one time configuration done in App.jsx to globally allow ToastContainer to work by declaring only once.",
        cmdCategory: "React Toastify",
        cmd: `// App.jsx
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Usage in return
const App = () => {
return (
  <>
    <ToastContainer
        position="top-right" // or any other position
        autoClose={3000} // or any other time in milli seconds
      />
  </>
)};`,
      },

      {
        cmdId: 21,
        cmdTitle: "React Toastify Usage (in any file)",
        cmdDescription:
          "Due to global configuration, toast can be used anywhere directly.",
        cmdCategory: "React Toastify",
        cmd: `toast.success("Success Message");
// OR
toast.error("Error Message");`,
      },
    ],
  },

  // -----------------------------

  // MongoDB
  {
    techRoute: "/mongodb",
    techName: "MongoDB",
    techIcon: SiMongodb,
    techDescription:
      "MongoDB is a JSON based NoSQL database. It can be easily connected through a link with JavaScript, Python, etc.",
    techCategory: "Web Development",
    commands: [
      // Account Setup
      {
        cmdId: 1,
        cmdTitle: "Setting up account for the first time in MongoDB",
        cmdDescription:
          "The following steps can be used to setup account in MongoDB. Make sure to follow them as it is.",
        cmdCategory: "Account Setup",
        cmd: `Step 1: Signup > Give any Project name & Organization Name > Select : JavaScript, Free M0, AWS, Mumbai (or default whatever available).
Step 2: Database Access > Add New Database > Give any database name and collection name > Setup username and password (must not include any symbol or number, store it somewhere to remmeber).
Step 3: Network Access > Add IP Address > Select : Anywhere (0.0.0.0/0).
Step 4: Access MongoDB connection string as Database > Connect > Application > Copy connection string > Replace username and password.
Step 5: Connection string setup: After adding your username & password, add database name before ? as dbname?retryWrites i.e. unique n each project to store data rest stays same.`,
      },

      // Query Functions
      {
        cmdId: 2,
        cmdTitle: "GET Functions",
        cmdDescription:
          "The following functions can be used to perform GET operation on data.",
        cmdCategory: "Query Functions",
        cmd: `ModelName.find(); // for getAll to fetch all items
ModelName.find({_id: req.params.id}); // for getOne to fetch one item based on its auto generated MongoDB Object Id
ModelName.findById(req.params.id); // for getOne to fetch one item based on its auto generated MongoDB Object Id
ModelName.findOne({schemaKey: id}); // for getOne to fetch one item based on id`,
      },

      {
        cmdId: 3,
        cmdTitle: "POST Functions",
        cmdDescription:
          "The following functions can be used to perform POST operation on data.",
        cmdCategory: "Query Functions",
        cmd: `ModelName.create(req.body); // for creating an item
const item = new ModelName(req.body); await item.save(); // for creating an item`,
      },

      {
        cmdId: 4,
        cmdTitle: "PUT Functions",
        cmdDescription:
          "The following functions can be used to perform PUT operation on data.",
        cmdCategory: "Query Functions",
        cmd: `ModelName.findByIdAndUpdate(req.params.id, req.body, {new: true}); // for updating an item
ModelName.findOneAndUpdate(
{id: req.params.id}, // condition to find item
{$set: {key1: newValue1, key2: newValue2}}, // set new values to keys separated by comma
); // old method for updating an item`,
      },

      {
        cmdId: 5,
        cmdTitle: "DELETE Functions",
        cmdDescription:
          "The following functions can be used to perform DELETE operation on data.",
        cmdCategory: "Query Functions",
        cmd: `ModelName.findByIdAndDelete(req.params.id); // to delete an item based on id
ModelName.findOneAndDelete({schemaKey: id}); // to delete an item based on id
ModelName.deleteOne({_id: req.params.id}); // to delete an item based on id
ModelName.remove(); // to delete all items in a collection`,
      },
    ],
  },

  // -----------------------------

  // Node.js
  {
    techRoute: "/nodejs",
    techName: "Node.js",
    techIcon: FaNodeJs,
    techDescription:
      "Node.js is a runtime environment for Javascript. It allows backend as well as frontend development in our local machines.",
    techCategory: "Web Development",
    commands: [
      {
        cmdId: 1,
        cmdTitle: "Update packages in Linux",
        cmdDescription:
          "It updates the built-in packages (pc password needed).",
        cmdCategory: "Installation",
        cmd: "sudo apt update",
      },

      {
        cmdId: 2,
        cmdTitle: "Curl installation (Linux)",
        cmdDescription:
          "Curl is a tool used to download resources from servers directly from CLI.",
        cmdCategory: "Installation",
        cmd: "sudo apt install curl -y",
      },

      {
        cmdId: 3,
        cmdTitle: "NVM installation by curl",
        cmdDescription:
          "NVM is Node Version Manager i.e. used to download latest Node.js for its new features and support.",
        cmdCategory: "Installation",
        cmd: "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash",
      },

      {
        cmdId: 4,
        cmdTitle: "Initializing NVM",
        cmdDescription:
          "NVM is initialized in bash so that it is ready for downloading Node.js.",
        cmdCategory: "Installation",
        cmd: "source ~/.bashrc",
      },

      {
        cmdId: 5,
        cmdTitle: "Installing specific version of Node.js",
        cmdDescription: "NVM is used to download Node.js 20 onwards.",
        cmdCategory: "Installation",
        cmd: "nvm install 20",
      },

      {
        cmdId: 6,
        cmdTitle: "Configure Node.js for all users",
        cmdDescription:
          "NVM is used to configure Node.js 20 for all projects in that system.",
        cmdCategory: "Installation",
        cmd: "nvm use 20",
      },

      {
        cmdId: 7,
        cmdTitle: "Install postman (Linux)",
        cmdDescription: "Postman is used to test APIs.",
        cmdCategory: "Installation",
        cmd: "sudo snap install postman",
      },
    ],
  },

  // -----------------------------

  // Express.js
  {
    techRoute: "/expressjs",
    techName: "Express.js",
    techIcon: SiExpress,
    techDescription:
      "Express.js is a backend library of Node.js for REST CRUD APIs development. It can be connected to lot of databases like MongoDB & Postgres.",
    techCategory: "Web Development",
    commands: [
      // Express MongoDB
      {
        cmdId: 1,
        cmdTitle: "Initialize npm",
        cmdDescription:
          "Node Package Manager (NPM) is used to install packages and dependencies for node project.",
        cmdCategory: "New Project Setup",
        cmd: "npm init -y",
      },

      {
        cmdId: 2,
        cmdTitle: "To configure modern ES6 syntax",
        cmdDescription:
          "This command is used in package.json to configure react-like modern imports and syntax.",
        cmdCategory: "New Project Setup",
        cmd: '"type": "module"',
      },

      {
        cmdId: 3,
        cmdTitle: "Install packages",
        cmdDescription:
          "The packages listed are used to develop express postgres application.",
        cmdCategory: "Express MongoDB",
        cmd: "npm i nodemon express mongoose cors dotenv jsonwebtoken",
      },

      {
        cmdId: 4,
        cmdTitle: "index.js - Expressjs server connection and routes setup",
        cmdDescription:
          "This code snippet is an example for setting up express app having postgres database connection and routes middleware.",
        cmdCategory: "Express MongoDB",
        cmd: `import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routesNameRouter from "./view/routes.js";

const app = express();
app.use(express.json()); // for post api to work
app.use(cors()); // for frontend integration to work

// Middleware
app.use("/api/path", routesNameRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(\`Server started running on port \${PORT\}\`);
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongDB Connected"));`,
      },

      {
        cmdId: 5,
        cmdTitle: "model.js - MongoDB Schema & Model creation",
        cmdDescription:
          "This code snippet is an example for creating a table using schema/model in MongoDB database.",
        cmdCategory: "Express MongoDB",
        cmd: `import mongoose from "mongoose";

const SchemaNameInPascalCase = mongoose.Schema(
{
	keyName: {
		type: Datatype, // can be String, Number, Object, etc.
		required: true, // can be true or false
		unique: true // can be true or false
	}
	foreignKey: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "collectionName"
    // collection name of other schema used during mongoose.model("collectionName", schemaName)
    // is used to connect 2 collections like PK FK relation to compare based on this & filter data"
    // The model having this collectionName do not include anything special, its default mongodb id becomes userId
    // that can be fetched in other models as ref
	}
},
{timestamps: true}
)

const ModelNameInPascalCase = mongoose.model("collectionNameInLowerCase", SchemaNameInPascalCase); // s auto added at name of collection in db
module.exports = ModelNameInPascalCase;`,
      },

      {
        cmdId: 6,
        cmdTitle:
          "jwtMiddleware.js - JWT middleware for handling authentication",
        cmdDescription:
          "This code snippet is an example for handling authentication that only logged in users with generated JWT tokens can access the data. The data is further filtered based on userId that was used as req.primaryKey.id in ref of MongoDB models.",
        cmdCategory: "Express MongoDB",
        cmd: `const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = jwtMiddleware;`,
      },

      {
        cmdId: 7,
        cmdTitle: "routes.js - Routing in MongoDB database",
        cmdDescription:
          "This code snippet is an example for creating routes/API end points.",
        cmdCategory: "Express MongoDB",
        cmd: `import express from "express";
import { getAll, getOneBasedOnId, updateOneBasedOnId, deleteOneBasedOnId } from "../controller/controllerName.js";
import { jwtMiddleware } from "../middleware/jwtMiddleware.js";

const router = express.Router();
router.get("/getAll", jwtMiddleware, getAll);
router.get("/getAll/:id", jwtMiddleware, getOneBasedOnId);
router.post("/create", createOne);
router.put("/update/:id", jwtMiddleware, updateOneBasedOnId);
router.delete("/delete/:id", jwtMiddleware, deleteOneBasedOnId);

export default router;`,
      },

      {
        cmdId: 8,
        cmdTitle: "controller.js - Controllers in MongoDB",
        cmdDescription:
          "This code snippet is an example for creating CRUD controllers in MongoDB database.",
        cmdCategory: "Express MongoDB",
        cmd: `import ModelName from "../models/ModelName";

const getAll = async (req, res) => {
  try {
    const data = await ModelName.find();
    if (data.length === 0) {
      return res.status(200).json({ error: "data not found" });
    }
      // filter based on user id here if needed as req.user.id === item.userid
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getOneBasedOnId = async (req, res) => {
  try {
    const data = await ModelName.findById(req.params.id);
    if (!data) {
      return res.status(200).json({ error: "data not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  try {
    const {key1, key2, key3} = req.body; // can be multiple keys as per schema
    if(!key1 || !key2 || !key3)
    {
      return res.status(404).json({ message: "key not found" });
    }
     
    const newItem = new ModelName({key1, key2, key3, userId: req.user.id}); 
    // user is taken from jwt middleware to store here so that data can be filtered w.r.t. each user
    await newItem.save();
    return res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateOneBasedOnId = async (req, res) => {
  try {
    const data = await ModelName.findById(req.params.id);
    if (!data) {
      return res.status(200).json({ error: "data not found" });
    }
    
    const updatedData = await ModelName.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    );

    return res.status(200).json({ message: "update successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteOneBasedOnId = async (req, res) => {
  try {
    const data = await ModelName.findById(req.params.id);
    if (!data) {
      return res.status(200).json({ error: "data not found" });
    }

    await data.deleteOne();
    return res.status(200).json({ message: "delete successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {getAll, getOneBasedOnId, createOne, updateOneBasedOnId, deleteOneBasedOnId};`,
      },

      {
        cmdId: 9,
        cmdTitle: "Install packages",
        cmdDescription:
          "The packages listed are used to develop express postgres application.",
        cmdCategory: "Express PostgreSQL",
        cmd: "npm i nodemon express sequelize pg pg-hstore cors dotenv",
      },

      {
        cmdId: 10,
        cmdTitle:
          "index.js - Expressjs server connection and routes setup (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for setting up express app having postgres database connection and routes middleware.",
        cmdCategory: "Express PostgreSQL",
        cmd: `import "dotenv/config";
import express from "express";
import cors from "cors";

import { connection } from "./postgres/connection.js";
import router from "./view/routes.js";

const app = express();
app.use(express.json()); // for post api to work
app.use(cors()); // for frontend integration to work

// Middleware
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(\`Server started running on port \${PORT}\`);
});

connection();`,
      },

      {
        cmdId: 11,
        cmdTitle:
          "connection.js - Postgres database connection and model creation (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for connecting Node.js with Postgres database and models creation.",
        cmdCategory: "Express PostgreSQL",
        cmd: `import "dotenv/config";
import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";

// use your database name, username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres", // chosen from all available databases
  },
);

let UserModel = null;

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Models creation
    UserModel = await createUserModel(sequelize); // stores return value of model creation
    await sequelize.sync();
    console.log("User table created, db synced");

    // table is created in default public schema of our selected database
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection, UserModel };`,
      },

      {
        cmdId: 12,
        cmdTitle:
          "model.js - Postgres schema/table/model creation (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for creating a table using schema/model in Postgres database.",
        cmdCategory: "Express PostgreSQL",
        cmd: `import { DataTypes } from "sequelize";
export const createUserModel = async (sequelize) => {
  // this sequelize is connection function
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isLowecase: true,
      unique: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  // auto creates id, createdAt and updatedAt entities
  return User;
};`,
      },

      {
        cmdId: 13,
        cmdTitle:
          "routes.js - Routing in Postgres database same as mongodb (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for creating routes/API end points.",
        cmdCategory: "Express PostgreSQL",
        cmd: `import express from "express";
import { getAllEmp, addEmp, updateEmp, deleteEmp } from "../controller/userController.js";

const router = express.Router();
router.get("/getAll", getAllEmp);
router.post("/addEmp", addEmp);
router.put("/emp/:empId", updateEmp);
router.delete("/emp/:empId", deleteEmp);

export default router;`,
      },

      {
        cmdId: 14,
        cmdTitle:
          "controller.js - Controllers in Postgres database mostly same as mongodb (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for creating CRUD controllers in Postgres database.",
        cmdCategory: "Express PostgreSQL",
        cmd: `import { UserModel } from "../postgres/connection.js";

export const getAllEmp = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    if (users.length === 0) {
      return res.status(200).json({ error: "users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const addEmp = async (req, res) => {
  const { empId } = req.body;
  try {
    const emp = await UserModel.findOne({ where: { empId: empId } });
    if (emp === null) {
      await UserModel.create(req.body);
      return res.status(201).json({ message: "employee added successfully" });
    }
    return res.status(200).json({ message: "already found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateEmp = async (req, res) => {
  let empId = req.params.empId;

  try {
    const emp = await UserModel.findOne({ where: { empId: empId } });
    if (emp === null) {
      return res.status(404).json({ message: "employee not found" });
    }
    await UserModel.update(req.body, { where: { empId: empId } });
    return res.status(200).json({ message: "update successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEmp = async (req, res) => {
  let empId = req.params.empId;

  try {
    const emp = await UserModel.findOne({ where: { empId: empId } });
    if (emp === null) {
      return res.status(404).json({ message: "employee not found" });
    }
    await emp.destroy();
    return res.status(200).json({ message: "delete successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};`,
      },
    ],
  },

  // -----------------------------

  // Redis
  {
    techRoute: "/redis",
    techName: "Redis",
    techIcon: DiRedis,
    techDescription:
      "Redis is in-memory database i.e. used for caching out information.",
    techCategory: "Web Development",
    commands: [
      // Installation
      {
        cmdId: 1,
        cmdTitle: "Install Redis Stack via Docker",
        cmdDescription:
          "It installs Redis Stack through docker as an image. Docker must be installed in the system to use this.",
        cmdCategory: "Installation",
        cmd: "docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest",
      },

      // Redis CLI
      {
        cmdId: 2,
        cmdTitle: "To start Redis server",
        cmdDescription:
          "It start the Redis server in docker. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "docker start redis-stack-server",
      },

      {
        cmdId: 3,
        cmdTitle: "To use Redis CLI",
        cmdDescription:
          "It opens Redis CLI in terminal (in interactive mode) to use Redis commands. It shows 127.0.0.1:6379> which means entered into redis-cli. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "docker exec -it redis-stack-server redis-cli",
      },

      {
        cmdId: 4,
        cmdTitle: "To check Redis CLI working or not",
        cmdDescription:
          "It is used to check redis-cli working or not. It displays PONG as a result. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "PING",
      },

      {
        cmdId: 5,
        cmdTitle: "To check Redis server information",
        cmdDescription:
          "It is used to check Redis server information. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "INFO",
      },

      {
        cmdId: 6,
        cmdTitle: "To store a key value pair",
        cmdDescription:
          "It is used to store a key value pair in Redis database. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "SET key value",
      },

      {
        cmdId: 7,
        cmdTitle: "To store a key value pair",
        cmdDescription:
          "It is used to store a key value pair in Redis database that automatically deletes after certain time. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "SETEX key TTLinSeconds value",
      },

      {
        cmdId: 8,
        cmdTitle: "To view a value based on key",
        cmdDescription:
          "It is used to retrieve a value based on key from Redis database. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "GET key",
      },

      {
        cmdId: 9,
        cmdTitle: "To delete a key value pair",
        cmdDescription:
          "It is used to delete a key value pair from Redis database. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "DEL key",
      },

      {
        cmdId: 10,
        cmdTitle: "To see all stored keys",
        cmdDescription:
          "It is used to view all keys stored in Redis database. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "KEYS *",
      },

      {
        cmdId: 11,
        cmdTitle: "To store item in list from left side (as Queue)",
        cmdDescription:
          "It is used store an item in Redis database from left side. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "LPUSH key value",
      },

      {
        cmdId: 12,
        cmdTitle: "To store item in list from right side (as Queue)",
        cmdDescription:
          "It is used store an item in Redis database from right side. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "RPUSH key value",
      },

      {
        cmdId: 13,
        cmdTitle: "To delete an item from list from left side (as Queue)",
        cmdDescription:
          "It is used to delete an item from Redis database from left side. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "LPOP key value",
      },

      {
        cmdId: 14,
        cmdTitle: "To delete an item from list from right side (as Queue)",
        cmdDescription:
          "It is used to delete an item from Redis database from right side. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "RPOP key value",
      },

      {
        cmdId: 15,
        cmdTitle: "To view length of stored list (as Queue)",
        cmdDescription:
          "It is used to view length of list stored in Redis database. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "LLEN key",
      },

      {
        cmdId: 16,
        cmdTitle: "To store an item in hashmap/dictionary (as Hashmap)",
        cmdDescription:
          "It is used to store items as hashmap/dictionary in Redis database e.g. HSET user:1 name Rakesh age 30 city Mumbai. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "HSET key:value key value",
      },

      {
        cmdId: 17,
        cmdTitle: "To view full data of hashmap/dictionary (as Hashmap)",
        cmdDescription:
          "It is used to view full data of stored hashmap/dictionary in Redis database e.g. HGETALL user:1. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "HGETALL key:value",
      },

      {
        cmdId: 18,
        cmdTitle: "To view specific data of hashmap/dictionary (as Hashmap)",
        cmdDescription:
          "It is used to view specific data of stored hashmap/dictionary in Redis database e.g. HGETALL user:1 name. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "HGET key:value key",
      },

      {
        cmdId: 19,
        cmdTitle: "To exit from Redis CLI",
        cmdDescription:
          "It is used to exit Redis CLI after usage. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "exit",
      },

      {
        cmdId: 20,
        cmdTitle: "To stop Redis server",
        cmdDescription:
          "It stops the Redis server in docker. Make sure docker desktop is opened.",
        cmdCategory: "Redis CLI",
        cmd: "docker stop redis-stack-server",
      },

      // Redis and Node.js
      {
        cmdId: 21,
        cmdTitle: "To install Redis in Node.js",
        cmdDescription: "It installs Redis library in Node.js.",
        cmdCategory: "Redis and Node.js",
        cmd: "npm i redis",
      },

      {
        cmdId: 22,
        cmdTitle: "To configure Redis (Redis Node.js Project, controller.js)",
        cmdDescription: "It configures Redis as a client.",
        cmdCategory: "Redis and Node.js",
        cmd: `import { createClient } from "redis"
const client = await createClient().on("error", (err)=>console.log(err)).connect();
// default connect to post 6379 of localhost else pass url`,
      },

      {
        cmdId: 23,
        cmdTitle:
          "To configure url key caching logic (Redis Node.js Project, controller.js)",
        cmdDescription:
          "It converts API/url to redis caching format. Key naming convention e.g. /api/products = api:products, /api/products/123 = api:products:123, api/products?category=Laptops = api:products:category=Laptops",
        cmdCategory: "Redis and Node.js",
        cmd: `function generateCacheKey (req) \{
const baseUrl = req.path.replace(/^\\/+|\\/+$/g, '').replace(/\\//g, ':');
// using regex to replace / or \\ by :
const params = req.query;

const sortedParams = Object.keys(params)
.sort() // to sort query params for keeping key consistency if params order change
.map((key)=>\`\${params[key]}\`) // to map in our format
.join('&'); // to finally join in our format

return sortedParams ? \`\${baseUrl}:\${sortedParams}\` : baseUrl;
\}`,
      },

      {
        cmdId: 24,
        cmdTitle:
          "To configure caching at GET API (Redis Node.js Project, controller.js)",
        cmdDescription:
          "It configures caching in GET api/controller so that next time cache will be directly used.",
        cmdCategory: "Redis and Node.js",
        cmd: `const getFunction = async (req, res) => {
	const key = generateCacheKey(req);
	
	// Checking if cached data found or not
	const cachedData = await client.get(key);
	if (cachedData) {
		console.log("Cache hit");
		return res.json(JSON.parse(cachedData));
	}
	
	// Caching if data not available
	console.log("Cache miss");
	const items = ModelName.find();
	await client.set(key, JSON.stringify(items));
	// value is our desirable array of objects
  // res.json code
}`,
      },

      {
        cmdId: 25,
        cmdTitle:
          "To handle cache invalidation by configuring eviction policies Redis CLI (Redis Node.js Project, controller.js)",
        cmdDescription:
          "It configures least recently and least frequently used eviction policies for following Immediate invalidation of outdated cache i.e. most frequently used in REST APIs..",
        cmdCategory: "Redis and Node.js",
        cmd: "CONFIG SET maxmemory sizeInMb\nCONFIG SET maxmemory-policy allkeys-lru\nCONFIG SET maxmemory-policy allkeys-lfu",
      },

      {
        cmdId: 26,
        cmdTitle:
          "To handle cache invalidation at POST API after configuring policies in Redis CLI (Redis Node.js Project, controller.js)",
        cmdDescription:
          "It handles cache invalidation to delete outdated cached data in UPDATE/PUT api/controller so that next time fresh caching will be done in GET api call.",
        cmdCategory: "Redis and Node.js",
        cmd: `const updateFunction = async (req, res) => {
	const listCachedKey = 'api:name*'; // e.g. api:products 
	const keys = await client.keys(listCachedKey);
	if (keys.length>0) await client.del(keys);
	// res.json code
}`,
      },
    ],
  },

  // -----------------------------

  // C++
  {
    techRoute: "/cpp",
    techName: "C++",
    techIcon: SiCplusplus,
    techDescription:
      "C++ is a high level compiler-based programming language. It is widely used for its fast operation in sofwtare development.",
    techCategory: "Programming Language",
    commands: [
      // Syntax
      {
        cmdId: 1,
        cmdTitle: "C++ Program Structure",
        cmdDescription: "It is the basic layout of C++ program.",
        cmdCategory: "Program Structure",
        cmd: `#include <iostream>
using namespace std;

int main()
{
   cout << "Welcome" << endl;
   return 0;
}`,
      },

      // Datatypes & Variables
      {
        cmdId: 2,
        cmdTitle: "Variables",
        cmdDescription:
          "A lot of datatypes are available in C++ which are described as follows.",
        cmdCategory: "Datatypes & Variables",
        cmd: `// Datatypes: int, float, double, char, bool, derived (pointer, reference, array) and user-defined (enum, typedef, union, structure, class)
// Variable Naming Convention: only use lowercase/uppercase alphabets and numbers (not in 1st position) separated by _
#include <iostream>
using namespace std;

int main()
{
   int x = 5;
   float y = 5.0f;
   double z = 12.12;
   char letter = 'A';
   bool yes = true; bool no = false;
   int *ptr = x; // datatype of pointer is same as the variable to which it points
   int &ref = x; // x and ref are alias now
   int arrayName[size] = {elements};

   return 0;
}`,
      },

      // Operators
      {
        cmdId: 3,
        cmdTitle: "Operators",
        cmdDescription:
          "A lot of operators are available in C++ which are described as follows.",
        cmdCategory: "Operators",
        cmd: `ARITHMETIC: +, -, *, /, %
ASSIGNMENT: =
COMPOUNT ASSIGNMENT: +=, -=, *=, /=, %=
INCREMENT: post: varName++, pre: ++varName
DECREMENT: post: varName--, pre: --varName
BITWISE: &, |, ~, ^, <<, >>
LOGICAL: &&, ||, !`,
      },

      // Conditional Statements
      {
        cmdId: 4,
        cmdTitle: "if else Conditional Statements",
        cmdDescription:
          "Conditional statements, if, else if and else can be used to execute a block of code based on a condition.",
        cmdCategory: "Conditional Statements",
        cmd: `if (condition1)
{
    // execute code if condition1 is true
}
else if (condition2) 
{
    // execute code if condition2 is true
}
else
{
    // execute code if all conditions are false
}`,
      },

      {
        cmdId: 5,
        cmdTitle: "switch case Conditional Statements",
        cmdDescription:
          "Conditional statements, switch case can be used to execute a block of code based on a case value obtained after processing an expression.",
        cmdCategory: "Conditional Statements",
        cmd: `switch (expressionToGiveResult)
{
    case value1:
    {
        // Execute if expression gives result = value 1
        break; // must break else multiple cases will execute
    }
    default:
    {
        // Execute if result of expression do not matches with any value
        break; // must break else multiple cases will execute if it is provided at middle or top of code
    } 
} `,
      },

      // Loops
      {
        cmdId: 6,
        cmdTitle: "for Loop (Itreative)",
        cmdDescription:
          "for loop is used when the count of number of times loop will be executing is known beforehand.",
        cmdCategory: "Loops",
        cmd: `for(declaration, condition, updation)
{
    // Code to execute in each loop 
}
    
// declaration: using a variable that will update its value after each execution of loop
// condition: upto when loop will execute, i.e., the failure condition
// updation: what wll be the value of declared variable when execution ends each time, if not given loop runs infinitely
// Example

for(int i=0; i<5; i++) 
{
  cout << i;
}`,
      },

      {
        cmdId: 7,
        cmdTitle: "while Loop (Non-Itreative)",
        cmdDescription:
          "while loop is used when the execution is not certain like count of steps is not known.",
        cmdCategory: "Loops",
        cmd: `while(condition)
{
    // Code to execute in each loop 
    // updation : update variable manually not in loop syntax but here
}

// Example
int i=0;
while(i<5) 
{
  cout << i;
  i++;
}`,
      },

      {
        cmdId: 8,
        cmdTitle: "for each Loop (Itreative)",
        cmdDescription:
          "for each loop is used when the datatype about elements being iterated is not known.",
        cmdCategory: "Loops",
        cmd: `// Example: given an array A, of unknown datatype
for(auto x:A) // x:A means for all x in array A
{
    cout << x; 
}`,
      },

      {
        cmdId: 9,
        cmdTitle: "do while Loop (Non-Itreative)",
        cmdDescription:
          "do while loop is used when the execution count is not certain as well as we want to perform 1 step before loop condition is checked.",
        cmdCategory: "Loops",
        cmd: `do
{
    // Task to do in each loop, executed 1 times extra then condition checking is done
}
while (condition);`,
      },

      // Functions
      {
        cmdId: 10,
        cmdTitle: "Functions",
        cmdDescription:
          "Functions are reusable piece of code that can be executed/called again in the time of need.",
        cmdCategory: "Functions",
        cmd: `returnType fnName (paramsList)
{
    // reusable code
    return ans; // This value must be of same datatype as return type, void functions return nothing
}

// Return type can be void, int, float, bool, double, pointer, custom datatype like class & object, etc.

fnName(argumentList);`,
      },

      // OOPS C++ Class
      {
        cmdId: 11,
        cmdTitle: "Classes layout",
        cmdDescription:
          "Classes are user-defined datatypes that are used in object orientation in OOPS.",
        cmdCategory: "OOPS",
        cmd: `class NameOfClassInPascalCase
{
private:
    // data members e.g.
    int dataMemberName;
public:
  // Constructors (same name as class)
  ClassName(); // Non-parameterized constructor
  ClassName(paramsList); // Parameterized constructor        
  ClassName(otherClassAsReferenceParam); // Non-parameterized constructor 
  
  // Accessors & Mutators
  returnType getDataMemberName() return dataMemberName; // To access private elements
  void setDataMemberName(newValue) return dataMemberName = newValue; // To modify public elements

  // Facilitators
  returnType fnName(paramsList); // Actual function to perform operations on data

  // Inspectors
  bool isConditionTrue(); // to check given condition true or not

  // Destructors
  ~ClassName();
};`,
      },
    ],
  },

  // -----------------------------

  // JavaScript
  {
    techRoute: "/javascript",
    techName: "JavaScript",
    techIcon: BsJavascript,
    techDescription:
      "JavaScript is a high level interpreter-based programming language. It is widely used in website development.",
    techCategory: "Programming Language",
    commands: [
      // Datatypes & Variables
      {
        cmdId: 1,
        cmdTitle: "Variables",
        cmdDescription:
          "A lot of datatypes are available in JavaScript which are described as follows.",
        cmdCategory: "Datatypes & Variables",
        cmd: `// Datatypes: string, number, Big int, boolean, undefined, null, symbol, array and objects
// Variable Naming Convention: only use lowercase/uppercase alphabets and numbers (not in 1st position) separated by _

var/const/let varName = value; // datatype auto-decided by value, var/let/const used w.r.t. diff. scopes and constraints

// e.g.
var myObject = {
    key1: 0, // numerical value
    key2: "string value",
}

`,
      },

      // Operators
      {
        cmdId: 2,
        cmdTitle: "Operators",
        cmdDescription:
          "A lot of operators are available in JavaScript which are described as follows.",
        cmdCategory: "Operators",
        cmd: `ARITHMETIC: +, -, *, /, %
ASSIGNMENT: =, +=, -=, *=, /=, %=
COMPARISON: >, <, >=, <=, ==, === // === checks value and datatype both
LOGICAL: &&, ||, !
`,
      },

      // Conditional Statements
      {
        cmdId: 3,
        cmdTitle: "if else Conditional Statements",
        cmdDescription:
          "Conditional statements, if, else if and else can be used to execute a block of code based on a condition.",
        cmdCategory: "Conditional Statements",
        cmd: `if (condition1)
{
    // execute code if condition1 is true
}
else if (condition2) 
{
    // execute code if condition2 is true
}
else
{
    // execute code if all conditions are false
}`,
      },

      {
        cmdId: 4,
        cmdTitle: "switch case Conditional Statements",
        cmdDescription:
          "Conditional statements, switch case can be used to execute a block of code based on a case value obtained after processing an expression.",
        cmdCategory: "Conditional Statements",
        cmd: `switch (expressionToGiveResult)
{
    case value1:
    {
        // Execute if expression gives result = value 1
        break; // must break else multiple cases will execute
    }
    default:
    {
        // Execute if result of expression do not matches with any value
        break; // must break else multiple cases will execute if it is provided at middle or top of code
    } 
} `,
      },

      // Loops
      {
        cmdId: 5,
        cmdTitle: "Map",
        cmdDescription:
          "Map is used to iterate over array to access data of array in new array without disturbing actual array.",
        cmdCategory: "Loops",
        cmd: `arrayName.map((item)=>
//what to do in map like console.log(item), or item.json(), etc.
)`,
      },

      {
        cmdId: 6,
        cmdTitle: "Filter",
        cmdDescription:
          "Filter is used to filter an array by providing a filter condition. It is usually not used to access elements but a seaprate map is used to show filtered elements.",
        cmdCategory: "Loops",
        cmd: `arrayName.filter((item)=> filterCondition
//what to filter like item.key === "desirable value"
)`,
      },

      // Functions
      {
        cmdId: 7,
        cmdTitle: "General Functions",
        cmdDescription:
          "Functions are reusable piece of code that can be executed/called again in the time of need.",
        cmdCategory: "Functions",
        cmd: `function fnName (paramsList)
{
    // reusable code
    return ans;
}

fnName(argumentList);`,
      },

      {
        cmdId: 8,
        cmdTitle: "Arrow Functions",
        cmdDescription:
          "Arrow functions are modern syntax based functions of JavaScript, introduced in ES6 version.",
        cmdCategory: "Functions",
        cmd: `const fnName = (paramsList) =>
{
    // reusable code
    return ans;
}

fnName(argumentList);`,
      },

      {
        cmdId: 9,
        cmdTitle: "Fetch API",
        cmdDescription:
          "Asynchronous promises can be made using async await and fetch API in order to deal the processing later on without disturbing other functionalities of the website.",
        cmdCategory: "Asynchronous Js",
        cmd: `const fetchData = async () => {
await fetch("API url")
.then((rawData) => rawData.json())     
.then((finalData) => console.log(finalData))
}

fetchData(); // call whenever needed
`,
      },
    ],
  },

  // -----------------------------

  // My SQL
  {
    techRoute: "/mysql",
    techName: "MySQL",
    techIcon: SiMysql,
    techDescription:
      "SQL is a programming language used for databases. MySQL is a software that creates databases based on SQL queries.",
    techCategory: "Programming Language",
    commands: [
      // Installation
      {
        cmdId: 1,
        cmdTitle: "Update packages in Linux",
        cmdDescription:
          "It updates the built-in packages (pc password needed).",
        cmdCategory: "Installation",
        cmd: "sudo apt update",
      },

      {
        cmdId: 2,
        cmdTitle: "Install MySQL server (Linux)",
        cmdDescription:
          "It installs the MySQL server i.e. used for CLI based SQL queries.",
        cmdCategory: "Installation",
        cmd: "sudo apt install mysql-server",
      },

      {
        cmdId: 3,
        cmdTitle: "Check status of MySQL server",
        cmdDescription:
          "It checks status of MySQL Server whether active or needs to enable.",
        cmdCategory: "Installation",
        cmd: "sudo systemctl status mysql",
      },

      {
        cmdId: 4,
        cmdTitle: "Enable MySQL server",
        cmdDescription: "It activates/enables MySQL server.",
        cmdCategory: "Installation",
        cmd: "sudo systemctl enable mysql",
      },

      {
        cmdId: 5,
        cmdTitle: "Install MySQL workbench (Linux)",
        cmdDescription:
          "It installs MySQL workbench i.e. a GUI based SQL code editor for visualization.",
        cmdCategory: "Installation",
        cmd: "sudo snap install mysql-workbench-community",
      },

      // Configuration
      {
        cmdId: 6,
        cmdTitle: "Initialize configuration (one time only)",
        cmdDescription:
          "It initializes MySQL server configuration. Press n in every question asked accept Reload privilage tables now, there press y and Enter.",
        cmdCategory: "Configuration",
        cmd: "sudo mysql_secure_installation",
      },

      {
        cmdId: 7,
        cmdTitle: "Open MySQL server in CLI (before password configuration)",
        cmdDescription:
          "It opens an instance of MySQL server in CLI (without password in 1st time so we can configure). Type exit; to exit the MySQL server instance in CLI.",
        cmdCategory: "Configuration",
        cmd: "sudo mysql",
      },

      {
        cmdId: 8,
        cmdTitle: "Change MySQL server password (one time only)",
        cmdDescription: "SQL command to set password for the first time.",
        cmdCategory: "Configuration",
        cmd: "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new_password';",
      },

      {
        cmdId: 9,
        cmdTitle: "Open MySQL server in CLI (after password configuration)",
        cmdDescription:
          "It opens an instance of MySQL server in CLI. Type exit; to exit the MySQL server instance in CLI (MySQL root password needed). Use as usual SQL from CLI.",
        cmdCategory: "Configuration",
        cmd: "sudo mysql -u root -p",
      },

      // Database
      {
        cmdId: 10,
        cmdTitle: "To create a new database",
        cmdDescription:
          "It creates a new database that can be accessed from any SQL file within that connection.",
        cmdCategory: "Database",
        cmd: "CREATE DATABASE dbName;",
      },

      {
        cmdId: 11,
        cmdTitle: "To permanently delete database",
        cmdDescription: "It permanently deletes the database.",
        cmdCategory: "Database",
        cmd: "DROP DATABASE dbName;",
      },

      {
        cmdId: 12,
        cmdTitle: "To view all databases",
        cmdDescription:
          "Displays all the databases including default of databases of SQL.",
        cmdCategory: "Database",
        cmd: "SHOW DATABASES;",
      },

      {
        cmdId: 13,
        cmdTitle: "To select a database for use",
        cmdDescription:
          "Selects a database to use in all queries in all files for the root connection.",
        cmdCategory: "Database",
        cmd: "USE dbName;",
      },

      // Table
      {
        cmdId: 14,
        cmdTitle: "To create a table in selected database",
        cmdDescription:
          "Creates a table in the selected database by USE dbName; For many columns, they are separated by , except last column in the schema.",
        cmdCategory: "Table",
        cmd: "CREATE TABLE tableName(colName datatype constraint);",
      },

      {
        cmdId: 15,
        cmdTitle: "To permanently delete table",
        cmdDescription: "It permanently deletes the table.",
        cmdCategory: "Table",
        cmd: "DROP TABLE tableName;",
      },

      {
        cmdId: 16,
        cmdTitle: "To insert data into table of selected database",
        cmdDescription:
          "It inserts data in table, use NULL if no values to insert in that place. Column names list need not to be same as schema but values inserted based on this list only.",
        cmdCategory: "Table",
        cmd: "INSERT INTO tableName\n(col1Name, col2Name) VALUES\n(row1),\n(row2);",
      },

      {
        cmdId: 17,
        cmdTitle: "To view all tables of selected database",
        cmdDescription: "Displays all the tables of selected databases.",
        cmdCategory: "Table",
        cmd: "SHOW TABLES;",
      },

      {
        cmdId: 18,
        cmdTitle: "To view full table",
        cmdDescription: "Displays all the rows and columns of a table.",
        cmdCategory: "Table",
        cmd: "SELECT * FROM tableName;",
      },

      {
        cmdId: 19,
        cmdTitle: "To view selected columns of table",
        cmdDescription: "Displays all the rows of selected columns of a table.",
        cmdCategory: "Table",
        cmd: "SELECT colNames FROM tableName;",
      },

      {
        cmdId: 20,
        cmdTitle: "To allow updation/deletion in table",
        cmdDescription:
          "Disables safe update mode to allow updation/deletion in the database.",
        cmdCategory: "Table",
        cmd: "SET SQL_SAFE_UPDATES=0;",
      },

      {
        cmdId: 21,
        cmdTitle: "To update data in table",
        cmdDescription:
          "Updates value of an item in the table. Row is selected by WHERE condition and item to update by colName.",
        cmdCategory: "Table",
        cmd: "UPDATE tableName SET colName=newValue WHERE condition;",
      },

      {
        cmdId: 22,
        cmdTitle: "To delete data in table",
        cmdDescription:
          "Deletes value of an item in the table w.r.t. WHERE condition to select rows to delete.",
        cmdCategory: "Table",
        cmd: "DELETE FROM tableName WHERE condition;",
      },

      {
        cmdId: 23,
        cmdTitle: "To delete full table",
        cmdDescription: "It deletes full table like DROP TABLE tableName.",
        cmdCategory: "Table",
        cmd: "DELETE FROM tableName;",
      },

      {
        cmdId: 24,
        cmdTitle: "To delete only data of table",
        cmdDescription:
          "It deletes only the data of table not the table itself.",
        cmdCategory: "Table",
        cmd: "TRUNCATE TABLE tableName;",
      },

      {
        cmdId: 25,
        cmdTitle: "To add column in table schema",
        cmdDescription:
          "It is used to add a column in schema after creation of table.",
        cmdCategory: "Table",
        cmd: "ALTER TABLE tableName ADD COLUMN colName datatype constraint;",
      },

      {
        cmdId: 26,
        cmdTitle: "To delete a column in a table",
        cmdDescription: "It is used to delete a column in table.",
        cmdCategory: "Table",
        cmd: "ALTER TABLE tableName DROP COLUMN colName;",
      },

      {
        cmdId: 27,
        cmdTitle: "To rename table name",
        cmdDescription: "It is used to rename the table.",
        cmdCategory: "Table",
        cmd: "ALTER TABLE tableName RENAME TO newTableName;",
      },

      {
        cmdId: 28,
        cmdTitle: "To rename column and its datatype",
        cmdDescription:
          "It is used to rename the column name and its datatype. Constraint is optional rest mandatory even if datatype change not needed, write previous datatype.",
        cmdCategory: "Table",
        cmd: "ALTER TABLE tableName CHANGE COLUMN oldColName newColName datatype constraint;",
      },

      {
        cmdId: 29,
        cmdTitle: "To modify column's datatype and constraint",
        cmdDescription:
          "It is used to modify the datatype and constraint of a column.",
        cmdCategory: "Table",
        cmd: "ALTER TABLE tableName MODIFY colName newDatatype newConstraint;",
      },

      {
        cmdId: 30,
        cmdTitle: "To grant privilages to a table",
        cmdDescription:
          "It is used to grant access rights/privilages to a table. It can be for different operations such as SELECT/INSERT/etc.",
        cmdCategory: "Table",
        cmd: "GRANT operation ON tableName TO PUBLIC;",
      },

      {
        cmdId: 31,
        cmdTitle: "To revoke privilages from a table",
        cmdDescription:
          "It is used to revoke access rights/privilages from a table. It can be for different operations such as SELECT/INSERT/etc.",
        cmdCategory: "Table",
        cmd: "REVOKE operation ON tableName FROM PUBLIC;",
      },

      // Constraints
      {
        cmdId: 32,
        cmdTitle: "Do not accept NULL values for a column",
        cmdDescription:
          "It do not allows addition of NULL values for that column in the table. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "NOT NULL",
      },

      {
        cmdId: 33,
        cmdTitle: "Accept only unique values for a column",
        cmdDescription:
          "It only allows UNIQUE values for that column in the table. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "UNIQUE",
      },

      {
        cmdId: 34,
        cmdTitle: "Set 1 column as Primary Key",
        cmdDescription:
          "It makes a column as PRIMARY KEY in the table i.e. NOT NULL and UNIQUE. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "PRIMARY KEY",
      },

      {
        cmdId: 35,
        cmdTitle: "Set many columns as Primary Key",
        cmdDescription:
          "It makes group of columns to together act as PRIMARY KEY in the table. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "PRIMARY KEY (col1, col2);",
      },

      {
        cmdId: 36,
        cmdTitle: "Set 1 column as Foreign Key",
        cmdDescription:
          "It makes the column as Foreign Key for that table referencing to other table having the column as Primary Key. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "FOREIGN KEY (colNameOfFK) REFERENCES otherTableName (colNameOfPK)",
      },

      {
        cmdId: 37,
        cmdTitle: "Cascading Foreign Keys",
        cmdDescription:
          "It allows updation/deletion to be reflected on related table (having FK) from parent table (having PK). Used in schema.",
        cmdCategory: "Constraints",
        cmd: "ON UPDATE CASCADE ON DELETE CASCADE",
      },

      {
        cmdId: 38,
        cmdTitle: "Set default value of a column",
        cmdDescription:
          "It initializes a column as default values rather than NULL. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "DEFAULT",
      },

      {
        cmdId: 39,
        cmdTitle: "Indexing for fast data storage and retrieval",
        cmdDescription:
          "It allows quick storage and retrieval of data using indexing. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "INDEX",
      },

      {
        cmdId: 40,
        cmdTitle: "Insert after checking values",
        cmdDescription:
          "It inserts value only after checking the condition usually for the permissible range of values. Used in schema.",
        cmdCategory: "Constraints",
        cmd: "CHECK (condition)",
      },

      {
        cmdId: 41,
        cmdTitle: "Alternate syntax of constraint",
        cmdDescription:
          "It is used to apply constraint as a separate entity on a column.",
        cmdCategory: "Constraints",
        cmd: "CONSTRAINT constraintName constraintType (condition)",
      },

      // Clauses
      {
        cmdId: 42,
        cmdTitle: "Conditional creation of database/table",
        cmdDescription:
          "It only creates database/table if it does not exist already. It is used to avoid error while running many lines.",
        cmdCategory: "Clauses",
        cmd: "IF NOT EXISTS",
      },

      {
        cmdId: 43,
        cmdTitle: "Conditional deletion of database/table",
        cmdDescription:
          "It only deletes database/table if it exists. It is used to avoid error while running many lines.",
        cmdCategory: "Clauses",
        cmd: "IF EXISTS",
      },

      {
        cmdId: 44,
        cmdTitle: "To filter out specific rows based on condition",
        cmdDescription:
          "It is used to filter out specific rows from the table w.r.t. a condition.",
        cmdCategory: "Clauses",
        cmd: "WHERE condition",
      },

      {
        cmdId: 45,
        cmdTitle: "To display limited no. of rows",
        cmdDescription:
          "It is used to display only limited number of rows from the table.",
        cmdCategory: "Clauses",
        cmd: "LIMIT numberOfRows",
      },

      {
        cmdId: 46,
        cmdTitle: "To display limited no. of rows",
        cmdDescription:
          "It is used to display only limited number of rows from the table. e.g. FETCH FIRST n ROWS ONLY",
        cmdCategory: "Clauses",
        cmd: "FETCH numberOfRows",
      },

      {
        cmdId: 47,
        cmdTitle: "To display specific rows after limited no. of rows",
        cmdDescription:
          "It is used to display specific number of rows after limit.",
        cmdCategory: "Clauses",
        cmd: "OFFSET numberOfRowsToSkip LIMIT numberOfRowsToSee",
      },

      {
        cmdId: 48,
        cmdTitle: "To sort column data",
        cmdDescription:
          "It is used to sort the column both numerically as well as alphabetically either in ascending (default) or descending orders.",
        cmdCategory: "Clauses",
        cmd: "ORDER BY colName ASC/DESC",
      },

      {
        cmdId: 49,
        cmdTitle: "To group many rows into a category",
        cmdDescription:
          "It is used to group rows related by a data/single column value.",
        cmdCategory: "Clauses",
        cmd: "SELECT groupedColName FROM tableName GROUP BY groupedColName",
      },

      {
        cmdId: 50,
        cmdTitle: "To filter out specific gruped rows based on condition",
        cmdDescription:
          "It is used to filter out specific grouped rows from the table w.r.t. a condition. Used with GROUP BY clause.",
        cmdCategory: "Clauses",
        cmd: "HAVING condition",
      },

      // Operators
      {
        cmdId: 51,
        cmdTitle: "Arithmetic operators",
        cmdDescription:
          "It is used to perform arithmetic operation usually on a column.",
        cmdCategory: "Operators",
        cmd: "+ - * / %",
      },

      {
        cmdId: 52,
        cmdTitle: "Comparison operators",
        cmdDescription: "It is used to compare two items usually two columns.",
        cmdCategory: "Operators",
        cmd: "= != > >= < <=",
      },

      {
        cmdId: 53,
        cmdTitle: "Logical operators",
        cmdDescription:
          "It is used to perform logical operations usually to combine many conditions.",
        cmdCategory: "Operators",
        cmd: "AND OR NOT IN BETWEEN ALL LIKE ANY",
      },

      {
        cmdId: 54,
        cmdTitle: "Bitwise operators",
        cmdDescription:
          "It is used to perform bitwise logical operations on binary bits.",
        cmdCategory: "Operators",
        cmd: "& |",
      },

      {
        cmdId: 55,
        cmdTitle: "Aliasing operators",
        cmdDescription:
          "It is used to give alias/nickname to a column or item or using as smaller nickname in the same query.",
        cmdCategory: "Operators",
        cmd: "SELECT colName AS aliasName",
      },

      // Aggregate Functions
      {
        cmdId: 56,
        cmdTitle: "To count no. of items in a column",
        cmdDescription: "It is used to count number of data items of a column.",
        cmdCategory: "Aggregate Functions",
        cmd: "COUNT(colName)",
      },

      {
        cmdId: 57,
        cmdTitle: "To get maximum value of a column",
        cmdDescription: "It is used to get maximum of data items of a column.",
        cmdCategory: "Aggregate Functions",
        cmd: "MAX(colName)",
      },

      {
        cmdId: 58,
        cmdTitle: "To get minimum value of a column",
        cmdDescription: "It is used to get minimum of data items of a column.",
        cmdCategory: "Aggregate Functions",
        cmd: "MIN(colName)",
      },

      {
        cmdId: 59,
        cmdTitle: "To get average value of a column",
        cmdDescription: "It is used to get average of data items of a column.",
        cmdCategory: "Aggregate Functions",
        cmd: "AVG(colName)",
      },

      {
        cmdId: 60,
        cmdTitle: "To get sum of all values of a column",
        cmdDescription: "It is used to get sum of data items of a column.",
        cmdCategory: "Aggregate Functions",
        cmd: "SUM(colName)",
      },

      // Joins
      {
        cmdId: 61,
        cmdTitle: "Inner join",
        cmdDescription:
          "It is used to perform inner join on two tables to display overlapping data usually based on related columns in tables A and B.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM\ntableA\nINNER JOIN\ntableB\nON tableA.colName = tableB.colName",
      },

      {
        cmdId: 62,
        cmdTitle: "Left outer join",
        cmdDescription:
          "It is used to perform left outer join on two tables to display left table's full data usually based on related columns in tables A and B.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM\ntableA\nLEFT JOIN\ntableB\nON tableA.colName = tableB.colName",
      },

      {
        cmdId: 63,
        cmdTitle: "Right outer join",
        cmdDescription:
          "It is used to perform right outer join on two tables to display right table's full data usually based on related columns in tables A and B.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM\ntableA\nRIGHT JOIN\ntableB\nON tableA.colName = tableB.colName",
      },

      {
        cmdId: 64,
        cmdTitle: "Full join",
        cmdDescription:
          "It is used to perform full join on two tables to display full data combined usually based on related columns in tables A and B. It is performed indirectly by UNION of left and right joins.",
        cmdCategory: "Joins",
        cmd: "LeftJoinCode\nUNION\nRightJoinCode",
      },

      {
        cmdId: 65,
        cmdTitle: "Left exclusive join",
        cmdDescription:
          "It is used to perform left exclusive join on two tables to display only left table's data other than overlapping usually based on related columns in tables A and B. Overlapping data is filtered out by WHERE condition.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM\ntableA\nLEFT JOIN\ntableB\nON tableA.colName = tableB.colName WHERE tableB.PKcolName IS NULL",
      },

      {
        cmdId: 66,
        cmdTitle: "Right exclusive join",
        cmdDescription:
          "It is used to perform right exclusive join on two tables to display only right table's data other than overlapping data usually based on related columns in tables A and B. Overlapping data is filtered out by WHERE condition.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM\ntableA\nRIGHT JOIN\ntableB\nON tableA.colName = tableB.colName WHERE tableA.PKcolName IS NULL",
      },

      {
        cmdId: 67,
        cmdTitle: "Full exclusive join",
        cmdDescription:
          "It is used to perform full exclusive join on two tables to display only overlapping data. It is performed indirectly by UNION of left and right exclusive joins.",
        cmdCategory: "Joins",
        cmd: "LeftExclusiveJoinCode\nUNION\nRightExclusiveJoinCode",
      },

      {
        cmdId: 68,
        cmdTitle: "Self join",
        cmdDescription:
          "It is used to perform self join on single table acting as both tableA and tableB to display selective data usually based on related/required column. Alias is must here.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM\ntableName AS aliasAName\nJOIN\ntableName AS aliasBName\nON aliasAName.colName = aliasBName.colName",
      },

      {
        cmdId: 69,
        cmdTitle: "Union without duplicates",
        cmdDescription:
          "It is used to perform UNION operation on two tables having same selected columns, similar datatypes and same order of columns. It gives unique data and not duplicates especially overlapping data only once.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM tableAName\nUNION\nSELECT colNames FROM tableBName",
      },

      {
        cmdId: 70,
        cmdTitle: "Union with duplicates",
        cmdDescription:
          "It is used to perform UNION operation on two tables having same selected columns, similar datatypes and same order of columns. It gives duplicates.",
        cmdCategory: "Joins",
        cmd: "SELECT colNames FROM tableAName\nUNION ALL\nSELECT colNames FROM tableBName",
      },

      // Subqueries
      {
        cmdId: 71,
        cmdTitle: "WHERE subquery as logic",
        cmdDescription:
          "It is used after WHERE to act as a logic/answer to compare. For single result, usual operators can be used whereas for list of result, IN operator is used.",
        cmdCategory: "Subqueries",
        cmd: "SELECT colNames FROM tableName\nWHERE colToCompare operatorForComparison\n(subquery to return single/list result);",
      },

      {
        cmdId: 72,
        cmdTitle: "FROM subquery as table",
        cmdDescription:
          "It is used after FROM to act as a table. Alias is mandatory here to make it work.",
        cmdCategory: "Subqueries",
        cmd: "SELECT outputName\nFROM\n(subquery to select and get table) AS aliasName;",
      },

      {
        cmdId: 73,
        cmdTitle: "SELECT subquery as column",
        cmdDescription:
          "It is used after FROM to act as a column. Subquery should return only 1 column not many else it won't be compatible with other columns used with it.",
        cmdCategory: "Subqueries",
        cmd: "SELECT\n(subquery as 1 column only)\nFROM tableName;",
      },

      // Views
      {
        cmdId: 74,
        cmdTitle: "To create a view in selected database",
        cmdDescription:
          "Creates a view/virtual table in the selected database. AS is used to define condition for storing selective data in this view. Rest SELECT and other commands work same as table just give viewName instead of table name.",
        cmdCategory: "Views",
        cmd: "CREATE VIEW viewName AS SELECT colNames FROM tableName",
      },

      {
        cmdId: 75,
        cmdTitle: "To permanently delete view",
        cmdDescription: "It permanently deletes the view.",
        cmdCategory: "Views",
        cmd: "DROP VIEW viewName;",
      },
    ],
  },

  // -----------------------------

  // PostgreSQL
  {
    techRoute: "/postgresql",
    techName: "PostgreSQL",
    techIcon: BiLogoPostgresql,
    techDescription:
      "SQL is a programming language used for databases. PostgreSQL is a software that creates databases based on SQL queries.",
    techCategory: "Programming Language",
    commands: [
      // Installation
      {
        cmdId: 1,
        cmdTitle: "Install postgres & pgadmin (Linux, Method 1)",
        cmdDescription:
          "It install the postgres directly (pc password needed).",
        cmdCategory: "Installation",
        cmd: "sudo apt install postgres\nsudo apt install pgadmin",
      },

      {
        cmdId: 2,
        cmdTitle: "Install postgres (Linux, Method 2)",
        cmdDescription:
          "It install the postgres through a detailed script as per customization (pc password needed).",
        cmdCategory: "Installation",
        cmd: "cd Downloads\ntouch install-postgres.sh\n[copy paste script from website]\nchmod +x install-postgres.sh\n./install-postgres.sh",
      },

      {
        cmdId: 3,
        cmdTitle: "Install pgadmin (Linux, Method 2)",
        cmdDescription:
          "It install the postgres through a detailed script as per customization (pc password needed).",
        cmdCategory: "Installation",
        cmd: "cd Downloads\ntouch install-pgadmin.sh\n[copy paste script from website]\nchmod +x install-pgadmin.sh\n./install-pgadmin.sh",
      },

      // Configuration
      {
        cmdId: 4,
        cmdTitle: "Open postgres in CLI (before password configuration)",
        cmdDescription:
          "It initializes Postgres server configuration. It should display postgres@username:~$.",
        cmdCategory: "Configuration",
        cmd: "sudo -i -u postgres",
      },

      {
        cmdId: 5,
        cmdTitle: "Start connection in postgres CLI",
        cmdDescription:
          "It initializes Postgres connection. It should display postgres=#. Now SQL commands can be used. To exit, type exit; .",
        cmdCategory: "Configuration",
        cmd: "psql",
      },

      {
        cmdId: 6,
        cmdTitle: "To configure password",
        cmdDescription:
          "It configures password for a username set in pgadmin 4. Workflow: pgAdmin servers > register > server > name, hostname, address, password > CLI password set > pgAdmin save",
        cmdCategory: "Configuration",
        cmd: "\\password usernameFromPgadmin [enter] newPassword",
      },

      // Database
      {
        cmdId: 7,
        cmdTitle: "Open postgres in CLI",
        cmdDescription:
          "It initializes Postgres server configuration. It should display postgres@username:~$.",
        cmdCategory: "Database",
        cmd: "sudo -i -u postgres",
      },

      {
        cmdId: 8,
        cmdTitle: "Start connection in postgres CLI",
        cmdDescription:
          "It initializes Postgres connection. It should display postgres=#. Now SQL commands can be used. To exit, type exit; .",
        cmdCategory: "Database",
        cmd: "psql",
      },

      {
        cmdId: 9,
        cmdTitle: "To view databases in postgres CLI",
        cmdDescription:
          "It displays all the databases in the connection. Press q to exit.",
        cmdCategory: "Database",
        cmd: "\\l",
      },

      {
        cmdId: 10,
        cmdTitle: "To connect to a database in postgres CLI",
        cmdDescription:
          "It connects to a database/schema to create tables. Press \q to exit.",
        cmdCategory: "Database",
        cmd: "\\c dbName",
      },

      {
        cmdId: 11,
        cmdTitle: "To view tables in postgres CLI",
        cmdDescription: "It displays all the tables in the database/schema.",
        cmdCategory: "Database",
        cmd: "\\dt",
      },

      {
        cmdId: 12,
        cmdTitle: "To create a schema/database",
        cmdDescription:
          "It creates a schema/database in the current connection.",
        cmdCategory: "Database",
        cmd: "CREATE SCHEMA schemaName;",
      },

      {
        cmdId: 13,
        cmdTitle: "To use a schema/database",
        cmdDescription:
          "It uses a schema/database in the current connection to create tables in it.",
        cmdCategory: "Database",
        cmd: "SET search_path TO schemaName;",
      },

      // Extension Management
      {
        cmdId: 14,
        cmdTitle: "To create an extension",
        cmdDescription: "This command is used to create extension in Postgres.",
        cmdCategory: "Extension Management",
        cmd: "CREATE EXTENSION IF NOT EXISTS extensionName;",
      },

      {
        cmdId: 15,
        cmdTitle: "To view all extensions",
        cmdDescription: "This command is used to view all extensions Postgres.",
        cmdCategory: "Extension Management",
        cmd: "SELECT * FROM pg_available_extensions;",
      },

      // Differences from MySQL
      {
        cmdId: 16,
        cmdTitle: "Quotes",
        cmdDescription:
          "Here single quotes '' are used more frequently than double quotes.",
        cmdCategory: "Differences from MySQL",
        cmd: "' '",
      },

      {
        cmdId: 17,
        cmdTitle: "Datatypes",
        cmdDescription:
          "There are some extra datatypes that are used more frequently in Postgres.",
        cmdCategory: "Differences from MySQL",
        cmd: "TEXT, NULL",
      },

      {
        cmdId: 18,
        cmdTitle: "To add column in table",
        cmdDescription: "Here only ADD command is used instead of ADD COLUMN.",
        cmdCategory: "Differences from MySQL",
        cmd: "ALTER TABLE ableName ADD colName datatype constraint",
      },

      {
        cmdId: 19,
        cmdTitle: "To update datatype of a column in a table",
        cmdDescription:
          "Here ALTER COLUMN and TYPE commands are used instead of CHANGE or MODIFY.",
        cmdCategory: "Differences from MySQL",
        cmd: "ALTER TABLE ableName ALTER COLUMN colName TYPE newDatatype",
      },

      {
        cmdId: 20,
        cmdTitle: "To add foreign key in a table after its creation",
        cmdDescription:
          "This is an alternative syntax if FOREIGN KEY is not set in syntax while table creation.",
        cmdCategory: "Differences from MySQL",
        cmd: "ALTER TABLE ableName ADD FOREIGN KEY (colNameOfFK) REFERENCES otherTableName(colNameOfPK);",
      },

      {
        cmdId: 21,
        cmdTitle: "To check include or not condition",
        cmdDescription:
          "This is keyword used to check compare some set of values in a data with other string given.",
        cmdCategory: "Differences from MySQL",
        cmd: "LIKE '_____'",
      },

      {
        cmdId: 22,
        cmdTitle: "Full join keyword",
        cmdDescription:
          "There full join is directly used instead of indirect union logic.",
        cmdCategory: "Differences from MySQL",
        cmd: "FULL JOIN",
      },

      {
        cmdId: 23,
        cmdTitle: "To create a procedure function",
        cmdDescription:
          "This command is used to create a procedure function to use repeatable code.",
        cmdCategory: "Differences from MySQL",
        cmd: "CREATE PROCEDURE procedureName (param paramDatatype)\nLANGUAGE SQL AS\n$$\n[command which can use param];\n$$;",
      },

      {
        cmdId: 24,
        cmdTitle: "To call a procedure function",
        cmdDescription: "This command is used to call a procedure function.",
        cmdCategory: "Differences from MySQL",
        cmd: "CALL procedureName(arguments);",
      },

      {
        cmdId: 25,
        cmdTitle:
          "To first attach a trigger function so that trigger creation is allowed",
        cmdDescription:
          "This command is used to create a trigger function that can use trigger defined afterwards, it only runs when an event is associated with table.",
        cmdCategory: "Differences from MySQL",
        cmd: "CREATE OR REPLACE FUNCTION triggerFnName()\nRETURNS TRIGGER AS $triggerName$\nBEGIN\ntaskToDo\nEND;\n$triggerName$\nLANGUAGE plpgsql;",
      },

      {
        cmdId: 26,
        cmdTitle:
          "To create a trigger with a function already attached to call it",
        cmdDescription:
          "This command is used to create a trigger that can be executed by a function. Operation can be SELECT/INSERT/etc.",
        cmdCategory: "Differences from MySQL",
        cmd: "CREATE TRIGGER triggerName\nAFTER operation ON tableName\nFOR EACH ROW EXECUTE PROCEDURE triggerFnName();",
      },

      {
        cmdId: 27,
        cmdTitle: "Transaction management",
        cmdDescription:
          "The transaction commands are written in BEGIN END block where the transaction output can be Rollback to previous state or Committed finally or Aborted.",
        cmdCategory: "Differences from MySQL",
        cmd: "BEGIN;\noperation;\nROLLBACK/COMMIT/ABORT;",
      },
    ],
  },

  // -----------------------------

  // Linux
  {
    techRoute: "/linux",
    techName: "Linux",
    techIcon: FaLinux,
    techDescription:
      "Linux is an operating system that uses CLI for most of its task. The commands used here are valid for Ubuntu and other distributions as well.",
    techCategory: "Devops",
    commands: [
      // Shortcuts
      {
        cmdId: 1,
        cmdTitle: "Open terminal",
        cmdDescription:
          "It opens terminal from anywhere as root (Keyboard based).",
        cmdCategory: "Shortcuts",
        cmd: "Control Shift T",
      },

      {
        cmdId: 2,
        cmdTitle: "Copy",
        cmdDescription: "It copies selected text (Keyboard based).",
        cmdCategory: "Shortcuts",
        cmd: "Control Shift C",
      },

      {
        cmdId: 3,
        cmdTitle: "Paste",
        cmdDescription: "It pastes selected text (Keyboard based).",
        cmdCategory: "Shortcuts",
        cmd: "Control Shift V",
      },

      {
        cmdId: 4,
        cmdTitle: "Zoom in",
        cmdDescription: "It zoomes into CLI (Keyboard based).",
        cmdCategory: "Shortcuts",
        cmd: "Control Shift +",
      },

      {
        cmdId: 5,
        cmdTitle: "Zoom out",
        cmdDescription: "It zoomes out from CLI (Keyboard based).",
        cmdCategory: "Shortcuts",
        cmd: "Control Shift -",
      },

      // File Handling
      {
        cmdId: 6,
        cmdTitle: "List",
        cmdDescription: "Displays all items in current location.",
        cmdCategory: "File Handling",
        cmd: "ls",
      },

      {
        cmdId: 7,
        cmdTitle: "List including hidden",
        cmdDescription:
          "Displays all items in current location including hidden items.",
        cmdCategory: "File Handling",
        cmd: "ls -a",
      },

      {
        cmdId: 8,
        cmdTitle: "List recursively including children items",
        cmdDescription:
          "Displays all files and folders in current location as well as of children folders.",
        cmdCategory: "File Handling",
        cmd: "ls -R",
      },

      {
        cmdId: 9,
        cmdTitle: "Print/Present Working Directory",
        cmdDescription: "Displays current working directory.",
        cmdCategory: "File Handling",
        cmd: "pwd",
      },

      {
        cmdId: 10,
        cmdTitle: "Change Directory",
        cmdDescription: "It changes current location to pasted location.",
        cmdCategory: "File Handling",
        cmd: "cd 'path e.g. cd .. for backwards'",
      },

      {
        cmdId: 11,
        cmdTitle: "Make Directory",
        cmdDescription: "It creates a folder in current location.",
        cmdCategory: "File Handling",
        cmd: "mkdir 'folder name'",
      },

      {
        cmdId: 12,
        cmdTitle: "Remove Directory",
        cmdDescription: "It deletes the mentioned folder.",
        cmdCategory: "File Handling",
        cmd: "rmdir 'folder name'",
      },

      {
        cmdId: 13,
        cmdTitle: "Create file",
        cmdDescription: "It creates a file in current location.",
        cmdCategory: "File Handling",
        cmd: "touch 'file name.extension'",
      },

      {
        cmdId: 14,
        cmdTitle: "Move",
        cmdDescription:
          "It moves a file/folder from source to destination location.",
        cmdCategory: "File Handling",
        cmd: "mv 'source path' 'destination path'",
      },

      {
        cmdId: 15,
        cmdTitle: "Copy",
        cmdDescription:
          "It moves a file/folder from source to destination location.",
        cmdCategory: "File Handling",
        cmd: "cp 'source path' 'destination path'",
      },

      {
        cmdId: 16,
        cmdTitle: "Open a file in default text editor",
        cmdDescription: "It opens a file in default text editor i.e. notepad.",
        cmdCategory: "File Handling",
        cmd: "open filename.extension",
      },

      {
        cmdId: 17,
        cmdTitle: "Open a file in VS Code",
        cmdDescription: "It opens a file in VS Code.",
        cmdCategory: "File Handling",
        cmd: "code filename.extension",
      },

      // Permission Handling
      {
        cmdId: 18,
        cmdTitle: "List permissions",
        cmdDescription:
          "Displays R/W/X permissions as user/owner, group and others/public.",
        cmdCategory: "Permission Handling",
        cmd: "ls -l",
      },

      {
        cmdId: 19,
        cmdTitle: "Change ownership permissions",
        cmdDescription:
          "Changes ownership permissions based on 3 digit binary equivalent.",
        cmdCategory: "Permission Handling",
        cmd: "chmod 000 filename.extension",
      },

      {
        cmdId: 20,
        cmdTitle: "Change group permissions",
        cmdDescription:
          "Changes group permissions based on 3 digit binary equivalent.",
        cmdCategory: "Permission Handling",
        cmd: "chgrp 000 filename.extension",
      },

      // Terminal Handling
      {
        cmdId: 21,
        cmdTitle: "Clear the terminal",
        cmdDescription: "It clears the terminal to make it look clean.",
        cmdCategory: "Terminal Handling",
        cmd: "clear",
      },

      {
        cmdId: 22,
        cmdTitle: "History of recent commands",
        cmdDescription: "It gives history of commands used in that session.",
        cmdCategory: "Terminal Handling",
        cmd: "history",
      },

      {
        cmdId: 23,
        cmdTitle: "Printing text in terminal",
        cmdDescription: "It prints the text in terminal.",
        cmdCategory: "Terminal Handling",
        cmd: "echo text",
      },

      // OS Handling
      {
        cmdId: 24,
        cmdTitle: "Current running processes",
        cmdDescription:
          "Displays all currently running processes (Press Q to exit).",
        cmdCategory: "OS Handling",
        cmd: "ps",
      },

      {
        cmdId: 25,
        cmdTitle: "Background processes",
        cmdDescription: "Displays all background processes (Press Q to exit).",
        cmdCategory: "OS Handling",
        cmd: "ps -a",
      },

      {
        cmdId: 26,
        cmdTitle: "Resource consumption info",
        cmdDescription:
          "Displays resource intensive processes running currently (Press Q to exit).",
        cmdCategory: "OS Handling",
        cmd: "top",
      },

      {
        cmdId: 27,
        cmdTitle: "Terminate a process",
        cmdDescription:
          "Terminates process by process Id obtained by command 'top' (Press Q to exit).",
        cmdCategory: "OS Handling",
        cmd: "kill processId",
      },

      // Installation
      {
        cmdId: 28,
        cmdTitle: "Update packages",
        cmdDescription:
          "It updates the built-in packages (pc password needed)..",
        cmdCategory: "Installation",
        cmd: "sudo apt update",
      },

      {
        cmdId: 29,
        cmdTitle: "Upgrade app versions",
        cmdDescription: "It upgrades the apps (pc password needed)..",
        cmdCategory: "Installation",
        cmd: "sudo apt upgrade",
      },

      {
        cmdId: 30,
        cmdTitle: "Install any software",
        cmdDescription:
          "It install the app directly without .deb file (pc password needed)..",
        cmdCategory: "Installation",
        cmd: "sudo apt install softwareName",
      },

      // Vim
      {
        cmdId: 31,
        cmdTitle: "Vim Installation",
        cmdDescription:
          "It installs Vim (CLI based text editor) without .deb file (pc password needed)..",
        cmdCategory: "Vim",
        cmd: "sudo apt install vim",
      },

      {
        cmdId: 32,
        cmdTitle: "Open file in Vim",
        cmdDescription:
          "It opens file in Vim CLI. Press I to start insertion and Escape when done. Erase unnecessary ~ .",
        cmdCategory: "Vim",
        cmd: "vim filename.extension",
      },

      {
        cmdId: 33,
        cmdTitle: "Save and Quit Vim",
        cmdDescription: "It quits the file with saved changes.",
        cmdCategory: "Vim",
        cmd: ":wq",
      },

      {
        cmdId: 34,
        cmdTitle: "Quit without saving",
        cmdDescription:
          "It quits the file without saving changes so that mistakes don't overwrite file.",
        cmdCategory: "Vim",
        cmd: ":q",
      },
    ],
  },

  // -----------------------------

  // Docker
  {
    techRoute: "/docker",
    techName: "Docker",
    techIcon: FaDocker,
    techDescription:
      "Docker is an open source tool for containerization of software and dependencies for cross-platform support.",
    techCategory: "Devops",
    commands: [
      // Installation
      {
        cmdId: 1,
        cmdTitle: "Install Docker (Linux)",
        cmdDescription: "It installs Docker in Linux.",
        cmdCategory: "Installation",
        cmd: "cd Downloads\ntouch install-docker.sh\n[copy paste script from website]\nchmod +x install-docker.sh\n./install-docker.sh",
      },

      {
        cmdId: 2,
        cmdTitle: "Install Docker Desktop (Linux)",
        cmdDescription:
          "It installs Docker Desktop in Linux after installing docker as bash file. Install .deb package from website and run following commands:",
        cmdCategory: "Installation",
        cmd: "sudo apt-get update\nsudo apt install ./docker-desktop-amd64.deb",
      },

      // Containers and Images
      {
        cmdId: 3,
        cmdTitle: "To check docker version (Docker CLI)",
        cmdDescription:
          "It displays version of docker. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker --version",
      },

      {
        cmdId: 4,
        cmdTitle: "To open docker desktop to use CLI (Docker CLI)",
        cmdDescription:
          "It opens docker desktop so that CLI commands can be executed. It can be manually opened too.",
        cmdCategory: "Containers and Images",
        cmd: "systemctl --user start docker-desktop",
      },

      {
        cmdId: 5,
        cmdTitle: "To close docker desktop (Docker CLI)",
        cmdDescription:
          "It closes docker desktop usually done at end of usage. It can be manually closed too.",
        cmdCategory: "Containers and Images",
        cmd: "systemctl --user stop docker-desktop",
      },

      {
        cmdId: 6,
        cmdTitle: "To see all running containers (Docker CLI)",
        cmdDescription:
          "It displays all running containers. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker ps",
      },

      {
        cmdId: 7,
        cmdTitle: "To pull a docker image (Docker CLI, one time only)",
        cmdDescription:
          "It pulls docker image from docker hub to docker desktop locally for making containers. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker pull imageName",
      },

      {
        cmdId: 8,
        cmdTitle:
          "To build a container from docker image (Docker CLI, one time only)",
        cmdDescription:
          "It creates a docker container from the image, even if not pulled earlier it pulls now. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker run imageName",
      },

      {
        cmdId: 9,
        cmdTitle:
          "To use a container in interactive mode (Docker CLI, one time only)",
        cmdDescription:
          "It creates a docker container and run it in interactive mode to use features of that image e.g. Redis, Ubuntu, etc. Use exit command to exit from interactive mode. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker run -it imageName",
      },

      {
        cmdId: 10,
        cmdTitle: "To use already downloaded image (Docker CLI)",
        cmdDescription:
          "It runs an image/container that is pulled earlier. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker start imageNameOrContainerId",
      },

      {
        cmdId: 11,
        cmdTitle:
          "To use already downloaded image in interactive mode (Docker CLI)",
        cmdDescription:
          "It runs an image/container that is pulled earlier, in interactive mode. Some containers may have further services within it like redis-stack-server redis-cli so serviceToUse can be used (optional). Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker exec -it imageNameOrContainerId serviceToUse",
      },

      {
        cmdId: 12,
        cmdTitle: "To stop already downloaded image under use (Docker CLI)",
        cmdDescription:
          "It stops the image/container that is under use. Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker stop imageNameOrContainerId",
      },

      {
        cmdId: 13,
        cmdTitle: "To stop a running container (Docker CLI)",
        cmdDescription:
          "It stops the running container, id or name anything can be used (view by docker ps). Make sure docker desktop is opened.",
        cmdCategory: "Containers and Images",
        cmd: "docker stop containerIdOrName",
      },
    ],
  },

  // -----------------------------

  // Github
  {
    techRoute: "/github",
    techName: "Github",
    techIcon: FaGithub,
    techDescription:
      "Github is an open source platform to push codes into repositories. It uses a version control system k/a Git to track changes in code.",
    techCategory: "Collaboration Tools",
    commands: [
      // Installation
      {
        cmdId: 1,
        cmdTitle: "Install git (Linux)",
        cmdDescription: "It install git in Linux.",
        cmdCategory: "Installation",
        cmd: "sudo apt install git",
      },

      {
        cmdId: 2,
        cmdTitle: "Check git version",
        cmdDescription:
          "It checks git version, can be used to verify git installed or not.",
        cmdCategory: "Installation",
        cmd: "git --version",
      },

      // Configuration
      {
        cmdId: 3,
        cmdTitle: "Username configuration (one time only)",
        cmdDescription: "It configures user globally for all git projects.",
        cmdCategory: "Configuration",
        cmd: "git config --global user.name 'your username (same as github)'",
      },

      {
        cmdId: 4,
        cmdTitle: "Email configuration (one time only)",
        cmdDescription: "It configures user globally for all git projects.",
        cmdCategory: "Configuration",
        cmd: "git config --global user.email 'your email (same as github)'",
      },

      {
        cmdId: 5,
        cmdTitle: "Configured users",
        cmdDescription: "Displays all configured users.",
        cmdCategory: "Configuration",
        cmd: "git config --global list",
      },

      // New Project Setup
      {
        cmdId: 6,
        cmdTitle: "Clone the repository",
        cmdDescription:
          "It clones the repository as a folder in current location.",
        cmdCategory: "New Project Setup",
        cmd: "git clone https://github.com/username/reponame.git",
      },

      {
        cmdId: 7,
        cmdTitle: "Initialize local git project",
        cmdDescription:
          "Initialize empty github repository locally in current folder.",
        cmdCategory: "New Project Setup",
        cmd: "git init",
      },

      {
        cmdId: 8,
        cmdTitle: "Code status",
        cmdDescription:
          "It tells 4 types of status of code: Untracked, Modified, Staged, Unmodified.",
        cmdCategory: "New Project Setup",
        cmd: "git status",
      },

      {
        cmdId: 9,
        cmdTitle: "Connecting to remote repository in Github",
        cmdDescription:
          "It connects local repository to remote repository in Github to upload code.",
        cmdCategory: "New Project Setup",
        cmd: "git remote add origin https://github.com/username/reponame.git",
      },

      {
        cmdId: 10,
        cmdTitle: "Verify remote repository connection",
        cmdDescription:
          "It verifies established connection between local and added remote.",
        cmdCategory: "New Project Setup",
        cmd: "git remote -v",
      },

      {
        cmdId: 11,
        cmdTitle: "Adds 1 file to stage",
        cmdDescription:
          "It adds modified file to stage so that it becomes staged file for commit.",
        cmdCategory: "New Project Setup",
        cmd: "git add filename.extension",
      },

      {
        cmdId: 12,
        cmdTitle: "Add all files to stage",
        cmdDescription:
          "It adds all modified files to stage so that it becomes staged file for commit.",
        cmdCategory: "New Project Setup",
        cmd: "git add .",
      },

      {
        cmdId: 13,
        cmdTitle: "Commit files from stage to branch",
        cmdDescription:
          "It commits the staged file to branch to clean and finalize the changes.",
        cmdCategory: "New Project Setup",
        cmd: "git commit -m 'commit message'",
      },

      {
        cmdId: 14,
        cmdTitle: "Commits history",
        cmdDescription: "Displays all the commits on that branch.",
        cmdCategory: "New Project Setup",
        cmd: "git log",
      },

      {
        cmdId: 15,
        cmdTitle: "Rename master branch to main",
        cmdDescription:
          "It renames branch name to main as a standardized approach.",
        cmdCategory: "New Project Setup",
        cmd: "git branch -M main",
      },

      {
        cmdId: 16,
        cmdTitle: "Push code to Github",
        cmdDescription:
          "It uploads code to Github so that remote and local are synced w.r.t. commits.",
        cmdCategory: "New Project Setup",
        cmd: "git push origin main",
      },

      // Branching
      {
        cmdId: 17,
        cmdTitle: "Check current branch",
        cmdDescription: "Displays current branch name.",
        cmdCategory: "Branching",
        cmd: "git branch",
      },

      {
        cmdId: 18,
        cmdTitle: "Rename branch",
        cmdDescription: "Renames the current branch name to given branch name.",
        cmdCategory: "Branching",
        cmd: "git branch -M newName",
      },

      {
        cmdId: 19,
        cmdTitle: "Create new branch",
        cmdDescription: "Creates a new branch.",
        cmdCategory: "Branching",
        cmd: "git checkout -b newBranchName",
      },

      {
        cmdId: 20,
        cmdTitle: "To move to other branch",
        cmdDescription: "Displays current branch name.",
        cmdCategory: "Branching",
        cmd: "git checkout branchName",
      },

      {
        cmdId: 21,
        cmdTitle: "Delete an existing branch",
        cmdDescription: "Deletes the mentioned branch.",
        cmdCategory: "Branching",
        cmd: "git checkout -d branchName",
      },

      {
        cmdId: 22,
        cmdTitle: "Compare branches",
        cmdDescription:
          "Compares current branch with other branch w.r.t. commits.",
        cmdCategory: "Branching",
        cmd: "git diff otherBranchName",
      },

      {
        cmdId: 23,
        cmdTitle: "Push code to Github",
        cmdDescription: "It uploads code to the mentioned branch in Github.",
        cmdCategory: "Branching",
        cmd: "git push origin branchName",
      },

      {
        cmdId: 24,
        cmdTitle: "Push code to Github as upstream (one time only)",
        cmdDescription:
          "It uploads code to Github as well as set upstream so that next time origin branch name won't be needed.",
        cmdCategory: "Branching",
        cmd: "git push origin -u branchName",
      },

      {
        cmdId: 25,
        cmdTitle: "Merging branches",
        cmdDescription:
          "It merges current branch with other branch usually main.",
        cmdCategory: "Branching",
        cmd: "git merge branchToMergeWith",
      },

      {
        cmdId: 26,
        cmdTitle: "Pull accepted changes locally",
        cmdDescription:
          "After PR is accepted, this command is used to reflect changes locally.",
        cmdCategory: "Branching",
        cmd: "git pull origin branchName",
      },

      {
        cmdId: 27,
        cmdTitle: "To cut all the changes in given branch",
        cmdDescription:
          "It is used to cut all the changes done in a branch so that it can be pasted in other branch.",
        cmdCategory: "Branching",
        cmd: "git stash",
      },

      {
        cmdId: 28,
        cmdTitle:
          "To paste all the changes in given branch from a stashed branch",
        cmdDescription:
          "It is used to paste all the changes done in stashed branch to current branch.",
        cmdCategory: "Branching",
        cmd: "git stash pop",
      },

      // Reverting Changes
      {
        cmdId: 29,
        cmdTitle: "Resetting 1 staged file",
        cmdDescription:
          "Resets file from stage and move it back to modified state.",
        cmdCategory: "Reverting Changes",
        cmd: "git reset filename",
      },

      {
        cmdId: 30,
        cmdTitle: "Resetting all staged files",
        cmdDescription: "Resets all files from stage to modified state.",
        cmdCategory: "Reverting Changes",
        cmd: "git reset",
      },

      {
        cmdId: 31,
        cmdTitle: "Resetting 1 committed file",
        cmdDescription: "Resets file from committed to staged state.",
        cmdCategory: "Reverting Changes",
        cmd: "git reset HEAD~1",
      },

      {
        cmdId: 32,
        cmdTitle: "Resetting directly to a commit",
        cmdDescription:
          "Resets many files file from committed to staged state of any earlier commit based on its id.",
        cmdCategory: "Reverting Changes",
        cmd: "git reset commitHashCode",
      },

      // Multi-Accounts Handling
      {
        cmdId: 33,
        cmdTitle: "Generate SSH key (one time only)",
        cmdDescription:
          "Generates public and private SSH keys using ed25519 algorithm for a PC to connect that PC to Github.",
        cmdCategory: "Multi-Accounts Handling",
        cmd: "ssh-keygen -t ed25519 -C 'email'",
      },

      {
        cmdId: 34,
        cmdTitle: "Check public SSH key",
        cmdDescription:
          "Displays public SSH key to copy and paste in Github settings SSH key Authorization section.",
        cmdCategory: "Multi-Accounts Handling",
        cmd: "cat ~/.ssh/id_ed25519.pub",
      },

      {
        cmdId: 35,
        cmdTitle: "Connecting to remote repository in Github",
        cmdDescription:
          "It connects local repository to remote repository in Github to upload code.",
        cmdCategory: "Multi-Accounts Handling",
        cmd: "git remote add origin https://github.com/username/reponame.git",
      },

      {
        cmdId: 36,
        cmdTitle: "Connect remotely added repo through SSH",
        cmdDescription:
          "After adding remote to origin by git remote add origin link, this command is used to configure SSH based account for that project folder.",
        cmdCategory: "Multi-Accounts Handling",
        cmd: "git remote set-url origin git@github.com:username/reponame.git",
      },
    ],
  },

  // -----------------------------

  // Markup Files
  {
    techRoute: "/markupfiles",
    techName: "Markup Files",
    techIcon: FaReadme,
    techDescription:
      "Markup files are special type of text whiles which are used to write formatted text. It is similar to HTML and we can use HTMl tags here too.",
    techCategory: "Collaboration Tools",
    commands: [
      // Syntax
      {
        cmdId: 1,
        cmdTitle: "Headings",
        cmdDescription:
          "It is used to give level-wise headings to increase text size.",
        cmdCategory: "Syntax",
        cmd: `# H1
## H2
### H3`,
      },

      {
        cmdId: 2,
        cmdTitle: "Text formatting",
        cmdDescription: "It is used to bold, italicize and cut text.",
        cmdCategory: "Syntax",
        cmd: `**bold text**
*italic text*
~~strikethrough~~`,
      },

      {
        cmdId: 3,
        cmdTitle: "Lists (unordered & ordered)",
        cmdDescription:
          "It is used to bold, italicize and cut text. In place of -, use desirable list numbering format for ordered list e.g. 1, 2, 3.",
        cmdCategory: "Syntax",
        cmd: `- Item 1
- Item 2
  - Sub Item 2.1 with indentation`,
      },

      {
        cmdId: 4,
        cmdTitle: "Links and Images",
        cmdDescription: "It is used to attach links/images to the file.",
        cmdCategory: "Syntax",
        cmd: `[Text to display](link)
[Alt text](image link)`,
      },

      {
        cmdId: 5,
        cmdTitle: "Shaded text (usually code/routes)",
        cmdDescription:
          "It is used to shade the given text e.g. small snippet for syntax, routes, etc.",
        cmdCategory: "Syntax",
        cmd: "`text to shade`",
      },

      {
        cmdId: 6,
        cmdTitle: "Block of code",
        cmdDescription:
          "It is used to provide a block of code with proper IDE like view.",
        cmdCategory: "Syntax",
        cmd: "```\nblock of code\n```",
      },

      {
        cmdId: 7,
        cmdTitle: "Block of code with copy button",
        cmdDescription:
          "It is used to provide a block of code with copy button.",
        cmdCategory: "Syntax",
        cmd: "```bash\nblock of code\n```",
      },

      {
        cmdId: 8,
        cmdTitle: "Block of code with comments",
        cmdDescription: "It is used to provide a comment in block of code.",
        cmdCategory: "Syntax",
        cmd: "```md\n> comment\n```",
      },

      {
        cmdId: 9,
        cmdTitle: "Tables",
        cmdDescription:
          "It is used to create a table. Data block size is auto-adjusted.",
        cmdCategory: "Syntax",
        cmd: `| Col1 | Col2 |
| ---- | ---- |
| Row1 | Row1 |
| Row2 | Row2 |`,
      },

      {
        cmdId: 10,
        cmdTitle: "Horizontal line for separation",
        cmdDescription: "It is used to provide a horizontal separation line.",
        cmdCategory: "Syntax",
        cmd: "---",
      },

      {
        cmdId: 11,
        cmdTitle: "Folder structure layout",
        cmdDescription: "It is used to provide a folder structure layout.",
        cmdCategory: "Syntax",
        cmd: `project/
├── src/
│   ├── index.js
│   └── components/
│       └── App.js
├── .gitignore
├── package.json
└── README.md`,
      },
    ],
  },
];
