import type { Task } from "../utils";

interface Props {
    task: Task;
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
}

export const TaskCard = ({ task, onDelete, onEdit }: Props) => {
    return (
        <div className="border p-4 rounded shadow-sm bg-white hover:shadow-pink-400 w-full">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <div className="flex w-full gap-4 mt-4 text-sm">
                <button onClick={() => onEdit(task)} className="text-blue-700 hover:text-primary hover:underline">Edit</button>
                <button onClick={() => onDelete(task.id)} className="text-red-500 hover:underline">Delete</button>
            </div>
        </div>
    );
};
