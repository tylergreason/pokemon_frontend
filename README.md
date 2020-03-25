# Pokemon Team Builder, Backend

This is a web application meant to interface with a Rails application I built for making teams of Pokemon. The backend for this application can be found [here](https://github.com/tylergreason/pokemon_backend). Both the backend and frontend were built in a little under one week. 

## Background 

This is the frontend for my fourth project for Flatiron School. This project was meant to show our understanding of Rails, Javascript, and React, and how we are able to build full web applications using each of these technologies together. 

I decided to build a Pokemon team builder for a few reasons: 
- Pokemon are quite complex, and I wanted to challenge myself with building a database to hold their complicated sets of data and with building a user interface to change that data that was pleasurable to use. 
- It would give me experience working with large sets of data. 
- There is a _ton_ of data available for Pokemon, but you do not need to utilize all of it to make a meaningful application. So, the potential depth of the application is _deep_, but a complete, albeit simple (by Pokemon standards!), application is also feasible. 
- I like Pokemon! I enjoy enjoy the video games (although who has the time for that these days??) and wanted to try my hand at making a better user experience than the video games offer. 

## Functionality 

The functionality is currently quite limited due to the one week time constraint for building the application. For more on the functionality of the backend that this app utilizes, see the repo for my [pokemon backend](https://github.com/tylergreason/pokemon_backend). 

Currently, a user can: 
- Sign up 
- Log in 
- Edit which Pokemon are on their teams 
- Edit the moves of their Pokemon 
- Edit the name and description of their teams 

## Tools and Technologies 

-  Javascript

- [React](https://reactjs.org/)

- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React)


## Installation 

```
# clone this repo

git clone git@github.com:tylergreason/pokemon_frontend.git

# cd into its directory

cd pokemon_frontend

# ensure the backend is running on localhost:3000 

# install any necessary dependencies and start the application. Answer 'yes' when prompted if you want to run the application on a server besides localhost:3000

npm install && npm start 

# the application will automatically open. Use 'test@mail.com' for the username and 'test' for the password. 
```

## What's Next 

There is a lot that can be added to this application. Some features I would like to add include: 
- The ability for a user to make a new team (a basic feature that was overlooked until the day this project was due!). 
- Change a Pokemon's name, nature, and ability. 
- Show the Pokemon's types in a color related to that type (red for fire type, purple for poison, etcetera). 
- Create a new instance of a Pokemon so that a team may have more than one of the same type of Pokemon.  

I would also like to refactor the code and make the UI more pleasant to use. I implemented Semantic UI in the last few hours before this project was due. While it helped _a lot_, it still needs a ton of work.

I plan on coming back and finishing this application after my time at Flatiron is over. 
