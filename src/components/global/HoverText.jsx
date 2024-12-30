import React, { useEffect, useState } from "react";
import './index.css'; // Import your Tailwind CSS file
import NoteForm from "./components/NoteForm";

const HoverText = () => {
  const [tooltip, setTooltip] = useState({ text: "", x: 0, y: 0, visible: false });

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const hoverPopup = target.getAttribute('hovermsg');
      
      if (hoverPopup) {
        const rect = target.getBoundingClientRect();
        setTooltip({
          text: hoverPopup,
          x: rect.left + window.scrollX + rect.width / 2,
          y: rect.top + window.scrollY - 10,
          visible: true,
        });
      }
    };

    const handleMouseOut = () => {
      setTooltip({ ...tooltip, visible: false });
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [tooltip]);

  return (
    <div>
      {/* Tooltip */}
      {tooltip.visible && (
        <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg z-10" style={{ top: tooltip.y, left: tooltip.x, transform: 'translateX(-50%)' }} >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default HoverText;
