// @packages
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

// @app
import { searchInput, searchResults } from '../../utils/recoil';
import PlanetsFeed from '../../components/PlanetsFeed';
import SearchBox from '../../components/SearchBox';

// @own
import './styles.scss';

function SearchBoxContainer() {
  const [page, setPage] = useState(1);
  const [result, setResult] = useRecoilState(searchResults);
  const [loading, setLoading] = useState(false);

  const searchValue = useRecoilValue(searchInput);

  const getPlanets = () => {
    setLoading(false);
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://swapi.dev/api/planets/',
      params: {
        page,
        search: searchValue,
      },
    };

    axios.request(options).then(async function(response) {
      await
        setResult(response.data);
        setLoading(3000, true);
    }).catch(function (error) {
      console.error(error);
    });
  }

  function handlePressEnter(event) {
    if (event.keyCode === 13) {
      getPlanets();
      setPage(1);
    }
  }

  function handleSearch() {
    getPlanets();
    setPage(1);
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePrevPage() {
    if(page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', handlePressEnter);
    return () => document.removeEventListener('keypress', handlePressEnter);
  });

  useEffect(() =>{
    getPlanets();
  }, [page]);

  return (
    <div className="SearchBoxContainer">
      <SearchBox handleSearch={handleSearch} />
      {loading ? (
        <PlanetsFeed
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          nextPage={result?.next}
          page={page}
          planets={result?.results}
          prevPage={result?.previous}
        />
      ):(
        <CircularProgress sx={{ marginTop: '200px', marginLeft: '50%'}}/>
      )}
    </div>
  );
}

SearchBoxContainer.propTypes = {
  page: PropTypes.number,
}

 export default SearchBoxContainer;