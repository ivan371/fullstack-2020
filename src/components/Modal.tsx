import React from "react";
import { useDispatch} from 'react-redux'
import {closeModal} from '../actions/modal'

interface IModalProps {
  isModalOpen: boolean;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isModalOpen
}) => {
  const dispatch = useDispatch()

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={() => dispatch(closeModal())}>
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
