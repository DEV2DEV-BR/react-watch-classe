import styles from './styles.module.scss';

export function CardClasse({ cover, title }) {
  return (
    <div>
      <img src={cover} alt="cover" />
      <strong>{title}</strong>
    </div>
  );
}