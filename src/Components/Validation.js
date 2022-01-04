import React from 'react'

export default function Validation(userRegistration) {
    let Records={};

    if(!userRegistration.username.trim()){
        Records.username="username required"
    }
    // email
    if(!userRegistration.email){
        Records.email='Email Required';
    }
    else if(!/\S+@\S+\.\S+/.test(userRegistration.email)){
        Records.email='Email adress Invalid';
    }

    // phone-number

    if(!userRegistration.Phone()){
        Records.Phone="Number is required"
    }


    // password

    if(!userRegistration.Password){
        Records.Password='Password is Required';
    }
    else if(Records.Password.length<6){
        Records.Password="password need to be 6 char or more";
    }

    return Records;
}


