# Mars Collection
[Mars Collection](https://mars-collection.firebaseapp.com/) is a single-page application which displays pictures taken by [NASA's rovers](https://en.wikipedia.org/wiki/Mars_rover): Curiosity, Opportunity and Spirit. The pictures display depending on the rover and the size chosen. Pictures can also be "liked" and saved to be seen in a different page called "My Pictures". For more information about Mars, there's a page called "Learn More".

[API used to get the pictures](https://github.com/chrisccerami/mars-photo-api)

## Desktop Version
 ![image](https://i.imgur.com/kJTGpmD.png)
 
## Mobile Version
 ![image](https://i.imgur.com/fgtUcEH.png)

# Motivation
The motivation for this project was to practice building something interesting with React, and to add different features, like live resizing of the pictures already displayed, routing and easy state management with Redux. This is a "copy" of my favorite project: [Mars Collection](https://egyomrey.github.io/Mars-Collection/build/index.html) which I built initialy with jQuery and ES6. 

# Folder Structure 
<pre>
src/  
|  
|– assets/
|  
|– components/  
|   |– InformativeArticle/
|   	|– ArticleBody/
|	    	|– _ArticleBody.js
|  		|– _InformativeArticle.js
|  		|– _InformativeArticle.css
|   |– MessageDisplayer/
|  		|– _MessageDisplayer.js
|  		|– _MessageDisplayer.css
|   |– Navigation/
|   	|– NavigationItem/
|	    	|– _NavigationItem.js
|	    	|– _NavigationItem.css
|  		|– _Navigation.js
|  		|– _Navigation.css
|   |– Picture/
|  		|– _Picture.js
|  		|– _Picture.css
|   |– UI/ 
|   	|– Dropdown/
|	    	|– _Dropdown.js
|   	|– FigureObject/
|	    	|– _FigureObject.js
|   	|– LikeButton/
|	    	|– _LikeButton.js
|	    	|– _LikeButton.css
|   	|– Loader/
|	    	|– _Loader.js
|	    	|– _Loader.css       
|  
|– containers/ 
|   |– Home/
|   	|– MenuContainer/
|	    	|– _MenuContainer.js
|	    	|– _MenuContainer.css
|   	|– PicturesContainer/
|   	    |– Pictures/
|	        	|– _Pictures.js
|	        	|– _Pictures.css
|	    	|– _PicturesContainer.css
|	    	|– _PicturesContainer.css
|   	|– Home.js
|   	|– Home.css
|   |– LearnMore/
|  		|– _LearnMore.js
|  		|– _LearnMore.css
|   |– MyPictures/
|  		|– _MyPictures.js
|  		|– _MyPictures.css
|
|– store/
|   |– actions/
|   	|– actionTypes.js
|   	|– index.js
|   	|– learnMore.js
|   	|– menuContainer.js
|   	|– pictures.js
|   |– reducers/ 
|   	|– learnMore.js
|   	|– menuContainer.js
|   	|– pictures.js    
| 
|– App.js
|– index.css
|– index.js 

</pre>


# Project requirements

### Node.js
You need Node to run this project, you can get it by downloading it from [Nodejs.org](https://nodejs.org/en/)

## Installation
To run this project, you have to clone it and install all the dependencies used.

    $ git clone https://github.com/EGYOMREY/Mars-Collection-React.git
    $ cd Mars-Collection-React
    $ npm install

## Usage
To run the project locally, write this command in your CL

    $ npm start

## Simple build for production
To build an optimized and ready-to-deploy version of this project, run this command

    $ npm run build

## Languages & Tools

### Javascript Library
This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), therefore [React](https://reactjs.org/) was used to build the user interface
* [Redux](https://redux.js.org/) was used to manage the state of the application

### Styling
Used [React Materialize](https://react-materialize.github.io) to add styling


### Special thanks
To [@chrisccerami](https://twitter.com/chrisccerami) for maintaining the amazing API used which can be found in this [repository](https://github.com/chrisccerami/mars-photo-api).
