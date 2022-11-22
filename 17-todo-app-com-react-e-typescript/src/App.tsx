import styles from "./app.module.css"

import { useState } from "react";

import { ITask } from "./interfaces/Task";

import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { TaskForm } from "./components/taskForm";
import { TaskList } from "./components/taskList";
import { Modal } from "./components/modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")

    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)

    setTaskToUpdate(task)
  }

  return (
    <div>
      <Modal
        children={<TaskForm
          btnText="Editar tarefa"
          taskList={taskList}
          task={taskToUpdate}
        />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
