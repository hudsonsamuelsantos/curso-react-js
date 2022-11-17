import styles from "./app.module.css"

import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { TaskForm } from "./components/taskForm";
import { TaskList } from "./components/taskList";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" />
        </div>

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
