import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './Users';
import { Success } from './Succes';
import axios from 'axios';
import { json } from 'react-router-dom';

// Тут список пользователей: https://reqres.in/api/users

function Appqo() {

  const [users, setUsers] = useState([])

  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [invates, setInvates] = useState([])

  const [success, setSuccess] = useState(false)




  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setLoading(false))
  })

  const onChangeValue = (e) => {
    setSearchValue(e.target.value)
  }

  const onClickInvated = (id) => {
    if(invates.includes(id)) {
      setInvates(prev => prev.filter(_id => _id !== id ))
    } else {
      setInvates(prev => [...prev, id])
    }
  }

  const onClickSuccess = () => {
    setSuccess(!success)

  }





  return (
    <div className="App">

{
  success ?( <Success count={invates.length} onClickSuccess={onClickSuccess} />) : (

    <Users 
    onClickSuccess={onClickSuccess}
    invates={invates}
    onClickInvated={onClickInvated}
    searchValue={searchValue} onChangeValue={onChangeValue}  items={users} isLoading={isLoading}/>


  ) 
}


      
    </div>
  );
}

export default Appqo;
