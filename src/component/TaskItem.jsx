function TaskItem({ task }) {
  return (
    <div className="task-item">
      <strong>{task.title}</strong>
      <span> - {task.status}</span>
    </div>
  );
}

export default TaskItem;