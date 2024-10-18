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
    zipcode:''
  })

  console.log(formDetails);

  function changeHandler(event){
   setFormDetails(oldDate=>{
    return {
      ...oldDate,
      [event.target.name]: event.target.value
    }
   })
  }  

  function clickHandler(){
    window.alert("please mark on checkbox below if you agree with terms and conditions");
  }

  return (
    <div className='App'>
      <div className='Form'>
      <form>
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
          placeholder='Email Id Here'
          name='email'
          id='email'
          value={formDetails.email}
          onChange={changeHandler}
        />
        <br/>
        <br/>

        <label className='label'>Gender</label>
        <br/>
        <br/>
        <label htmlFor='gender' className='label'>Male</label>
        <input 
        name='gender'
        id='gender'
        type='radio'
        value='male'></input>

        <label htmlFor='femalegender' className='label'>Female</label>
        <input 
        name='gender'
        id='femalegender'
        type='radio'
        value='female'></input>

        <br/>
        <br/>
        <label htmlFor='country' className='label'>Country</label>
        <br/>

        <select
          id='country'
          name='country'
          value={formDetails.country}
          onChange={changeHandler}
        >
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
        name="state"
        id="state"
        value={formDetails.state}
        onChange={changeHandler}>

          <option 
            value="Bihar"
          > Bihar</option>
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
        onChange={changeHandler}></input>

        <br/>
        <br/>
        
        <a href='' onClick={clickHandler} >Terms & Conditions</a>

        <br/>
        <br/>
        <label className='label'>I agree </label>

        <input
        type='checkbox'></input>
      </form>
      </div>
    </div>
  );
}

export default App;
