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
  videoUrl,
  nameClasse,
  description,
  links
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ReactPlayer
        url={videoUrl}
        controls
      />

      <h3>{nameClasse}</h3>
      <span>{description}</span>

      {links && links.map(link => (
        <a key={link.url} href={link.url}>{link.title}</a>
      ))}

    </Modal>
  );
}