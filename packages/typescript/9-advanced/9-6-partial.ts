{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn typescript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  // 기존 객체에서 priority를 low로 변경
  const updated = updateTodo(todo, { priority: "low" });
}
