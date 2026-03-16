'use client';

import { useState, useEffect } from "react";
import { fetchTasks } from "./lib/taskService";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

useEffect(() => {
  const loadTasks = async () => {
    const fetchedTasks = await fetchTasks();

    setTasks(fetchedTasks);
  };
  loadTasks();
}, []);

return (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Task List</h1>
    <ul>
      {/* Render each task in the list */}
      {tasks.map((task) => (
        <li key={task.id} className="mb-2">
          <input type="checkbox"
          checked={task.completed}
          readOnly
          className="mr-2"
          />
          {task.title}
        </li>
      ))}
    </ul>
  </div>
)

}