import styles from './styles.module.scss';
import ReactPlayer from 'react-player'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function WatchClasse({
  modalIsOpen,
  closeModal,
  url,
  title,
  description
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </Modal>
  );
}