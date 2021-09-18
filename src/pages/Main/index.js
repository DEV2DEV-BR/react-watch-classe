import styles from './styles.module.scss';
import { WatchClasse } from '../../components/WatchClasse'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const classesList = [
  {
    id: 1,
    links: [
      {
        title: "Link",
        url: ""
      }
    ]
  }
]

export function Main() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
        </main>
        <Footer />
        <WatchClasse
          videoUrl=""
          nameClasse=""
          description=""
          links={ }
        />
      </div>
    </>
  );
}

