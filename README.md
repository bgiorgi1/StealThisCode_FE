

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->


 <h1 align="center">Stealth Code</h3>

  <p align="center">
    The purpose of this project is to make it easier for software engineers to create better designs
    <br />
    <a href="https://github.com/bgiorgi1/StealThisCode_FE"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://stealth-code.herokuapp.com/">View Live Site</a>
    ·
    <a href="https://github.com/bgiorgi1/StealThisCode_FE/issues">Report Bug</a>
    ·
    <a href="https://github.com/bgiorgi1/StealThisCode_FE/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project


This project was created with the intention to help coders of all levels quickly beautify their projects with code snippets that take their project from boring to aw-mazing in just a few clicks.

With Stealth Code, users can create and contribute code as well as access a library of free code snippets for their own use.


### Built With

* [Bootstrap](https://getbootstrap.com)
* [React]()
* [Mongo]()
* [Express]()
* [Node.js]()
* [Axios]()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bgiorgi1/StealThisCode_FE
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

### Wireframe
![wireframe.png](/src/Assets/wireframe.png)

## Code Snippets
#### Displaying the code box
How the code snippet works using React-Sytnax-Highlighter
```Javascript
            <SyntaxHighlighter
              style={docco}
              wrapLines={true}
              wrapLongLines={true}
            >
              {this.state.snippet.body ||'code loading'}
            </SyntaxHighlighter>
  ```

#### Setting language options
```js
  this.state = {
      title: '',
      body:'',
      language: [],
      languageOptions:[
        {
          id: 0,
          name: 'Javascript',
        },
        {
          id: 1,
          name: 'HTML',
        },
        {
          id: 2,
          name: 'CSS',
        },
        {
          id: 3,
          name: 'React',
        },
        {
          id: 4,
          name: 'Bootstrap',
        },
        {
          id: 5,
          name: 'Material-UI',
        },
        {
        id: 6,
        name: 'Python',
        }
      ],
      selected: [],
      dependencies:'',
```


#### Mapping through the language options as a checkbox
```js

          <div>
{/* This is mapping through list of languages above */}
          {
        this.state.languageOptions.map(item => {
       return (
        <label key={ item.id }>
          <input type="checkbox" 
           onChange={ () => this.onCheckBoxChange(item.id) }
          selected={ this.state.selected.includes(item.id) }
          >  
          </input>
          <span>{ item.name }</span>
        </label>
         )
        })
        }
          </div>
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/bgiorgi1/StealThisCode_FE/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- CONTACT -->
## Contact

Brianna Giorgi - brianna.giorgi@gmail.com

Project Link: 

front end: [https://github.com/bgiorgi1/StealThisCode_FE](https://github.com/bgiorgi1/StealThisCode_FE)

back end: [https://github.com/bgiorgi1/StealThisCode_BE](https://github.com/bgiorgi1/StealThisCode_BE)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[forks-url]: https://github.com/bgiorgi1/StealThisCode_FE/network/members
[stars-shield]: https://img.shields.io/github/stars/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[stars-url]: https://github.com/bgiorgi1/StealThisCode_FE/stargazers
[issues-shield]: https://img.shields.io/github/issues/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[issues-url]: https://github.com/bgiorgi1/StealThisCode_FE/issues
[license-shield]: https://img.shields.io/github/license/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[license-url]: https://github.com/bgiorgi1/StealThisCode_FE/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/briannagiorgi