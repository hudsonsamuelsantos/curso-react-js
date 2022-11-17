import styles from "./app.module.css"

import { Header } from "./components/header"
import { Footer } from "./components/footer"

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2>conteudo</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
