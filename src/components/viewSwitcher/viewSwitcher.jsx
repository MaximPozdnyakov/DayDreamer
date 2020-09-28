import React, { useState } from "react";
import './viewSwitcher.css';
import { ViewMode } from "../../types/public-types";

const modes = ['QuarterDay', 'HalfDay', 'Day', 'Week', 'Month'];
const titles = ['1/4 Дня', '1/2 Дня', 'День', 'Неделя', 'Месяц'];

export const ViewSwitcher = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
}) => {

  const [scale, setScale] = useState(2)

  return (
    <div className="switch-module">
      <div className="scale">
        <div className="scale-title">{titles[scale]}</div>
        <input type="range" min="0" max="4" 
          value={scale} onChange={e => {
            const i = parseInt(e.target.value);
            setScale(i);
            onViewModeChange(ViewMode[modes[i]])
          }}
        />
      </div>
      <label className="task-list">
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onClick={() => onViewListChange(!isChecked)}
        />
        Показать список задач
      </label>
    </div>
  );
};
