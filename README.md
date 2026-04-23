# Snipphub

An all in one free open-source platform for copy pasting commands of different tools and technologies. SnippHub supports sharing and collaboration among the community as well as it provides free API with usage documentation.

---

# Features

- 300+ commands
- 10+ technologies
- Copyable Commands for CLI
- Copyable Snippets for Projects
- Shareable commands
- Filters and Searching specific commands
- API for setting up commands database in your system
- Export API data as downloadable JSON file
- Quick learning & revision of commands

---

# Open Source Contribution

This repository is made public for open source contributions. Feel free to contribute and showcase your relevance by adding skills you like.

**Expectations:** Elaborate dataset to cover any other technology you like so that your skills about that technology can be enhanced.

**How to Contribute?** Follow the steps given below to contribute in this project:

### STEP 1: PROJECT SETUP

```bash
# Clone the repository
git clone https://github.com/AmaanNaseh/snipphub.git
```

```bash
# Go to project directory
cd snipphub-master
```

```bash
# Create your branch
git checkout -b contribute/your-name
```

```bash
# Go to backend project directory
cd backend
```

```bash
# Install libraries
npm install
```

```bash
# Start Development server
npm run dev
```

```bash
# In another terminal: Go to frontend project directory
cd frontend
```

```bash
# Create .env file
touch .env
```

```bash
# Copy credentials from .env.example to .env
cp .env.example .env
```

```bash
# Install libraries
npm install
```

```bash
# Start Development server
npm run dev
```

### STEP 2: MAKE CHANGES TO CONTRIBUTE

Although you are free to make changes anywhere, but it is highly recommended that you only change the dataset as code is made in such a way that the moment you change dataset, it is automatically reflected in frontend.

```bash
# Navigate to Commands.jsx file in frontend & find this file
frontend/src/datasets/Commands.jsx
```

```bash
# Type of JSON dataset structure used in this file
export const Commands = [
    # Technology Name as Comment
    {
        techRoute: "/techname", # make sure it is in small letters, used as id in commands page to display technology
        techName: "Full Technology Name", # give full name, spaces allowed as it is just for display
        techIcon: ReactIconName, # carefully select technology icon from https://react-icons.github.io/react-icons/
        # must import react icon at top as import {IconName} from "react-icon/libraryName";
        techDescription: "Brief description", # give brief description about the technology
        techCategory: "Filter Name", # category is just used in Homepage for displaying related technologies under one section
        commands: [
            # Filter Name as Comment
            {
                cmdId: number, # must be in increasing order starting from 1 onwards independant from commands filter
                cmdTitle: "Title of Command, used in searching", # make sure to give small and informative title, it is used in search logic too
                cmdDescription: "Description regarding usage, do's and dont's for the given commands", # must give proper usage guide
                cmdCategory: "Filter Name", # use proper category name to group commands, it is used in filter logic
                cmd: "actual command", # use proper syntax
                # For multi-line commands use backticks `full command`
                # To ignore error causing items like ${}, use \ to ignore item just after it like \$\{varNamr\}
            },

            # Use above format and paste other COMMANDS as objects
        ],
    },

    # Use above format and paste other TECHNOLOGIES as objects
];
```

### STEP 3: PUSH CHANGES TO GITHUB IN YOUR BRANCH ONLY

Commit and push changes to your branch and create pull request. **NEVER MERGE PRs ON YOUR OWN**.

```bash
# Open new terminal and go to project root directory
cd snipphub-master

# Push code to GitHub
git add .
git commit -m "added technologyName in the dataset";
git push origin yourBranchName
```

### STEP 4: CREATE PULL REQUEST IN GITHUB

1. Go to https://github.com/AmaanNaseh/snipphub.git

2. Select your branch

3. Click Contribute or Made few changes, create PR

4. Enter comment and create PR

5. Done

---

# Preview Images

<img width="1920" height="895" alt="Image" src="https://github.com/user-attachments/assets/f52e143c-d7b8-4bfb-aefe-f9a923960bd8" />

<img width="1920" height="895" alt="Image" src="https://github.com/user-attachments/assets/f2933c36-2a24-439d-acc9-fa48f62b366c" />

<img width="1920" height="895" alt="Image" src="https://github.com/user-attachments/assets/ef99c0be-405e-4fae-906d-e662bdc33e92" />

<img width="1920" height="895" alt="Image" src="https://github.com/user-attachments/assets/888c59bd-1eb6-484a-8846-838f9f3c08d8" />
