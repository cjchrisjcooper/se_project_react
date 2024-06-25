import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LogInModal = ({
  handleCloseModal,
  onLogInUser,
  isOpen,
  handleModalRedirect,
}) => {
  //you need to change these to Register modal state fields

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onLogInUser(email, password);
  };

  //same thing with this as well

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleFormSubmit}
      buttonText="Log in"
      title="Log in"
      modalRedirectButtonText="or Sign Up"
      modalFormRedirect={handleModalRedirect}
    >
      <label htmlFor="email" className="modal_label-text">
        Email
        <input
          type="text"
          id="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          className="modal__input"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password" className="modal_label-text">
        Password
        <input
          type="text"
          name="password"
          id="password"
          minLength="1"
          maxLength="250"
          placeholder="Password"
          className="modal__input"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LogInModal;
