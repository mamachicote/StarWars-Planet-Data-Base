// @packages
import React from 'react';
import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// @app
import { searchInput, planetList } from '../../utils/recoil';

// @own
import './styles.scss';

function SearchBox({ handleSearch }) {
  const [input, setInput] = useRecoilState(searchInput);

  const planetCounter = useRecoilValue(planetList).length;

  const history = useHistory();

  return (
    <div className="SearchBox">
      <TextField
        className="SearchBox__Input"
        label="Look up your planet"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        variant="standard"
        sx={{
          color: '#fafafa',
        }}
      />
      <Button
        className="SearchBox__Button"
        onClick={handleSearch}
        variant="contained"
        sx={{
          fontWeight: 'bold',
        }}
      >
        Search
      </Button>
      <Button
        className="SearchBox__Button"
        disabled={planetCounter <= 0}
        onClick={() => history.push('/your-planets')}
        variant="contained"
        sx={{
          fontWeight: 'bold',
        }}
      >
        Your planets
      </Button>
    </div>
  );
}

 export default SearchBox;