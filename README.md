# news-app
> A news viewing app built using react-native

## Pre-Requiste
I have used https://newsapi.org/ API's for the news data you can register and get the key and add the key to the ./src/Services/FetchNews file just replace the ********** with the key and then build the app

![Splash screen](Images/WhatsApp&#32;Image&#32;2019-07-23&#32;at&#32;8.32.12&#32;PM&#32;(3).jpeg)

## Table of Contents 


- [news-app](#news-app)
  - [Pre-Requiste](#pre-requiste)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Clone](#clone)
  - [Features](#features)
    - [Ways to contribute](#ways-to-contribute)

   - [Future plans](#future-plans )


## Installation
Install all the dependencies from the pacakge.json file and then follow the instructions mentioned on their readme page
Packages used
- https://github.com/react-navigation/react-navigation#readme
- https://github.com/kmagiera/react-native-gesture-handler#readme
- https://github.com/kmagiera/react-native-screens#readme
 Just follow the instructions mentioned in their readme

### Clone
To clone this repo use

```
git clone https://github.com/ram2510/news-app.git
```

When you clone this repo this is how your directory should look like
  ```
.
├── App.js
├── Assets
├── Components
├── Contexts
├── Services
└── Views
  ```


## Features

When you open the app you will see a splash screen the splash screen can be changed according to the requirements just change the splash screen image in ./src/Views/SplashScreen/Splash.js 


![Spash screen](Images/WhatsApp&#32;Image&#32;2019-07-23&#32;at&#32;8.32.12&#32;PM&#32;(3).jpeg)

Then on the next screen I have included 3 news category You can increase the news category(provided you have the data for that) by adding the data to the array in ./src/Views/CategoryScreen/Index.js renderCategory function


![Category screen](Images/WhatsApp&#32;Image&#32;2019-07-23&#32;at&#32;8.32.12&#32;PM&#32;(2).jpeg)

Then when you choose the news category you will see the news screen


![news screen](Images/WhatsApp&#32;Image&#32;2019-07-23&#32;at&#32;8.52.13&#32;PM.jpeg)

I have added the news search feature for the news title


![search screen](Images/WhatsApp&#32;Image&#32;2019-07-23&#32;at&#32;8.32.12&#32;PM&#32;(1).jpeg)


### Ways to contribute
- Fix typo,
- Add documentation

---

 [![linkedin](https://img.shields.io/badge/connect%20with%20me-linkedIn-green.svg?style=for-the-badge&logo=appveyor)](https://www.linkedin.com/in/ram2510) [![GMAIL](https://img.shields.io/static/v1.svg?label=send&message=iamram2510@ieee.org&color=red&logo=gmail&style=social)](https://www.github.com/ram2510) 
