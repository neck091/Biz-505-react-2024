"use client";

import React from "react";

const StuSearch = ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="검색어"
        value={search}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default StuSearch;
