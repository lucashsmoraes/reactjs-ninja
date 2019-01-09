'user strict'

import React from 'react'
import './user-info.css'

const UserInfo = ({ userInfo }) => (
  <div className='user-info'>
    <img src={userInfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li> Repositórios: {userInfo.repos}</li>
      <li> Seguidores: {userInfo.followers}</li>
      <li> Seguindo: {userInfo.following}</li>
    </ul>
  </div>
)

export default UserInfo
