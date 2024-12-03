import React from "react";

const ExpandIcon = ({ isExpanded, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: "pointer", marginRight: "10px" }}>
      {isExpanded ? "➖" : "➕"}
    </span>
  );
};

export default ExpandIcon;
