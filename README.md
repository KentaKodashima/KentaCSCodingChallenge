# CS Coding Challenge Answer from Kenta Kodashima

## Notes
- I could not get the info such as pixels and colors from the design, so I just guessed sizes and spaces, and used color picker browser extension to get the color.


## My Considerations
I have been working with Typescript and styled-components for a long time, so this project structure was new to me. But I tried my best to analize the project structure and coding style to fit my code into the project very well.

I figured that the featuers derectory is the directory to store pages and its components. Each components and pages have its own '_styles.scss' file. In this way, I thought it would be easy to find related styling just like in styled-components. If I had components that could be used globally inside the app, I would create components directory right under the features directory to share accross the pages.

## Project setup
You can run the project following the instructions on the original repository.

Step 1. Install dependencies.
```
$ npm install
$ bin/bundle install
```

Step 2: Setup database
```
$ bin/rails db:setup
```

Step 3. Run the app
```
$ bin/rails s
$ bin/webpack-dev-server
```