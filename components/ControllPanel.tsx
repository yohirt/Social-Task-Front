import React from 'react';

const ControlPanel = ({ handleAddPlace }) => {
  return (
    <div className="controll-panel">
      <div className="container">
        <span className="ml-3 hidden sm:block">
          <button onClick={handleAddPlace} type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Join
          </button>
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;