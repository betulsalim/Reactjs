import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { get } from 'mongoose'

const BASE_URL = 'http://localhost:3005'

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    //console.log(response.data);
  }

  const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + '/users/' + id)
    return response.data.postId
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`,
    newUser)
    //console.log("Response: ", response.data);
  }

  const updateUser = async (id, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${id}`,
    updatedUser)
    //console.log("Response: ", response.data);
  }

  const deleteUser = async (id) => {
    const response = await axios.delete(`${BASE_URL}/users/${id}`)
    //console.log("Response: ", response.data);
  }

  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data
  }

  const getPost = async () => {
      const postId = await getUserById(1)
      const postData = await getPostById(postId)
      console.log(postData);
  }


  useEffect(() => {
    getPost()
    // getAllUsers()
    // }
    // updateUser("2", updatedUser)
    // deleteUser(3)
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
