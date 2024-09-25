import React, { useState } from 'react';
import LoginModal from './LoginModal'; // Adjust the path as necessary
import ForgotPasswordModal from './ForgotPasswordModal'; // Create this component

const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
    console.log("Login Modal opened");
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
    console.log("Login Modal closed");
  };

  const openForgotPasswordModal = () => {
    setLoginOpen(false); // Close Login Modal
    setForgotPasswordOpen(true); // Open Forgot Password Modal
    console.log("Forgot Password Modal opened");
  };

  const closeForgotPasswordModal = () => {
    setForgotPasswordOpen(false);
    console.log("Forgot Password Modal closed");
  };

  return (
    <div>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeLoginModal} 
        onForgotPassword={openForgotPasswordModal} 
      />
      <ForgotPasswordModal 
        isOpen={isForgotPasswordOpen} 
        onClose={closeForgotPasswordModal} 
      />
    </div>
  );
};

export default App;
