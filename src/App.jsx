import { useState } from "react";

function App() {
  const [starStories, setStarStories] = useState([]);
  const [newStory, setNewStory] = useState({ situation: "", task: "", action: "", result: "" });

  const addStory = () => {
    setStarStories([...starStories, newStory]);
    setNewStory({ situation: "", task: "", action: "", result: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">PM Interview Coaching Dashboard</h1>

      {/* Career Section */}
      <div className="bg-white shadow-md rounded p-4 space-y-2">
        <h2 className="text-xl font-semibold">🎯 Career Targeting</h2>
        <input className="border w-full p-2 rounded" placeholder="Target Role" />
        <input className="border w-full p-2 rounded" placeholder="Desired Companies" />
        <input className="border w-full p-2 rounded" placeholder="Preferred Locations" />
      </div>

      {/* STAR Story Section */}
      <div className="bg-white shadow-md rounded p-4 space-y-2">
        <h2 className="text-xl font-semibold">📚 STAR Story Bank</h2>
        <textarea className="border w-full p-2 rounded" placeholder="Situation" value={newStory.situation} onChange={e => setNewStory({ ...newStory, situation: e.target.value })} />
        <textarea className="border w-full p-2 rounded" placeholder="Task" value={newStory.task} onChange={e => setNewStory({ ...newStory, task: e.target.value })} />
        <textarea className="border w-full p-2 rounded" placeholder="Action" value={newStory.action} onChange={e => setNewStory({ ...newStory, action: e.target.value })} />
        <textarea className="border w-full p-2 rounded" placeholder="Result" value={newStory.result} onChange={e => setNewStory({ ...newStory, result: e.target.value })} />
        <button onClick={addStory} className="bg-blue-600 text-white px-4 py-2 rounded">Add Story</button>

        <ul className="space-y-2 mt-4">
          {starStories.map((story, i) => (
            <li key={i} className="border p-3 rounded bg-gray-50">
              <strong>Story {i + 1}</strong><br />
              <strong>S:</strong> {story.situation}<br />
              <strong>T:</strong> {story.task}<br />
              <strong>A:</strong> {story.action}<br />
              <strong>R:</strong> {story.result}
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly Tracker */}
      <div className="bg-white shadow-md rounded p-4 space-y-2">
        <h2 className="text-xl font-semibold">🗓️ Weekly Goals</h2>
        <input className="border w-full p-2 rounded" placeholder="This week's focus (e.g., Mock Interview, Product Sense)" />
        <input className="border w-full p-2 rounded" placeholder="Reflect on what you learned this week" />
      </div>
    </div>
  );
}

export default App;
