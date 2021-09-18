import styles from './styles.module.scss';
import { WatchClasse } from '../../components/WatchClasse'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CardClasse } from '../../components/CardClasse';

const classesList = [
  {
    id: 1,
    cover: "https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png",
    title: "1. Criando o projeto",
    links: [
      {
        title: "Link",
        url: ""
      }
    ]
  },
  {
    id: 2,
    cover: "https://css-tricks.com/wp-content/uploads/2018/04/react.jpg",
    title: "2. Configurando o css",
    links: [
      {
        title: "Link",
        url: ""
      }
    ]
  },
  {
    id: 3,
    cover: "https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg",
    title: "3. Criando o component Watch Classe",
    links: [
      {
        title: "Link",
        url: ""
      }
    ]
  }
]

export function Main() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <CardClasse />
        </main>
        <Footer />
        <WatchClasse
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          videoUrl=""
          nameClasse=""
          description=""
          links={ }
        />
      </div>
    </>
  );
}

