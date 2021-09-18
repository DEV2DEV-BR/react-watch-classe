import styles from './styles.module.scss';

export function CardClasse({ classeId, cover, title, openModal }) {
  return (
    <div
      className={styles.container}
      onClick={() => openModal(classeId)}>
      <img src={cover} alt="cover" />
      <strong>{title}</strong>
    </div >
  );
}