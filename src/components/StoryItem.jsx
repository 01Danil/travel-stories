import React from "react";

const StoryItem = ({ story, onDelete, onEdit }) => {
  return (
    <li>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <p>
        <strong>City:</strong> {story.city}
      </p>
      <button onClick={onEdit}>Edit</button> {/* Кнопка для редактирования */}
      <button onClick={() => onDelete(story.id)}>Delete</button>
    </li>
  );
};

export default StoryItem;
