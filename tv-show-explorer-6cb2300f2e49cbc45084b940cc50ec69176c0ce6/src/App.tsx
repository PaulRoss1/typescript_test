import React, { useState } from "react";
import "./App.scss";
import "./themes/light-theme.scss";
import "./themes/dark-theme.scss";
import Search from "./components/Search";
import ShowInfo from "./components/ShowInfo";
import Graph from "./components/Graph";

import { ShowData, ShowDataError } from "./api/interfaces";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [showData, setShowData] = useState<ShowData | ShowDataError | null>(
    null
  );
  const [searchedShow, setSearchedShow] = useState("");

  const searchProps = {
    setTheme,
    setSearchedShow,
  };

  const showInfoProps = {
    showData,
  };

  const graphProps = {
    searchedShow,
    showData,
    setShowData,
  };

  return (
    <div className="App" id={theme}>
      <Search {...searchProps} />

      <ShowInfo {...showInfoProps} />

      <Graph {...graphProps} />
    </div>
  );
}
