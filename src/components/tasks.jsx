import React, { useState } from "react";

const Tasks = ({ name, removeTask, onRename }) => {
  const [editMode, setEditMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`pt-6 ${isChecked ? "opacity-30 line-through text-white" : ""}`}>
      <div className="text-white space-x-3 bg-gray-700 py-2 px-4 rounded-xl shadow-lg relative">
        <input
          className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {!editMode && (
          <>
            <span onClick={() => setEditMode((prev) => !prev)}>
              {name}
            </span>
          </>
        )}

        {editMode && (
          <>
            <input
              className="bg-gray-700 px-2 rounded-xl"
              type="text"
              value={name}
              onChange={(e) => onRename(e.target.value)}
              onBlur={() => setEditMode(false)}
            />
          </>
        )}
        <span
          onClick={removeTask}
          className="flex justify-end cursor-pointer absolute right-2 top-[6px] text-xl bg-red-500 p-1 rounded-xl shadow-xl hover:scale-105 duration-300"
        >
          <ion-icon name="trash"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default Tasks;
