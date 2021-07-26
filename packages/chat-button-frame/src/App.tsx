import logo from "./chat.png";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { getCookie } from "../src/Helpers/utils";

function App() {
  let [color, setColor] = useState<string>(getCookie("color") || "#e66465");

  //custom cookie event to check if cookies have changed
  const cookieEvent = useMemo(
    () =>
      new CustomEvent("cookieChanged", {
        bubbles: true,
        detail: {
          cookieValue: document.cookie,
          checkChange: () => {
            if (cookieEvent.detail.cookieValue !== document.cookie) {
              cookieEvent.detail.cookieValue = document.cookie;
              return 1;
            } else {
              return 0;
            }
          },
          listenCheckChange: () => {
            setInterval(() => {
              if (cookieEvent.detail.checkChange() === 1) {
                cookieEvent.detail.changed = true;
                //fire the event
                cookieEvent.target?.dispatchEvent(cookieEvent);
              } else {
                cookieEvent.detail.changed = false;
              }
            }, 10);
          },
          changed: false,
        },
      }),
    []
  );

  //on load, adds custom cookie event
  useEffect(() => {
    document.body.dispatchEvent(cookieEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //listens for cookie changes
  document.addEventListener("cookieChanged", (e: CustomEventInit) => {
    //checks for changes to cookies
    e.detail.listenCheckChange();
    if (e.detail.changed === true) {
      //set color to new cookie's color
      setColor(getCookie("color"));
    }
  });

  return (
    <div className="App">
      <div className="chat-icon" style={{ backgroundColor: color }}>
        <img src={logo} className="chat-icon-image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
