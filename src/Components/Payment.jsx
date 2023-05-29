import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input,Button } from "@chakra-ui/react";
// import { Button } from "bootstrap";
import React, { useState } from "react";

export default function Payment() {

  const [userinfo,setuserinfo]=useState({
      cardno:"",
      cvv:"",
      validdate:"",

  })

  const isErrorcvv = userinfo.cvv === ''
  const isErrorcard = userinfo.cardno===''
  const isErrordate = userinfo.validdate===''

  // console.log(userinfo);
  const funcdata=()=>{
    if(userinfo.cvv==='123'&&userinfo.cardno==='1234567890123456'){
      alert("Payment Success")
    }
    else{
      alert("Payment unsuccessfull!!!");
    }
    setuserinfo({
      cardno:"",
      cvv:"",
      validdate:"",

  })
  }
  // console.log(userinfo);
  return <div>
     <FormControl isInvalid={isErrorcvv||isErrorcard||isErrordate} >
      <FormLabel>Card Number</FormLabel>
      <Input type='number' value={userinfo.cardno} onChange={(event)=>{setuserinfo({...userinfo,cardno:event.target.value})}} />
      {!isErrorcard ? (
        <FormHelperText>
          Enter the card number for payment.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Card number is required.</FormErrorMessage>
      )}
      <FormLabel>CVV</FormLabel>
      <Input type='number' value={userinfo.cvv} onChange={(event)=>{setuserinfo({...userinfo,cvv:event.target.value})}} />
      {!isErrorcvv ? (
        <FormHelperText>
          Enter the cvv for payment.
        </FormHelperText>
      ) : (
        <FormErrorMessage>CVV is required.</FormErrorMessage>
      )}
      <FormLabel>Valid Till</FormLabel>
      <Input type='date' value={userinfo.validdate} onChange={(event)=>{setuserinfo({...userinfo,validdate:event.target.value})}} />
      {!isErrordate ? (
        <FormHelperText>
          Valid Till
        </FormHelperText>
      ) : (
        <FormErrorMessage>Date is required.</FormErrorMessage>
      )} 
      <Button onClick={funcdata}>Submit</Button>
    </FormControl>
  </div>;
}
