import React, { useState, useEffect } from "react";
import StoryForm from "./StoryForm";
import StoryItem from "./StoryItem";
import FilterBar from "./FilterBar";
import "./StoryList.css";

const StoryList = () => {
  const loadStories = () => {
    const savedStories = localStorage.getItem("stories");
    return savedStories
      ? JSON.parse(savedStories)
      : [
          {
            id: 1,
            title: "Trip to Dublin",
            description: "I visited Trinity College.",
            city: "Dublin",
          },
          {
            id: 2,
            title: "Wicklow Adventures",
            description: "Exploring the Wicklow Mountains.",
            city: "Wicklow",
          },
          {
            id: 3,
            title: "Trip to Cork",
            description:
              "Ireland's third largest city was once an island; it now stretches along both banks of the River Li, with canals running underneath some of the busy streets",
            city: "Cork",
          },
          {
            id: 4,
            title: "Trip to Galway",
            description: "Here you will find lively pubs, private shops and winding cobbled streets filled with students, artists, writers and artisans.",
            city: "Galway",
          },
          {
            id: 5,
            title: "Trip to Limerick",
            description: "Limerick is a city-county on the west coast of Ireland. It is located in a very picturesque region, on the banks of the River Shannon, and in its very center on the island.",
            city: "Limerick",
          },
        ];
  };

  const [stories, setStories] = useState(loadStories());
  const [filteredStories, setFilteredStories] = useState(stories);
  const [storyToEdit, setStoryToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  const addStory = (newStory) => {
    setStories([...stories, { ...newStory, id: Date.now() }]);
  };

  const deleteStory = (id) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  const editStory = (updatedStory) => {
    setStories(
      stories.map((story) =>
        story.id === updatedStory.id ? { ...story, ...updatedStory } : story
      )
    );
    setStoryToEdit(null); // Закрыть режим редактирования
  };

  const filterStories = (query) => {
    setFilteredStories(
      stories.filter((story) =>
        story.city?.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Travel Stories</h1>
      <FilterBar onSearch={filterStories} />
      <StoryForm
        onAddStory={addStory}
        onEditStory={editStory}
        storyToEdit={storyToEdit}
      />
      <ul>
        {filteredStories.map((story) => (
          <StoryItem
            key={story.id}
            story={story}
            onDelete={deleteStory}
            onEdit={() => setStoryToEdit(story)} // Активируем редактирование
          />
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
