import styles from './styles.module.scss';
import { WatchClasse } from '../../components/WatchClasse'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CardClasse } from '../../components/CardClasse';
import { useState } from 'react';

const classesList = [
  {
    id: 1,
    cover: "https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png",
    title: "1. Criando o projeto",
    url: "https://www.youtube.com/watch?v=kolNylRoIrc",
    description: "Descrição da primeira aula",
    links: [
      { id: 1, url: "https://www.youtube.com/watch?v=kolNylRoIrc", title: "Título do link 1", },
      { id: 2, url: "https://www.youtube.com/watch?v=kolNylRoIrc", title: "Título do link 2", }
    ]
  },
  {
    id: 2,
    cover: "https://css-tricks.com/wp-content/uploads/2018/04/react.jpg",
    title: "2. Configurando o css",
    url: "https://www.youtube.com/watch?v=ilLwqcgJF4E&t=36s",
    description: "Descrição da primeira aula",
    links: [
      { id: 1, url: "https://www.youtube.com/watch?v=kolNylRoIrc", title: "Título do link 1", },
      { id: 2, url: "https://www.youtube.com/watch?v=kolNylRoIrc", title: "Título do link 2", }
    ]
  },
  {
    id: 3,
    cover: "https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg",
    title: "3. Criando o component Watch Classe",
    url: "https://www.youtube.com/watch?v=Xg1jD1AH3gQ&t=1161s",
    description: "Descrição da primeira aula",
    links: [
      { id: 1, url: "https://www.youtube.com/watch?v=kolNylRoIrc", title: "Título do link 1", },
      { id: 2, url: "https://www.youtube.com/watch?v=kolNylRoIrc", title: "Título do link 2", }
    ]
  }
]

export function Main() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentClasse, setCurrentClasse] = useState({
    id: 0,
    cover: '',
    url: '',
    description: '',
    title: '',
    links: []
  })

  function openModal(classeId) {
    const item = classesList.find(classe => classe.id === classeId)
    setCurrentClasse(item);

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
          {classesList.map(classe => (
            <CardClasse
              key={classe.id}
              classeId={classe.id}
              cover={classe.cover}
              title={classe.title}
              openModal={openModal}
            />
          ))}

        </main>
        <Footer />
        <WatchClasse
          videoUrl={currentClasse.url}
          nameClasse={currentClasse.title}
          description={currentClasse.description}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          links={currentClasse.links}
        />
      </div>
    </>
  );
}

