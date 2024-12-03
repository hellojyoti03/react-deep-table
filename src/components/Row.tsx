import React, { useState } from "react";
import NestedRow from "./NestedRow";
import ExpandIcon from "./ExpandIcon";

const Row = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="row">
      <div className="row-content">
        <ExpandIcon isExpanded={isExpanded} onClick={toggleExpand} />
        <span>{data.label}</span>
      </div>
      {isExpanded && data.children && (
        <div className="nested-rows">
          {data.children.map((child, index) => (
            <NestedRow key={index} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Row;
