import { useState } from "react";

type Todo = {
  value: string;
};

export const TaskForm = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      value: text,
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText("");
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
       console.log(e)
      }}>
        <input
          type="text"
          placeholder="enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="追加"
          onSubmit={(e) => e.preventDefault()}
        />
      </form>
      <p>im using react now</p>
    </div>
  );
};
