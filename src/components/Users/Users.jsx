import React from 'react';
import Skeleton from './Skeleton'
import { User } from './User';

export const Users = ({ items, isLoading, searchValue, onChangeValue, invates, onClickInvated, onClickSuccess }) => {
  return (
    <>
      <div className="search">
        <i className="bx bx-search"></i>
        <input value={searchValue} onChange={onChangeValue} type="text" placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {
            items.filter(obj => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              
              return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())

            }).map((item) => (
              <User onClickInvated={onClickInvated} IsInvated={invates.includes(item.id)} key={item.id} {...item} />
            ))
          }
        </ul>
      )}
      {
        invates.length > 0 && 
        <button onClick={() => onClickSuccess()} className="send-invite-btn">Отправить приглашение</button>
      }
    </>
  );
};
