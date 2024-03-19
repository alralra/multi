import React, { useState } from "react";
function ChangeFont() {
  const [value, setValue] = useState("안녕하세요");
  const [font, setFont] = useState("50px");
  const fstyle = { fontSize: font };
  return (
    <div>
      <div style={fstyle}>{value}</div>
    </div>
  );
}
export default ChangeFont;
