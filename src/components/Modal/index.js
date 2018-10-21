/**
 * Created by Ace on 2018. 10. 14..
 */
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    width: '390px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom : 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

ReactModal.setAppElement('#root')

class Modal extends Component {
  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    const {
      open,
      children
    } = this.props;
    return (
      <ReactModal
        isOpen={open}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        {children}
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  currentLabel: PropTypes.object,
};

export default Modal;