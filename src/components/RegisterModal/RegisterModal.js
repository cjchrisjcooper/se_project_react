import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  onAddUser,
  isOpen,
  handleModalRedirect,
}) => {
  //you need to change these to Register modal state fields

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

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

  const [avatarUrl, setavatarUrl] = useState("");
  const handleAvatarUrlChange = (e) => {
    console.log(e.target.value);
    setavatarUrl(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddUser();
  };

  //same thing with this as well

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      handleAvatarUrlChange("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleFormSubmit}
      buttonText="Sign Up"
      title="Sign Up"
      modalRedirectButtonText="or Log In"
      modalFormRedirect={handleModalRedirect}
    >
      <label htmlFor="email" className="modal_label-text">
        Email
        <input
          type="email"
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
      <label htmlFor="name" className="modal_label-text">
        Name
        <input
          type="text"
          name="Name"
          id="Name"
          minLength="1"
          maxLength="250"
          placeholder="Name"
          className="modal__input"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal_label-text">
        Avatar Url
        <input
          type="url"
          name="avatarUrl"
          id="avatarUrl"
          minLength="1"
          maxLength="250"
          placeholder="Avatar-URL"
          className="modal__input"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
