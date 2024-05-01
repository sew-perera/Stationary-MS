import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { db } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { serverTimestamp } from "firebase/firestore";

const New = () => {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [quantityerror, setQuantityError] = useState("");
  const [emptyerror, setEmptyError] = useState("");
  const [successmsg, setSuccessmsg] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(name !== "" && quantity !== "" && description !== "" ){

      const quantityValue = parseInt(quantity); 

      if(!isNaN(quantityValue)){
          await addDoc(collection(db,"itemlog"),{
            name,
            quantity: quantityValue,
            description,
            createdAt: serverTimestamp()
          });
          setName("");
          setQuantity("");
          setDescription("");
          setQuantityError("");
          setSuccessmsg("Data added successfully");
        }

        else{
          setQuantityError("Quantity must be a number");
          
        }
    }

    else{
         setEmptyError("Feilds cannot be empty");
    }

    
 };

    const handleFocus = () => {
      setEmptyError("");
      setQuantityError("");
    };
    
  return (
    <>
    <Navbar/>
    <h2>New items</h2>

    <label>Name</label><br/>
    <input onChange={(event)=>{setName(event.target.value)}} onFocus={handleFocus}></input><br/><br/>

    <label>Quantity</label><br/>
    <input onChange={(event)=>{setQuantity(event.target.value)}} onFocus={handleFocus}></input><br/><br/>

    
    <label>Description</label><br/>
    <input onChange={(event)=>{setDescription(event.target.value)}} onFocus={handleFocus}></input><br/><br/>

    <button onClick={handleSubmit}>submit</button><br/>

    {quantityerror && <p>{quantityerror}</p>}
    {emptyerror && <p>{emptyerror}</p>}
    {successmsg && <p>{successmsg}</p>}

    </>
  )
}

export default New