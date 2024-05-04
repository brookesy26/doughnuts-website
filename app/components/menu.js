"use client"
import HeaderBar from "./header";
import NavigationBar from "./nav";
import { useState } from "react";


export default function MenuArea() {
  const [expandedState, setExpandedState] = useState("false");
  const [navState, setNavState] = useState("closed");

  //  handle function for toggleing open / closed on nav, changing state
  const handleToggle = () => {
    const newState = expandedState === "false" ? "true" : "false";
    const navClass = navState === "closed" ? "open" : "closed";
    setExpandedState(newState);
    setNavState(navClass)
  }
  return (
    <header>
      {/*header bar conttaining button and link*/}
      <HeaderBar
        eventCall={handleToggle}
        menuState={expandedState}
      />
      {/* nav bar - nav / ul / li*/}
      <NavigationBar
        nameState={navState} />
    </header>
  );
}

