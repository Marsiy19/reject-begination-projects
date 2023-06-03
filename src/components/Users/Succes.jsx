import React from 'react';

export const Success = ({ count, onClickSuccess }) => {
  return (
    <div className="success-block">
<i className='bx text-green-600 bxs-check-circle text-9xl'></i>      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      {/* <button onClick={() => onClickSuccess() } className="send-invite-btn">Назад</button> */}

      <button onClick={() => window.location.reload() } className="send-invite-btn">Назад</button>
    </div>
  );
};
