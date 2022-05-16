# Renzil's Web Development Workshop



There are many choices that will work, but if you're new I highly recommend using the cloud-based IDE [Gitpod](https://gitpod.io).

Gitpod is basically a web version of the popular IDE Visual Studio Code. The best part is that it has all the development tools you need pre-installed so you don't need to waste any time with installation or configuration.

> Signup for Gitpod with your GitHub credentials, then make sure you have checked the permissions "user:email" and "public_repo" in https://gitpod.io/integrations -> Git Providers -> GitHub -> Edit Permissions.

<a href="https://www.loom.com/share/1249c77745654b0ba46e83cfb8481eff">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/1249c77745654b0ba46e83cfb8481eff-with-play.gif">
</a>

You can open this workshop in a Gitpod workspace by clicking the New Workspace button.

<a href="https://www.loom.com/share/42a3c3b2e66146bba8fd3499cc440cf5">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/42a3c3b2e66146bba8fd3499cc440cf5-with-play.gif">
</a>

Switch to the branch origin/workshop/part0-git in Gitpod. Here is a video on how to switch branches.

<a href="https://www.loom.com/share/19b7d5dbe9ff423ab5d8a3362ddd20af">
  <img style="width:300px;max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/19b7d5dbe9ff423ab5d8a3362ddd20af-with-play.gif">
</a>


## Introduction to Git

Git is essentially a tool to manage frequent changes to a collection of documents, which is typical when you're developing an app and you have to make changes to source code.

Why do we need git? One reason is because changes to source code often break the app by introducing bugs. So we want to be able to revert back to a previous version of the code, or at least see what specific changes were recently introduced. Another reason is that multiple people can work on a project at the same time with git as it has mechanisms to manage different versions of source code on different computers.

Your project and the documents git tracks is called a git repository. A change (addition, updation, deletion, renaming, etc.) to a git repository can be tracked by making a git commit. You can choose to have some files untracked by git in your source code folder.

Before you commit, git allows you to stage your changes to the git index. This is a place for you to preview what you are changing before you actually commit it to your git repository.

Once you make one or more commits to your git repository on your machine, you can 'push' your changes to a remote repository on another machine. GitHub is an example of a remote git repository. Other users can 'clone' your remote repository onto their machines, make some commits on their local repository, then push their changes back to the remote repository. Your repository can have multiple remotes.

Git enables you to manage different versions of your source code in the form of branches. You can create a branch from any commit in the git commit history tree. You can also merge all commits made to one branch into another branch. Branches can also be pushed to a remote repository.

<img src="https://drive.google.com/uc?id=15ZPGf986T2mQxiiSiKmPxbsARwOHtu44" width="300"> <img src="https://drive.google.com/uc?id=15ZbAjkrM1xHBHPs2OFnsgTXH9lHmPyzW" width="300">

## Workshop steps

1. Setup gitpod and open this repository in gitpod
2. Switch to branch origin/workshop/part0-git in gitpod
3. Create a new branch from workshop/part0-git. You can name it anything, for example YOUR_GITHUB_USERNAME/git.
4. Make some change to the gitpod.yml file (it doesn't matter what you change)
5. Switch to Source Control view and discard your change
6. Make a change to the README.md file (it doesn't matter what you change)
7. Switch to Source Control view and commit your change
8. From Source Control view push your change to remote
9. See your new branch and README on GitHub

## Next steps

Try to create another branch and commit some more changes to the README file. Then try to merge the changes in this branch into the other branch you created.

Here is a video by Linus Torvalds on why he created Git in the first place: https://youtu.be/4XpnKHJAok8

Once you are done with this part of the workshop, switch to **workshop/part1-html** branch where we will learn how to start building any website.
