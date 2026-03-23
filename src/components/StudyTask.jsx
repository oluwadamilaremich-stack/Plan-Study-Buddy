import React from 'react';
import { useStudy } from '../context/StudyContext';
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const StudyTask = ({ task }) => {
  const { addStudyStats } = useStudy();
  const [isDone, setIsDone] = React.useState(false);

  const handleComplete = () => {
    if (!isDone) {
      setIsDone(true);
      // This is the magic line that updates your Profile stats!
      addStudyStats('task', 1); 
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 mb-3 shadow-sm">
      <div className="flex items-center gap-3">
        <button onClick={handleComplete} className="text-[#14B8A6]">
          {isDone ? <FaCheckCircle size={24} /> : <FaRegCircle size={24} className="text-gray-300" />}
        </button>
        <span className={`font-bold ${isDone ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {task.name}
        </span>
      </div>
      <span className="text-[10px] font-black text-[#246690] bg-blue-50 px-3 py-1 rounded-full uppercase">
        {task.duration} mins
      </span>
    </div>
  );
};

export default StudyTask;