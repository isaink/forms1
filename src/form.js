import React from 'react';
import './mission.css';
const countries = require('./countries.json');
// const

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
                  mission: '',
                  name: '',
                  birth: '',
                  date: '',
                  selectedCountry: '',
                  dietary: '',
                  formSubmitted:false
                  }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
     this.setState({[event.target.name]: event.target.value});
   }

    render(){
      return(
        <>
          <header>
          <h1> Mission to Mars Registration Form </h1>
          </header>

          <div>
            <form onChange={this.handleChange}>
              <label htmlFor='Mision'>
               Mission
              </label>
              <input type="texst" placeholder="Mission" name="mission" value="" />
              <label htmlFor='Name'>
                What is your name?
              </label>
              <input type='text' placeholder='Your name' name="name" value="" />
              <label htmlFor='Birth'>
                What is your date of birth?
              </label>
              <input type="date" id="date" name="birth" value="" min="1980-01-01" max="2019-01-01" required/>
              <span class="validity"></span>
              <label htmlFor='country'>
                What is your country of origin?
              </label>
                <select placeholder="Your country" name= "country" value={ this.state.country }> </select>
              <label htmlFor='dietary'>
                What is your dietary preference?
              </label>
              <select> </select>
              <label htmlFor='dietary'>
                Why do you want to be a Mars explorer?
              </label>
              <input type="text" placeholder="Why?" name="explorer" value="" />
              <button type="submit"> Submit </button>

            </form>

          </div>
        </>
      )
    }
}

export default Form;
