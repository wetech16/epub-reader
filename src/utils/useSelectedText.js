import React, { useState } from "react";

export const useSelectedText = () => {
  const [selectedText, setSelectedText] = useState("");
  return [selectedText, setSelectedText];
};
export default useSelectedText;
