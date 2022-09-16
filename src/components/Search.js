import React from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";

function Search({ characters, setCharacter }) {
  return (
    <div className="search">
      <Autocomplete
        options={characters}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            placeholder="Search Heroes..."
          />
        )}
        onChange={(e) => setCharacter(e.target.textContent)}
      />
    </div>
  );
}

export default Search;
