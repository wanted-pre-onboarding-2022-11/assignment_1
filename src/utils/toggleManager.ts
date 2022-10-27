import { todoAPI } from "@/apis";
import { ITodo } from "@/types";
import debounce from "@/utils/debounce";

class ToggleManager {
  todoQueue: ITodo[] = [];

  toggleTodo(toggledTodo: ITodo) {
    const existingTaskIdx = this.todoQueue.findIndex((todo) => todo.id === toggledTodo.id);
    if (existingTaskIdx > -1) {
      this.todoQueue.splice(existingTaskIdx, 1);
    } else {
      this.todoQueue.push({ ...toggledTodo });
    }
    debounce(async () => {
      await this.run();
    }, 1000)();
  }

  private async run() {
    while (this.todoQueue.length > 0) {
      const todo = this.todoQueue.shift() as ITodo;
      // eslint-disable-next-line
      await todoAPI.updateTodo(todo.id, {
        todo: todo.todo,
        isCompleted: !todo.isCompleted,
      });
    }
  }
}

const todoManager = new ToggleManager();

export default todoManager;
