import { useState } from "react";
import type { Task } from "../utils";
import { toast } from "react-toastify";
import { TaskCard } from "../components/TaskCard";
import { TaskModal } from "../components/TaskModal";

export const Home = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const addTask = () => {
        if (title.trim() && description.trim()) {
            setTasks([...tasks, {
                id: Date.now().toString(),
                title,
                description,
                isEditing: false
            }]);
            toast.success("Task added!");
            setTitle("");
            setDescription("");
        } else {
            toast.error("Please fill in all fields.");
        }
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
        toast.success("Deleted.");
    };

    const updateTask = (id: string, updatedFields: Partial<Omit<Task, "id">>) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, ...updatedFields } : task
        ));
        toast.success("Updated.");
    };

    return (
        <div className="min-h-screen w-screen">
            <div className="py-2 px-4 w-full md:w-[90%] mx-auto">
                <h2 className="text-primary text-2xl font-bold mb-4">Todo List</h2>

                <div className="flex flex-col gap-2 max-w-xl bg-gradient-to-r from-violet-200 to-pink-200 mx-auto rounded py-4 px-8 mb-6">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border text-black rounded p-2 w-full mb-4"
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border text-black rounded p-2 w-full mb-6"
                    ></textarea>

                    <button onClick={addTask} className="bg-primary text-white px-4 py-2 w-[80%] mx-auto rounded">
                        Add Task
                    </button>
                </div>

                <div className="mt-2">
                    <h2 className="text-primary text-xl font-bold mb-4">Added Tasks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {tasks.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onDelete={deleteTask}
                                onEdit={setEditingTask}
                            />
                        ))}
                    </div>
                </div>

                {editingTask && (
                    <TaskModal
                        task={editingTask}
                        onUpdate={updateTask}
                        onClose={() => setEditingTask(null)}
                    />
                )}
            </div>
        </div>
    );
};