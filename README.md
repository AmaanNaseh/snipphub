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

**How to Contribute?** Follow the steps given below to contribute in this project or watch the video <a href="">Open-Source Contribution Guide</a>:

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
git commit -m "added technologyName in the dataset"
git push origin yourBranchName
```

### STEP 4: CREATE PULL REQUEST IN GITHUB

1. Go to https://github.com/AmaanNaseh/snipphub.git

<img width="931" height="285" alt="Image" src="https://github.com/user-attachments/assets/a9747e41-ca39-421f-b63b-ac1170aed026" />

2. Select your branch

<img width="920" height="327" alt="Image" src="https://github.com/user-attachments/assets/8e561e53-d9f3-4ddb-b0e0-d02aafc54872" />

3. You can select any of the two available options to make PULL REQUEST

- contribute/your-name had recent pushes some minutes ago > Compare & pull request
  OR
- Contribute button > Open Pull Request

<img width="920" height="429" alt="Image" src="https://github.com/user-attachments/assets/e57e7b5b-28bb-4011-bac7-8c7323af8285" />

4. Click Create pull request button.

<img width="1920" height="809" alt="Image" src="https://github.com/user-attachments/assets/376b54ef-18b8-4b6d-a66c-aca104c1f6ec" />

5. Finally your contribution is done

<img width="2412" height="1080" alt="Image" src="https://github.com/user-attachments/assets/3f32762b-9c33-4762-a6a1-3bb030a23c2d" />

---

# Preview Images

<img width="2460" height="753" alt="Image" src="https://github.com/user-attachments/assets/7b1bd895-8871-46b0-b5b2-6ef2a075b815" />

<img width="920" height="327" alt="Image" src="https://github.com/user-attachments/assets/e949985f-b0c8-4bb9-a63d-6fb42bb1eceb" />

<img width="2316" height="1080" alt="Image" src="https://github.com/user-attachments/assets/00244dba-29e3-412a-b300-15bb286254bd" />

<img width="1920" height="809" alt="Image" src="https://github.com/user-attachments/assets/7cd447f8-7b14-4579-9157-67dd10f0d73c" />

<img width="2412" height="1080" alt="Image" src="https://github.com/user-attachments/assets/aea3cc2b-f7bb-4da1-b4b3-ab43c425c3f7" />
