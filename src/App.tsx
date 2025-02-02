import { useState } from "react";

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState('');
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
    setText('');
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value='' onChange={(e) => e.preventDefault()} />
        <input type="submit" value='追加' onSubmit={(e) => e.preventDefault()}/>
      </form>

    </div>
  );
};