# Git and github

Git is a version control system. Github is a platform for hosting code repositories.

## Guide

- [Git and github](#git-and-github)
  - [Guide](#guide)
  - [Commands](#commands)

## Commands

```bash

git init
# Initializes a git repository in the current directory.

git add .
# Adds all files in the current directory to the staging area.

git commit -m "Initial commit"
# Commits the current changes in the staging area to the repository.

git remote add origin "ssl"
# Adds a remote repository called "origin" with the URL "ssl".

git push -u origin master
# Pushes the current branch to the remote repository.

git remote -v
# Shows the remote repositories.

git rm --cached -r .
# Removes all files in the current directory from the staging area.

```