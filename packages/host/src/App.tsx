import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import "./App.css";
import { useState } from "react";
import { getCookie, setCookie } from "../src/components/Helpers/utils";

const App = () => {
  const [color, setColor] = useState<string>(getCookie("color") || "#e66465");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color: string = e.target.value;
    setCookie("color", color);
    setColor(color);
  };

  return (
    <div className="container">
      <h5 className="header">Change Chat Color: </h5>
      <ColorPicker value={color} onChange={handleColorChange} />
      <ChatBotIFrame />
    </div>
  );
};

export default App;
