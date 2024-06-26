#!/bin/bash

# Author        : Abhiraj Roy (Iconized)
# Author URL    : https://iconized.github.io

# NOTE: Run this script at your own risk!

pull_from_github(){
    git pull
}

push_to_github() {
    ezcommits
    git push -u origin master
}

main(){
    pull_from_github
    push_to_github
}

main