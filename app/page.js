"use client"
import HeaderBar from "../components/header"
import { useState } from "react";

export default function Home() {
  const [expandedState, setExpandedState] = useState("false");

  const handleToggle = () => {
    const newState = expandedState === "false" ? "true" : "false";
    console.log(newState)
    setExpandedState(newState);
  }
  return (
    <>
      <HeaderBar
        eventCall={handleToggle}
        buttonState={expandedState}
      />
    </>
  );
}
