import React from 'react';
// import useDepartment from '../useDepartment';

// const APIdepartment = 'https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json';
const APIdepartment = '../Colombia.json';

class Form extends React.Component{
  constructor() {
    super();
    this.state = {
      items: [],
      error: false,
      send: false,
      form : {
        department: 'Antioquia',
        city: 'Medellin',
        name: '',
        email: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(APIdepartment)
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
    })
    .catch(console.log)
  }

  handleChange = event =>{
      this.setState({
          form: {
              ...this.state.form,
              [event.target.name] : event.target.value,
          }
      })
  };

  handleSubmit = (event)=> {
    this.setState({
      error : false, 
      send : true
    });
  };

  handleClick = (event)=>{
    event.preventDefault();
    const name = this.state.form.name;
    const email = this.state.form.email;
    if(!name && !email){
      this.setState({error : true});
    } else {
      this.handleSubmit();
    }
  };

  render(){
    let classSelect = 'form-control select_customarrow';
    let classinput = 'form-control';
    if(this.state.error) {
      classSelect += ' error';
      classinput += ' error'
    }else  {
      classSelect = 'form-control select_customarrow';
      classinput = 'form-control';
    }
    return (
      <form>
        {this.state.error ? <span class='alert-error text-center mb-2'>Llena todos los campos por favor</span>:''}
        {this.state.send ? <span class='alert-success'>Tu información ha sido recibida satisfactoriamente</span>:''}
        <div className="form-group">
          <label for="department">Departamento*</label>
          <select
            required
            className={classSelect}
            id="department"
            onChange={this.handleChange}
            name='department'
            value={this.state.form.department}
          >
            <option value='Antioquia'>Antioquia</option>
            <option value="Bogota">Bogota</option>
            <option value="Perejil">Perejil</option>
            <option value="Zanahoria">Zanahoria</option>
            <option value="Antioquía">Antioquía</option>
            <option value="Antioquía">Antioquía</option>
          </select>
        </div>
        <div className="form-group">
          <label for="city">Ciudad*</label>
          <select
            required
            className={classSelect}
            id="city"
            onChange={this.handleChange}
            name='city'
            value={this.state.form.city}
          >
            <option value='Medellin'>Medellín</option>
            <option value='Barranquilla'>Barranquilla</option>
            <option value='Barranquilla'>Barranquilla</option>
          </select>
        </div>
        <div className="form-group">
          <label for='name'>Nombre*</label>
          <input
            type='text'
            className={classinput}
            name='name'
            placeholder='Pepito de jesús'
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for='email'>Correo*</label>
          <input
            type='text'
            className={classinput}
            name='email'
            placeholder='pepitodejesus@gmail.com'
            onChange={this.handleChange}
            required
          />
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="btn
            btn-primary btn-submit"
            onClick={this.handleClick}
          >
            Enviar
          </button>
        </div>
      </form>
    )
  }
}

export default Form;