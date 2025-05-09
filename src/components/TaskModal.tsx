import { useState } from "react";
import type { Task } from "../utils";

interface TaskModalProps {
    task: Task;
    onUpdate: (id: string, fields: Partial<Omit<Task, "id">>) => void;
    onClose: () => void;
}

export const TaskModal = ({ task, onUpdate, onClose }: TaskModalProps) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSubmit = () => {
        onUpdate(task.id, { title, description });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded p-6 h-auto w-[90%] max-w-md shadow-lg">
                <h2 className="text-primary text-lg font-bold mb-4">Edit Task</h2>
                <label className="font-semibold" htmlFor="title">Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border text-black text-sm rounded mt-1 p-2 w-full mb-4"
                />

                <label className="font-semibold" htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border text-black text-sm rounded mt-1 p-2 w-full h-full min-h-40 resize-none "
                ></textarea>

                <div className="flex justify-end gap-2 mt-4 text-sm">
                    <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Cancel</button>
                    <button onClick={handleSubmit} className="px-4 py-2 rounded bg-primary text-white">Update</button>
                </div>
            </div>
        </div>
    );
};
