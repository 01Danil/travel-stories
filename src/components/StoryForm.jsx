import React, { useState, useEffect } from "react";

const StoryForm = ({ onAddStory, onEditStory, storyToEdit }) => {
  const [newStory, setNewStory] = useState({
    title: "",
    description: "",
    city: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
   if (storyToEdit) {
     setNewStory({
        title: storyToEdit.title,
        description: storyToEdit.description,
        city: storyToEdit.city,
      });
   }
  }, [storyToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newStory.title.trim() ||
      !newStory.description.trim() ||
      !newStory.city.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    if (storyToEdit) {
      onEditStory({ ...newStory, id: storyToEdit.id });
    } else {
      onAddStory(newStory);
    }

    setNewStory({ title: "", description: "", city: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Story title"
        value={newStory.title}
        onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
      />
      <textarea
        placeholder="Story description"
        value={newStory.description}
        onChange={(e) =>
          setNewStory({ ...newStory, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={newStory.city}
        onChange={(e) => setNewStory({ ...newStory, city: e.target.value })}
      />
      <button type="submit">
        {storyToEdit ? "Update Story" : "Add Story"}
      </button>
    </form>
  );
};

export default StoryForm;
