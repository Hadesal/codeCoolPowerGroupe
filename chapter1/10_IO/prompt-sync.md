What is prompt-sync?
--------------------

In Node.js getting an input, it's a little bit tricky, but we have a great library for that which is called **prompt-sync**.

You need a few mandatory steps before you start using prompt-sync.

1.  Make sure you have Node and NPM installed.
2.  Run `npm install prompt-sync` in the terminal to install prompt-sync.

After these steps create a new javascript file and paste the under-mentioned line into it.

    const prompt = require('prompt-sync')();
    

Notice the extra `()` after `require()`. The `prompt-sync` module is a function that creates prompting functions, so you need to call `prompt-sync` in order to get your actual prompting function.

Once you’ve loaded the `prompt-sync` module and called it, using it to retrieve user input is relatively straightforward:

    const prompt = require('prompt-sync')();
    
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
    

You can run the file by writing node and the exact place of the file and file name eg.: `node /Users/Codecool/testfile.js`

The `prompt()` function returns the user feedback, so simply store that return value to a variable to use it later. In the example above, the `name` variable stores the value, and it is then repeated to the user on the next line.

Note:
-----

If you running the program with a debugger, you might have some error messages such as:

    Uncaught Error: ENXIO: no such device or address, open '/dev/tty'
    

In this specific case, one line is missing from your `launch.json`. If you don't have `launch.json` you need to create one. If you don't know how to create launch.json you can read more about it [here](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations). If you already have the launch.json you just need to add the specific line yourself, you just need to open the `launch.json` file and add this line inside the parentheses.

    “console”: “integratedTerminal”
    

So right now your `launch.json` should look like something like this:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "pwa-node",
                "request": "launch",
                "name": "Launch Program",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "program": "${file}",
                "console":"integratedTerminal"
            }
        ]
    }
    

Closing the program
-------------------

By default, most terminal programs will exit with `Ctrl + C` (This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program). With prompt-sync, in order to make sure that your users can exit at will, add a configuration object with sigint: true when invoking the prompt-sync function:

    const prompt = require('prompt-sync')({sigint: true});
    

What about numbers?
-------------------

One thing is very important. In `prompt-sync` all user input will be read as a `String`, so in order to treat user input as numbers, you will need to convert the input! I give you a small code snippet about it:

    const num = prompt('Enter a number: ');
    console.log('Your number + 4 =');
    console.log(Number(num) + 4);
    

So, basically, that's it! You know the basic elements of prompt-sync, it wasn't that scary right? I can't wait to see what you are building!
