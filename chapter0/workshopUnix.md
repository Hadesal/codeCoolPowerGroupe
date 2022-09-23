# Introduction to UNIX

* What is UNIX?
* Where do we find UNIX nowdayas?
  * Linux
    * Android
    * Cloud (AWS, Google)
    * Raspberry PI
  * *BSD (networking)
    * MacOS
* CLI vs. GUI
* Terminal/Console
  * Start a terminal
    * Linux: CTRL + ALT + t
* Basic Commands
  * print working directory
    ```bash
    m@t480s:~$                    # prompt string (user@hostname:directory$)
    m@t480s:~$ pwd                
    /home/m
    ```
  * changing directory
    ```sh
    m@t480s:~$ cd Desktop         # change to a relative path
    m@t480s:~/Desktop$ cd         # go to home directory (~)
    m@t480s:~$ cd -               # go to previous directory
    /home/m/Desktop
    m@t480s:~/Desktop$ cd /tmp    # change to absolute path
    m@t480s:/tmp$ cd ~/Desktop/   # to Desktop in home directory
    m@t480s:~/Desktop$ 
    ```
  * create directory
    ```sh
    m@t480s:~$ mkdir sandbox
    ```
  * list a directory (`ls`)
    ```sh
    m@t480s:~$ cd sandbox
    m@t480s:~/sandbox$ 
    m@t480s:~/sandbox$ echo 'console.log("Hello World!")' > hello.js
    m@t480s:~/sandbox$ ls         # list a directory: short
    hello.js
    m@t480s:~/sandbox$ ls -l      # long listing
    total 4
    -rw-rw-r-- 1 m m 28 Aug 24 10:32 hello.js
    ```
  * show a file (`cat`)
    ```sh
    m@t480s:~/sandbox$ cat hello.js 
    console.log("Hello World!")
    ```
  * run a JS file (`node`)
    ```sh
    m@t480s:~/sandbox$ node hello.js 
    Hello World!
    ```
  * copy/copy/remove a file
    ```sh
    m@t480s:~/sandbox$ cp hello.js hello2.js        # copy file
    m@t480s:~/sandbox$ ls
    hello2.js  hello.js
    m@t480s:~/sandbox$ mv hello2.js hello_copy.js   # rename file / directory
    m@t480s:~/sandbox$ ls -l
    total 8
    -rw-rw-r-- 1 m m 28 Aug 24 10:39 hello_copy.js
    -rw-rw-r-- 1 m m 28 Aug 24 10:32 hello.js
    m@t480s:~/sandbox$ rm hello_copy.js             # remove file
    ```
* Useful CLI keys
  * CTRL + d (EOF)
  * CTRL + c
  * up/down
  * CTRL + r
  * TAB (autocompletion)
* CLI Text editor
  * nano

## Exercise
* Go to `~/sandbox` and use `nano` editor that will create a javascript file `hello_me.js` that when executed, will print out your name.
* Cleanup after yourself. You could delete `hello_me.js`. Better is to move it to `/tmp`, where it will be deleted after reboot.

## Resources:
* https://linuxsurvival.com/    - practice UNIX basics here