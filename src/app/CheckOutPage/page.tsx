'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import CheckoutForm from './CheckoutForm';
import { useSearchParams } from 'next/navigation'



const CheckOutPage = () => {

  const searchParams = useSearchParams()
 
  const search = searchParams.get('price')

    const stripePromise = loadStripe('pk_test_51NkUCkDY5Lvgc9nSiXqa49XPqNi6oPQrvDrEQyohZg3pusjyU3vYPzn1ZcgjQvcPchJUPYGPwrgG1tZlknFovhVb00brtPqfwc')
    const finalPrice:number=parseFloat(search!);
  return (

    <>
    
     <div>
   
    {
     !finalPrice?
     <div>
         <h1 className='text-center'>Add Atlest One Item in Cart</h1>
     </div>:
     <div>
      Total price:{finalPrice}
     <Elements stripe={stripePromise}>
     <CheckoutForm totalPrice={finalPrice} ></CheckoutForm>
     </Elements>
   </div>
    }
     </div>
    </>
  )
}

export default CheckOutPage