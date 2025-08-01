



import PropTypes from "prop-types";

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <strong>{task.title}</strong>
      <span> - {task.status}</span>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;