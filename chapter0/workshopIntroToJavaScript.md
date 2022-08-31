# Hello World: JavaScript

* JavaScript JS is a programming language
* Evolution of ECMAScript / JS
    * Browser
    * Server
* Interpreted programming language
    * Good for fast and early feedback!
    * Super Popular
    * Browser is the new OS (Chrome OS)
* Install node
    * Linux: `sudo apt install nodejs npm`
    * Mac OS X: `brew install node`
* Install Visual Studio Code
    * Linux: `sudo snap install --classic code`
    * Mac OS X: `brew install --cask visual-studio-code`
* [What is npm?](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
* Run a file in node
    ```
    $ node hello.js
    Hello World!
    ```
* Where will the journey go?
    * 1st chapter - mechanic computer
        ```
        m@t480s:~$ node                     # interactive mode
        Welcome to Node.js v12.22.9.
        Type ".help" for more information.
        > 1 + 1
        2
        > 2 * 2
        4
        > 3 - 1
        2
        > 51 / 6
        8.5
        > 51 % 6                  // modulo operator (division rest)
        3
        > Math.floor(51/6)        // round down
        8
        > 4 ** 2                  // power
        16
        > Math.sqrt(9)            // square root
        3
        > (Math.sqrt(9) - 2) % 2  // expressions can be complex
        ```
    * 2nd chapter - intelligent machine
        ```
        m@t480s:~/sandbox$ cat circleAreas.js 
        function circleArea(radius) {
            return Math.PI * radius * radius; 
        }

        for (let i = 1; i < 10; i++) {
            let area = circleArea(i):
            console.log(`Circle area for ${i}: ${area}`);
        }
        m@t480s:~/sandbox$ node circleAreas.js 
        Circle area for 1: 3.141592653589793
        ...
        Circle area for 9: 254.46900494077323
        ```
    * JavaScript is the language of the Web 
        * CTRL + SHIFT + i
            * `"Hello World"` in the console
        * Google Suite (mail, calendar, office)
    * JavaScript is also a fully fledged development platform
        * Slack (desktop, mobile, web)
        * Discord (desktop, mobile, web)
        * Visual Studio Code (desktop, web)
        * Wlingua (web, mobile)

## Exercises
* Setup VS code
    * install and setup plugins
        * prettier
        * eslint
        * Live Server
    * learn shortcuts (google for: "visual studio code shortucts linux/macos")
        * try each at least once
        * have the cheatsheet always handy
