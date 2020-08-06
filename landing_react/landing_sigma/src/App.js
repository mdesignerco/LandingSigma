import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/bootstrap.css';
import './Assets/css/style.css';

import Form from './Component/Form';

import logo from './Assets/images/sigma-logo.png';
import contentImage from './Assets/images/sigma-image.png';

function App() {
  return (
    <div className="container p-5">
    <div className="row justify-content-md-center pb-5">
      <div className="col">
        <img src={logo} className="image-brand mx-auto d-block"  alt="sigma logo" />
      </div>
    </div>
    <div className="row pb-4">
      <div className="col">
        <h1 className="text-center ">Prueba de desarrollo Sigma</h1>
      </div>
    </div>
    <div className="row pb-4">
      <div className="col-sm-12 col-md-12 col-xl-8 offset-xl-2">
        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-6 pb-4">
        <img src={contentImage} className="img-fluid mx-auto d-block" alt="example image" />
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="card">
          <div className="card-body">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
