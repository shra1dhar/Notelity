import React, { useEffect } from 'react';
import { useState } from 'react';
import { disconnectSocket, initiateSocket, subscribeToChat } from '../../../global/constants/socket';
import './colab.scss';

const Collaboration = () => {
  const [inputText, setinputTet] = useState<string>('');
  const [chat, setChat] = useState<any>([]);

  useEffect(() => {
    const rooms = ['A', 'B', 'C'];

    initiateSocket(rooms);
    subscribeToChat((err, data) => {
      if (err) return;
      console.log('data from socket:', data);
      setChat((oldChats: any) => [data, ...oldChats]);
    });

    return () => disconnectSocket();
  }, []);

  return (
    <div className="collaboration">
      <div className="show-area">{chat}</div>
      <div className="type-area">
        <textarea
          value={inputText}
          onChange={(e) => setinputTet(e.target.value)}
          name="colab-text"
          className="colab-workspace"
        />
      </div>
    </div>
  );
};

export default Collaboration;
