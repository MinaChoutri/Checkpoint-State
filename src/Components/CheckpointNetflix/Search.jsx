import React from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <form>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
        />
        <input onClick={() => {}} type="submit" value="SEARCH" />
      </form>
    </div>
  );
};

export default Search;
