(1)Using the terminal (command line/shell), initialize a Git repository in this directory. What is the command used?
git init

(2)Using the terminal, add the README.md file to the repo. What is the command used?
git add README.md

(3)Using the terminal, make the first commit with the message “Empty project with README”. What is the command used?
git commit -m "Empty project with README"

(4)Using the terminal, add the repository on GitHub as a remote to your local repository. What is the command used?
git remote add origin https://github.com/mkappworks/vdev-20210515.git

(5)Using the terminal, push the commits in your local repo to the remote repo on GitHub. What is the command used?
git branch -M main
git push -u origin main

(6) How Node.js works?
Nodejs is entirely event-driven. In essence, the server is made up of multiple threads and one main thread that processes one event after another. There is a pool of IO workers whose duty it is to receive IO interrupts and place the resulting events into a queue for the main thread to process. The key thread will not be disrupted as a result of this.

One type of occurrence is the arrival of a new submission. When there is a blocking IO operation, the server begins processing it and instead registers a callback function rather than waiting for it to end. The server then immediately moves on to the next thing (maybe another request). The server can process (i.e. resume operating on the request) until the IO process is finished by running the callback as soon as it has time.

As a result, the server never has to generate new threads or switch between them, resulting in very low overhead. Start multiple instances of node if you want to take advantage of multiple hardware Nodejs.

(7) What is meant by the term “web platform”?
The Web Application, Mobile Applications, and the connectivity between these and other external resources make up a Web Platform. Web Platform can have many functions incorporated, all integrated under the single log in.

(8) How TypeScript works?
A compiler for TypeScript is needed to translate TypeScript syntax into standard JavaScript. This compiler is known as a transpiler. Transpiler is a tool for translating one programming language to another.

TypeScript files have a.ts extension, as you can see. You'll get.js files as output after transpiler compiles the.ts files.

The most basic feature of transpiler is that it type-checks the source code before converting it to valid JavaScript code. The compiler prevents runtime errors by using static code inspection.

(9) How WebAssembly works?
WebAssembly is a new type of code that can be run in modern browsers. It was created to get better performance on the web. It’s a low-level binary format that has a small size, so it’s fast to load and execute. You do not write WebAssembly, you compile other higher level languages to it.

You need a tool that will compile your source code to WebAssembly. One way is to use the seasoned modular compiler toolchain LLVM that can be set up to work with different languages.

(10) How is the Fastify different from frameworks like Express.js?
Express is a nodejs web application platform that offers a comprehensive range of features for creating single-page, multi-page, and hybrid web applications. Fastify, on the other hand, is a web interface that prioritizes performance and low overhead.

(11) How is TailwindCSS different from frameworks like Bootstrap?
Tailwind CSS is a utility-first CSS framework. This means that instead of writing a lot of CSS, you'll be writing a lot of HTML elements classes. There are classes in Tailwind CSS for almost any kind of margin, padding, backdrop, font size, font family, text colour, shadow, and so on.
Bootstrap is based on the Object Oriented CSS methodology which has become one of the most popular ways of managing stylesheets and classes. Instead, you'd get a lot more classes for the button's size and design if you used Object Oriented CSS. This would result in a more modular and DRY stylesheet, and you wouldn't have to build a new class just to make a smaller button.

(12) How is Vite.js different from tools like “Create React App”?
Vite is a modern kind of frontend web application build tool. It's a pre-configured dev server and bundler, but it's a lot lighter and simpler than "Create React App."
