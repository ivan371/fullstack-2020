import React from "react";

interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isModalOpen,
  setIsModalOpen,
}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={() => setIsModalOpen(false)}>
      <div
        className="modal__inner"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="post">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
