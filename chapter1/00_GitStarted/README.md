# Git Started

## Story

What does Git mean? It stands for "global information tracker": when you're in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room. Or "goddamn idiotic truckload of sh*t": when it breaks.

This was actually a quote from Linus Torvalds, the creator of Linux and the Git version control system. Torvalds also said that since he is an egotistical bastard, he named this another child of his after himself, too: the word 'git' is British slang for 'an unpleasant or contemptible person'. Well, Git does have a reputation of being obscure and hard to use.

We hope you'll find it not _that_ hard. Git is just a tool created by developers for developers: while the UX is really poor, at the end of the day, Git is the Swiss Army knife of source code management. The best strategy is to use it a lot, and we recommend you a good book to read about it later on.

All projects in Codecool are handled using Git, and this project covers the necessary basics of Git usage.

## What are you going to learn?

- Clone a remote repository from GitHub.
- Add and modify files.
- Create commits.
- Handle excluded files.
- Push the result back to the remote server.

**This is what you need to do with every project in the future.**

## Tasks

1. Set up passwordless git access on your computer and GitHub account by using `SSH`. This means that you use SSH (Secure Shell Protocol) to authenticate to GitHub instead of giving your username and password.
    - Executing `git config --get remote.origin.url` in shell on the repo shows a response that starts with: `git@...`
    - Executing `git fetch` in shell on the repo does not ask for username and password.

2. Click the **Start Project** button at the top right of the page to create your project repository. Then click the **Open repository** button to navigate to a GitHub repository page.
    - The repository is created under `https://github.com/CodecoolGlobal` with the name `git-started-general-<username>`.

3. Clone the repository to a `projects` folder on your computer. (This folder can be anywhere in your user's home space.)
    - The repository is cloned into `projects/git-started-<username>`.

4. Add a `.gitignore` file that skips the `temp` folder and all the files with a `tmp` extension. Commit this new file, and don't forget to write a well-formed commit message.
    - The `.gitignore` file is added with the second commit (the first is the original "Initial commit").
    - Git filters for the `temp` folder and the `tmp` extension.
    - The commit message has coherent form and style (e.g. "Fix broken link on contact page").
    - There is no typo in the commit message.

5. Create a folder named `data` with a file named `lorem.txt` in it. Add the first sentence of "Lorem Ipsum" into the file, then commit.
    - New file `data/lorem.txt` is added to the repo with the third commit.
    - The content is the first sentence of "Lorem Ipsum".
    - The commit message has coherent form and style (e.g. "Fix broken link on contact page").
    - There is no typo in the commit message.

6. Add a folder named `temp` and copy `lorem.txt` in it. If the `.gitignore` file is written properly, this file does not get committed.
    - There is a `lorem.txt` file in the `temp` folder in the working directory.

7. Add the next three sentences of "Lorem Ipsum", each one in a separate line, to `data/lorem.txt`, then commit your changes.
    - The fourth commit adds three lines to `data/lorem.txt`.
    - The`data/lorem.txt` file contains the first four sentences of "Lorem Ipsum".
    - The commit message has coherent form and style (e.g. "Fix broken link on contact page").
    - There is no typo in the commit message.

8. Rename `data/lorem.txt` to `data/lorem_ipsum.txt`, then commit your changes.
    - The fifth commit replaces `data/lorem.txt` with `data/lorem_ipsum.txt`.
    - The commit message has coherent form and style (e.g. "Fix broken link on contact page").
    - There is no typo in the commit message.

9. Push your changes to GitHub.
    - All five commits are on GitHub.

10. [OPTIONAL] Check your commit history on GitHub. Create a `git-history.txt` file that includes the commit hash of each commit. Add the new file, commit, and push.
    - A new file named `git-history.txt` is added to the repository.
    - This file contains the five earlier commit hashes.

## General requirements

- Git is installed on your computer (check `git --version` on your system). If Git is not installed, visit [this page](https://git-scm.com/downloads).


## Background materials

- [Step-by-step setup guide](project/curriculum/materials/tutorials/git-ssh-setup.md)
- [Git without password](project/curriculum/materials/pages/git/git-passwordless.md)
- [Git basics](project/curriculum/materials/pages/git/git-basics.md)
- [About nice commit messages](https://chris.beams.io/posts/git-commit/) - read `The seven rules of a great Git commit message`
- [.gitignore generator](http://gitignore.io/)