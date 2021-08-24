import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Task } from "./Task";

export const Content = () => {
  const [selectedTab, setselectedTab] = useState("INBOX");
  return (
    <section className="content">
      <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
      <Tasks selectedTab={selectedTab} />
    </section>
  );
};
