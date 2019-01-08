import React from 'react';
import './mission.css';
const countries = require('./countries.json');

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
let days = []
for(let i = 1; i <= 31; i++){
  days.push(i)
};

const years = []
for(let x = 180; x < 2007; x++){
  years.push(x)
};

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

  handleInput(e){
    this.setState({
      name: e.target.value
    })
  };

  handleChange(event){
    debugger
     this.setState({
       [event.target.name]: event.target.value
      })
   };
  
   handleSubmit = (e) =>{

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
              <input type="text" placeholder="Mission" name="mission" value={this.state.name} onInput={this.handleInput} />
              <label htmlFor='Name'>
                What is your name?
              </label>
              <input type='text' placeholder='Your name' name="name" value={this.state.name} onInput={this.handleInput} />
              <label htmlFor='Birth'>
                What is your date of birth?
              </label>
              <select name='month' onChange={this.handleChange}>
                { months.map(month => (
                  <option value={month}>{month} </option>
                ))}
              </select>
              <select name='days' onChange={this.handleChange}>
                { days.map(day => (
                  <option value={day}>{day} </option>
                ))}
              </select>
              <select name='years' onChange={this.handleChange}>
                { years.map(year => (
                  <option value={year}>{year} </option>
                ))}
              </select>
              <button type='submit'>Submit</button>
              {/* <input type="date" id="date" name="birth" value="" min="1980-01-01" max="2019-01-01" required/>
              <span class="validity"></span> */}

              <label htmlFor='country'>
                What is your country of origin?
              </label>
                <select placeholder="Your country" name= "country" value={ this.state.country }> </select>
              <label htmlFor='dietary'>
                What is your dietary preference?
              </label>
              <select > </select>
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
