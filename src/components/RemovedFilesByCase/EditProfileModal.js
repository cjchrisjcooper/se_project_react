import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const EditProfileModal = ({
  handleCloseModal,
  isOpen,
  onEditProfileSubmit,
}) => {
  const currentUser = useContext(CurrentUserContext);
  //you need to change these to Register modal state fields

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [avatar, setavatar] = useState("");
  const handleAvatarUrlChange = (e) => {
    console.log(e.target.value);
    setavatar(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEditProfileSubmit({ name, avatar });
  };

  //same thing with this as well

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setavatar(currentUser.avatar);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleFormSubmit}
      buttonText="Save Changes"
      title="Change profile data"
    >
      <label htmlFor="name" className="modal_label-text">
        Name*
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
        Avatar Url*
        <input
          type="url"
          name="avatarUrl"
          id="avatarUrl"
          minLength="1"
          maxLength="250"
          placeholder="Avatar-URL"
          className="modal__input"
          value={avatar}
          onChange={handleAvatarUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
