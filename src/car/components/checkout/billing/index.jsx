import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {Input} from '../../forms'
import {useDispatch, useSelector} from 'react-redux'
import { 
UpdateProfile, 
clearUserAlertError, 
getSingleCustomer,
saveShippingAddress
} from '../../../Features'
import Message from '../../loaders/Message'
import LoaderIndex from '../../loaders'



export default function Billingindex() {
  const {
  addressData,
  userInfo
} = useSelector(store=> store.user)
    const [formdata, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    company:'',  
    country:'',
    address:'',
    city:'',
    phone:'',
    postalCode:''
  })

const inputData = [
 {id:1, name:'firstname', placeholder:'John', type:'text', text:'First name', 
 errorMessage:'firstname should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 pattern:'^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$'
 },
 {id:2, name:'lastname', placeholder:'Doe', type:'text', text:'Last name', 
 errorMessage:'lastname should be 3-16 characters and should not contain any special Characters', 
 required:true, 
 pattern:'^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$'
 },
 {id:3, name:'company', placeholder:'company name', type:'text', text:'Company Name', 
 errorMessage:'lastname should be 3-16 characters and should not contain any special Character', 
 required:false
 },
 {id:4, name:'country', placeholder:'Country name', type:'text', text:'Country Name', 
 errorMessage:'country should be 3-16 characters and should not contain any special Character', 
 required:true,
 pattern:'^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$'
 },
 {id:5, name:'address', placeholder:'Address', type:'text', text:'Address', 
 errorMessage:'address should be 3-16 characters and should not contain any special Character', 
 required:true,
 },
 {id:6, name:'city', placeholder:'Town Address', type:'text', text:'Town Address', 
 errorMessage:'City should be 3-16 characters and should not contain any special Character', 
 required:true,
 pattern:'^[a-zA-Z]{4,}( {1,2}[a-zA-Z]{4,}){0,}$'
 },
 {id:7, name:'phone', placeholder:'phone details', type:'text', text:'phone', 
 errorMessage:'phone should be 3-16 characters and should not contain any special Character', 
 required:true,
 },
 {id:8, name:'postalCode', placeholder:'postal Code', type:'text', text:'postal Code', 
 errorMessage:'postal Code should be 3-16 characters and should not contain any special Character', 
 required:true,
 },
 {id:9, name:'email', placeholder:'example@site.com', type:'email', text:'Email', 
 errorMessage:'It should be a valid email', 
 required:true,
 },
]

 
    useEffect(()=> {
      // get the main users data once the profile page mounts
    if(addressData){
        const {
     firstname,
    lastname,
    email,
    phone,
    city,
    address,
    postalCode
    } = addressData

     setFormData({
    firstname,
    lastname,
    email,
    phone,
    city,
    address,
    postalCode
  })
      }
    }, [setFormData, addressData])


    useEffect(()=> {
      // get the main users data once the profile page mounts
    if(userInfo){
        const {
     firstname,
    lastname,
    email,
    city,
    address,
    postalCode,
    phone,
    country
    } = userInfo
     setFormData({
    firstname,
    lastname,
    email,
    city,
    address,
    postalCode,
    phone,
    country
  })
      }
    }, [setFormData, userInfo])


  const onChange = (e)=> {
    setFormData({...formdata, [e.target.name]:e.target.value})
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(formdata)

  const handleAddressDetails = (e)=> {
    e.preventDefault()
    dispatch(saveShippingAddress(formdata))
    navigate('/payment')
  }

  return (
    <BillingIndexContainer>
      <h2>Billing Details</h2>
      <form className="formWrapper" onSubmit={handleAddressDetails}>
        <div className="inputWrapper">
        {inputData.slice(0, 2).map(input=> {
              return <Input 
              id={input.text} 
              onChange={onChange} 
              placeholder={input.placeholder} 
              type={input.type}
              name={input.name}
              value={formdata[input.name]} 
              input={input} 
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
             })}
        </div>
        <div className="inputWrapper">
        {inputData.slice(2, 8).map(input=> {
              return <Input 
              id={input.text} 
              onChange={onChange} 
              placeholder={input.placeholder} 
              type={input.type}
              name={input.name}
              value={formdata[input.name]} 
              input={input} 
              key={input.id}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
            />
             })}
        </div>
        <div className="btnWrapper">
          <button type='submit' className="btn" onClick={handleAddressDetails}>Continue</button>
        </div>
      </form>
    </BillingIndexContainer>
  )
}

const BillingIndexContainer = styled.div`
width:100%;
border: 1px solid var(--grey-2);
padding:2rem;
 h2 {
  font-size:3rem;
  font-weight:700;
  color:var(--dark-1);
  text-align:center;
  line-height:1.5;
  border-bottom:1px solid var(--grey-2);
  padding:1rem 0;
  text-transform:uppercase;
  width:100%;
  text-align:start;
 }

 .formWrapper {
  padding: 2rem 0;
  width:100%;
  display: flex;  
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  .btnWrapper {
    width:100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
      border: none;
      outline: none;
      padding: 1.8rem 3rem;
      font-size: 1.6rem;
      color: var(--white);
      background-color: var(--red);
      cursor: pointer;
      &:hover {
        background-color: var(--blue-1);
      }
    }
  }
  .inputWrapper {
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2rem;
    @media (max-width:480px) {
      grid-template-columns: 1fr;
    }
  }
 }
`
