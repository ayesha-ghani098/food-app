import React, { useState } from 'react';

const Adddata = () => {
    const [image , setImage] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');

    const handleChange = () =>{

    }

  return (
    <div>
 <input name="file" type="file" placeholder='insert image' onChange={(e)=>setImage(e.target.value[0])}/>
 <input name="name" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
 <input name="description" placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
 <input name="price" placeholder='price' onChange={(e)=>setPrice(e.target.value)}/>
    </div>
  )
}

export default Adddata