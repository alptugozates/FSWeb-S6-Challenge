import React, { useState } from "react";

export default function Accordeon(props) {
  const { title, children } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordeon ${open ? "open" : ""}`}>
      <div className="acc-title" onClick={() => setOpen(!open)}>
        <div>{title}</div>
        <div className="arrow">{`>`}</div>
      </div>
      {children}
    </div>
  );
}
