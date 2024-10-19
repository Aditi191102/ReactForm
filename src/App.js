import './App.css';
import { useState } from 'react';
function App() {

  const [formDetails,setFormDetails] = useState({
    firstName:'',
    lastName:'',
    email:'',
    country:'',
    streetinfo:'',
    state:'',
    zipcode:'',
    gender:'',
    isChecked:false
  })

  function changeHandler(event){
    const {name, value, type, checked,} = event.target
   setFormDetails(oldDate=>{
    return {
      ...oldDate,
      [name]: type === "checkbox" ? checked : value 
    }
   })
  }  

  function clickHandler(){
    window.alert("please mark on checkbox below if you agree with terms and conditions");
  }

  function submitHandler(event){
    event.preventDefault();
    if(formDetails.isChecked===true){
    console.log("final form data is");
    console.log(formDetails);
    setFormDetails({
    firstName:'',
    lastName:'',
    email:'',
    country:'',
    streetinfo:'',
    state:'',
    zipcode:'',
    gender:'',
    isChecked:false
    });
    }
    else{
      alert("You must agree to the terms and conditions.")
    }
  }

  return (
    <div className='App'>
      <div className='Form'>
        <div className='regform'>
          <h3>Registration Form</h3>
        </div>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName' className='label'>First Name</label>
        <br/>
        
        <input
          className='inputbox'
          type='text'
          placeholder='First Name Here'
          name='firstName'
          id='firstName'
          value={formDetails.firstName}
          onChange={changeHandler}
        />
        <br/>
        <br/>

        <label htmlFor='lastName' className='label'>Last Name</label>
        <br/>
        
        <input
          className='inputbox'
          type='text'
          placeholder='Last Name Here'
          name='lastName'
          id='lastName'
          value={formDetails.lastName}
          onChange={changeHandler}
        />
        <br/>
        <br/>

        <label htmlFor='email' className='label'>Email</label>
        <br/>
        
        <input
          className='inputbox'
          type='text'
          placeholder='Something1@gmail.com'
          name='email'
          id='email'
          value={formDetails.email}
          onChange={changeHandler}
        />
        <br/>
        <br/>

        <label className='label'>Gender</label>
        <br/>
        <div className='gender'>
        <label htmlFor='genderMale' className='label'>Male</label>
        <input 
        name='gender'
        id='genderMale'
        type='radio'
        value='male'
        ></input>

        <label htmlFor='genderFemale' className='label'>Female</label>
        <input 
        name='gender'
        id='genderFemale'
        type='radio'
        value='female'
        ></input>
        </div>
        <br/>
        <label htmlFor='country' className='label'>Country</label>
        <br/>

        <select className='dropdown'
          id='country'
          name='country'
          value={formDetails.country}
          onChange={changeHandler}
        >
          <option value="choose">Choose</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Japan">Japan</option>

        </select>

        <br/>
        <br/>
        <label htmlFor='streetinfo' className='label'>Street Address</label>
        <br/>

        <input
        className='inputbox'
        type='text'
        name='streetinfo'
        id='streetinfo'
        placeholder='345-Richer Street'
        value={formDetails.streetinfo}
        onChange={changeHandler}></input>

        <br/>
        <br/>

        <label htmlFor='state' className='label'>State</label>
        <br/>

        <select 
        className='dropdown'
        name="state"
        id="state"
        value={formDetails.state}
        onChange={changeHandler}>

          <option value="choose">Choose</option>
          <option value="Bihar"> Bihar</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Haryana">Haryana</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Punjab">Punjab</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
        </select>

        <br/>
        <br/>
        <label htmlFor='zipcode' className='label'>Postal Code</label>
        <br/>

        <input
        className='inputbox'
        placeholder='302028'
        name='zipcode'
        id='zipcode'
        value={formDetails.zipcode}
        onChange={changeHandler}></input>

        <br/>
        <br/>
        
        <a href='' onClick={clickHandler} >Terms & Conditions</a>

        <br/>
        <br/>
        
        <div className='btn'>
          <div>
          <label className='label'>I agree </label>

          <input
          type='checkbox'
          name='isChecked'
          id='isChecked'
          checked={formDetails.isChecked}
          onChange={changeHandler}
          ></input>

          </div>
        
        <br/>
        <br/>
        <button className='submitbtn'>Submit</button>
        </div>
        
      </form>
      </div>
    </div>
  );
}

export default App;
