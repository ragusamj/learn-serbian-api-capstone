# Learn Serbian API Capstone
Thinkful (https://www.thinkful.com) First Capstone Project - App integrating with Yandex language translator API and Google Books API.
https://ragusamj.github.io/learn-serbian-api-capstone/


## Background
Professionaly and personaly I am passionate about the literature and foreign language acquisition. I develop curriculum and teach Serbo-Croatian language.
In the course of my career as a linguist, I discovered that there are just a few web applications that would allow my students to practice their skills.
Technology today plays such an important role in our everyday life on all levels, which is why I decided to create a web applications that will provide my students with additional and much needed
web resources.


## Use Case
This app is for all English speakers wishing to learn Serbo-Croatian for all levels.
The user will be able to translate English into Serbo-Croatian.
After receiving the Serbo-Croatian translation of a single word, the user will be able to click on wiktionary, google images and google search icons to learn more about the word in the target language environment.
By having access to this additional resource the user will be able to learn conjugations, declentions and other grammar-related information.
The google-image icon will act as a modern day pictograph, by revelieling to the user what is the image of the searched word. For example, for the word "bird" the google image will yield a picture of a bird.
The second functionality includes a possibility of searching the google books in Serbo-Croatian language, and will be able to access the relavant free e-books.



## User Stories

* As a user I would like to land on the website and undestand what is the website about in order to use it.
![Use Case](https://github.com/ragusamj/learn-serbian-api-capstone/blob/master/github-images/serbian-api-capstone-home.png)

* As a user I want to be able to enter any word in the search bar and recieve the translation,
weather I enter the English or the target language.
![Use Case](https://github.com/ragusamj/learn-serbian-api-capstone/blob/master/github-images/learn-serbian-api-translate.png)


* After the word yields wanted results in Serbo-Croatian language, I would like to click on the wiktionary,
general google searche and google images icon, to lean more about the word.
![Use Case](https://github.com/ragusamj/learn-serbian-api-capstone/blob/master/github-images/learn-serbian-api-translate-results.png)



*  As a user I would like to find out additional literature/resources to learn about the target language and the target country.

![Use Case](https://github.com/ragusamj/learn-serbian-api-capstone/blob/master/github-images/learn-serbian-api-read.png)

![Use Case](https://github.com/ragusamj/learn-serbian-api-capstone/blob/master/github-images/learn-serbian-api-read-results.png)


## Working Prototype

You can access a working prototype of the app here: https://ragusamj.github.io/learn-serbian-api-capstone/





## Functionality
The app's functionality includes:
* searching the dictionary for translation purposes English to Serbo-Croatian.
* searching the google books in Serbo-Croatian.

## Technology
* HTML
* CSS
* JavaScript
* jQuery

The app uses AJAX JSON calls to the: https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20171130T020127Z.45d0be296a8190a9.526acec1ed5d18797322ed46ef6078a73f832acf&ui=sr&callback=?
and
"https://www.googleapis.com/books/v1/volumes" for Google Books API.




## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:

Sebian imperfective/perfective verbs database.
