import React, { useState } from 'react';
import axios from 'axios';
import * as SC4 from './styled/Section4_passward_style';

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeCurrentPassword = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleChangeNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://your-backend-url/change-password', {
        currentPassword,
        newPassword,
      });

      if (response.data.success) {
        setMessage('Password changed successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          onClose();
          setMessage('');
        }, 2000);
      } else {
        setMessage('Password change failed!');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage('Password change failed!');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <SC4.Overlay>
      <SC4.Modal>
        <SC4.Title>Password Change</SC4.Title>
        <SC4.CloseButton onClick={onClose}>X</SC4.CloseButton>
        {message && <SC4.Message>{message}</SC4.Message>}
        <SC4.PasswordChangeForm onSubmit={handleSubmit}>
          <SC4.PasswordInput
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={handleChangeCurrentPassword}
            required
          />
          <SC4.PasswordInput
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            required
          />
          <SC4.PasswordInput
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
          />
          <SC4.PasswordSubmitButton type="submit">Change Password</SC4.PasswordSubmitButton>
        </SC4.PasswordChangeForm>
      </SC4.Modal>
    </SC4.Overlay>
  );
};

export default ChangePasswordModal;
