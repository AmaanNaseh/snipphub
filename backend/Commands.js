export const Commands = [
  // Linux
  {
    techRoute: "/linux",
    techName: "Linux",
    techDescription:
      "Linux is an operating system that uses CLI for most of its task. The commands used here are valid for Ubuntu and other distributions as well.",
    techCategory: "Operating System",
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

  // Github
  {
    techRoute: "/github",
    techName: "Github",
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

  // Docker
  {
    techRoute: "/docker",
    techName: "Docker",
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

  // My SQL
  {
    techRoute: "/mysql",
    techName: "MySQL",
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

  // Node.js
  {
    techRoute: "/nodejs",
    techName: "Node.js",
    techDescription:
      "Node.js is a runtime environment for Javascript. It allows backend as well as frontend development in our local machines.",
    techCategory: "Backend Web Development",
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

      // Node PostgreSQL
      {
        cmdId: 8,
        cmdTitle: "Initialize npm",
        cmdDescription:
          "Node Package Manager (NPM) is used to install packages and dependencies for node project.",
        cmdCategory: "Node PostgreSQL",
        cmd: "npm init -y",
      },

      {
        cmdId: 9,
        cmdTitle: "Install packages",
        cmdDescription:
          "The packages listed are used to develop express postgres application.",
        cmdCategory: "Node PostgreSQL",
        cmd: "npm i nodemon express sequelize pg pg-hstore cors dotenv",
      },

      {
        cmdId: 10,
        cmdTitle: "To configure modern ES6 syntax",
        cmdDescription:
          "This command is used in package.json to configure react-like modern imports and syntax.",
        cmdCategory: "Node PostgreSQL",
        cmd: '"type": "module"',
      },

      {
        cmdId: 11,
        cmdTitle:
          "index.js - Expressjs server connection and routes setup (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for setting up express app having postgres database connection and routes middleware.",
        cmdCategory: "Node PostgreSQL",
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
        cmdId: 12,
        cmdTitle:
          "connection.js - Postgres database connection and model creation (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for connecting Node.js with Postgres database and models creation.",
        cmdCategory: "Node PostgreSQL",
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
        cmdId: 13,
        cmdTitle:
          "model.js - Postgres schema/table/model creation (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for creating a table using schema/model in Postgres database.",
        cmdCategory: "Node PostgreSQL",
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
        cmdId: 14,
        cmdTitle:
          "routes.js - Routing in Postgres database same as mongodb (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for creating routes/API end points.",
        cmdCategory: "Node PostgreSQL",
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
        cmdId: 15,
        cmdTitle:
          "controller.js - Controllers in Postgres database mostly same as mongodb (CRUD Project)",
        cmdDescription:
          "This code snippet is an example for creating CRUD controllers in Postgres database.",
        cmdCategory: "Node PostgreSQL",
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
    techDescription:
      "Redis is in-memory database i.e. used for caching out information..",
    techCategory: "Backend Web Development",
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

  // Markup Files
  {
    techRoute: "/markupfiles",
    techName: "Markup Files",
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
    ],
  },
];
