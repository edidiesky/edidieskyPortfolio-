import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import InventoryIndex from '../components/home/inventory'
import Heroindex from '../components/home/hero'
import SearchIndex from '../components/home/search'
import ServicesIndex from '../components/home/services'
import LocationIndex from '../components/home/location'
import Blogindex from '../components/home/blog'
import Styled from 'styled-components'
import Brandindex from '../components/home/brands'
import ChoiceIndex from '../components/home/choice'
import LoaderIndex from '../components/loaders'
import Message from '../components/loaders/Message'
import CartSidebar from '../components/cart/CartSidebar'
import { 
getAllProduct, 
clearProductAlert,
clearProductDetails
} from '../Features'

import { Banner3, Banner4, Newsletter, Footer,Meta} from '../components/common'
export default function Home() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  },[])
  const { 
  product,
  isLoading,
  alertText,
  alertType,
  isError
} = useSelector(store => store.product)
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(clearProductDetails())
    dispatch(clearProductAlert())
      dispatch(getAllProduct())
    }, [])


  return (
    <>  
    <Meta/>
    
    <HomeContainer>
    {
         isLoading?<LoaderIndex loading={isLoading}/>
         :
          isError? <Message alertText={alertText} alertType={alertType}/> :
          <>
      <Heroindex/>
      <CartSidebar/>
      <SearchIndex/>
      <ServicesIndex/>
      <Brandindex/> 
      <InventoryIndex/>
      <ChoiceIndex/>
      <LocationIndex/>
      <Blogindex/>
      <Banner3/>
      <Banner4/>
      <Newsletter/>
      <Footer/>
      </>
    }
    </HomeContainer>
    </>
  )




}

const HomeContainer = Styled.div`
width:100%;
background:#fff;
`
