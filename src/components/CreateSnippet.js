import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
// import ImageUpload from './ImageUpload';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');

class CreateSnippet extends Component {
  constructor() {
    super();
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
      // image:'',
      // imageUrl: undefined,
      // imageAlt: undefined,
    };
  }

  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  onCheckBoxChange(id) {
    let selected = this.state.selected
    let find = selected.indexOf(id)
  
    if(find > -1) {
      selected.splice(find, 1)
    } else {
      selected.push(id)
    }
  console.log(find, selected)
    this.setState({ selected })

  }

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body,
      language: this.state.selected.map(id => this.state.languageOptions[id].name),
      dependencies: this.state.dependencies,
      // image: this.state.image
    };

    // This is for image upload
//     const handleImageUpload = () => {
//       const { files } = document.querySelector('input[type="file"]')
  
//       const formData = new FormData();
//       formData.append('file', files[0]);
//       formData.append('upload_preset', 'yefmvq5e');
  
//       const options = {
//         method: 'POST',
//         body: formData,
//       };
    
//       return fetch('https://api.cloudinary.com/v1_1/dfurnzozk/image/upload', options)
//         .then(res => res.json())
//         .then(res => {
//           this.setState({
//             imageUrl: res.secure_url,
//             imageAlt: `An image of ${res.original_filename}`
//           })
//         })
//         .catch(err => console.log(err));
//     }
  
//     // ...
// const openWidget = () => {
//   // create the widget
//   const widget = window.Cloudinary.createUploadWidget(
//     {
//       cloudName: 'dfurnzozk',
//       uploadPreset: 'yefmvq5e',
//     },
//     (error, result) => {
//       if (result.event === 'success') {
//         this.setState({
//           imageUrl: result.info.secure_url,
//           imageAlt: `An image of ${result.info.original_filename}`
//         })
//       }
//     },
//   );
//   widget.open(); // open up the widget after creation
// };
  

// ********************


console.log('data', data)
    axios
      .post('http://localhost:8000/api/snippets', data, {headers:{Authorization:currentUser, 'Content-Type': 'Application/json'}})
      .then(res => {
        console.log(res.data)
        this.setState({
          title: '',
          body:'',
          language:'',
          dependencies:'',
          // image:'',
        })
        this.props.history.push('/ShowSnippet');
      })
      .catch(err => {
        console.log("Error in CreateSnippet!");
        console.log(err)
      })
  };

  render() {
    console.log(this.state)
    // const { imageUrl, imageAlt } = this.state;
    return (
      
      <div className="CreateSnippet">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/ShowSnippet" className="btn btn-outline-warning float-left">
                  Show Snippet List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Code Snippet</h1>
              <p className="lead text-center">
                  Create new snippet
              </p>


              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of code snippet'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />
             
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='dependencies'
                    name='dependencies'
                    className='form-control'
                    value={this.state.dependencies}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <textarea
                    rows="4" cols="50"
                    type='text'
                    placeholder='Enter code here'
                    name='body'
                    className='form-control'
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                </div>


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

{/* this is for image uploads */}
          {/* <main  className="App">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file" name="file" placeholder="upload image"/>
            </div>
  
            <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
            <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </main> */}
{/* <ImageUpload/> */}
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>


              
          </div>
          </div>
        </div>
      </div>



    );
  }
}

export default CreateSnippet;