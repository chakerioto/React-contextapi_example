import React, { useState } from 'react';
import UserContext, { UserProvider } from './context/Context';
import Index from './user/Index';

function App() {
  const [user, setUser] = useState({ name: 'tang', age: 16 });

  return (
    <UserProvider value={user}>
      <div className="App">
        hahahahaha
        <Index />
      </div>
    </UserProvider>
  );
}

export default App;
