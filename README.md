# TV Maze Single Page Application

To run the application do the follow
```
npm install
npm run start
```

## Goal

We would like to see a SPA with two pages (routes): a details page for the TV show "Powerpuff Girls", and an episode detail page with information about specific episodes. Note that since this is an SPA, there should be no full page refresh when navigating between those routes.

The TV show page should at least display the following information (you're free to add more):
* HexagonePage title
* HexagonePage Description
* HexagonePage cover image
* Episode list. Every episode in the list should link to a details page for that specific episode

The episode detail page should contain at least:
* Episode title
* Episode Summary
* Episode cover image

We expect your application to have at least a page for one specific show: "The Powerpuff Girls". You are free to make other shows available as well.

As an example of how a TV show page might look, you can look at the TV Maze show pages here: [http://www.tvmaze.com/shows/6771/the-powerpuff-girls](http://www.tvmaze.com/shows/6771/the-powerpuff-girls).

## Data

Data in your application should be retrieved from the TV Maze API ([http://www.tvmaze.com/api](http://www.tvmaze.com/api)). TV Maze provides a free Rest API with data that strongly resembles the data we use internally to render our VOD platforms like Videoland and RTL XL. We expect that you use some kind of state management in you app. We encourage you to use an existing state management library, like Redux.

## Design

The "look and feel" (design) of the application is completely up to you. Rest assured, we will not judge you on your design skills. But there are some things we expect to see:
* Use CSS to style your components. You're encouraged to use preprocessor such as Sass or Less.
* The site should be responsive and should be usable both on desktop and (small) mobile screens. Define at least one breakpoint in your CSS.

## Deliverables

Try to spend a maximum of 4-6 hours on this assignment. You are free to use more time, but we don't expect you to.

Check in all your source code into a private Git repository (Bitbucket.org for example offers free unlimited private repositories). Of course, we need access to the repository.

Use branching at your discretion, but the end result has to be available in the master branch.

Your app should run from local web server (localhost). After checkout of the code, the only things we should do in order to view the end result is:
* Install dependencies
* Start local web server
* Open web browser

Documentation, especially on building and running the app, is appreciated. It is up to you to decide how comprehensive this documentation should be.

## Other considerations

* We think adding automatic tests is always a good idea, but not a requirement in this assignment.
* You application should work in all modern browsers.
* We prefer code written in ES6 (use a transpiler for browser compatibility).
* English is the preferred language in code comments, documents, variable names, etc.

In general, choose a development methodology and tool set you feel most comfortable with, as long as you adhere to the requirements below.

## Summary of all requirements

* Use React to render UI components.
* Setup two routes in you app, one for TV shows and one for episodes.
* Retrieve data from TV Maze REST API
* Setup state management and data flow
* Style your components with CSS, make sure that the end result is responsive and has at least one breakpoint.
* All code should be checked in into a Git repository
* Documentation is optional but appreciated, the same goes for comments in your code
