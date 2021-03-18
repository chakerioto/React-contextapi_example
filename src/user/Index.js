import React, { useContext } from 'react';
import UserContext from '../context/Context';
const Index = () => {
  const user = useContext(UserContext);

  console.log(user);
  return (
    <div>{`This is ${user.name} and now he is ${user.age} years old`}</div>
  );
};

export default Index;
