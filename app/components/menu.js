"use client"
import HeaderBar from "./header";
import NavigationBar from "./nav";
import { useState } from "react";

export default function MenuArea() {
  const [expandedState, setExpandedState] = useState("false");
  const [navState, setNavState] = useState("closed");


  const handleToggle = () => {
    const newState = expandedState === "false" ? "true" : "false";
    const navClass = navState === "closed" ? "open" : "closed";
    setExpandedState(newState);
    setNavState(navClass)
  }
  return (
    <>
      <HeaderBar
        eventCall={handleToggle}
        menuState={expandedState}
      />
      <NavigationBar
        nameState={navState} />
    </>

  );
}

