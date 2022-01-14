// @packages
import React from 'react';

// @app
import PlanetList from '../../components/PlanetList';

function PlanetListContainer() {

  return (
    <div className="SearchBoxContainer">
      <h1>Your favorite planets</h1>
      <PlanetList />
    </div>
  );
}

 export default PlanetListContainer;