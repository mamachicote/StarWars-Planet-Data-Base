// @packages
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';

// @app
import { planetList } from '../../utils/recoil';

// @own
import './styles.scss';

function PlanetsFeed({
  handleNextPage,
  handlePrevPage,
  nextPage,
  page,
  planets,
  prevPage,
}) {
  const [addPlanet, setAddPlanet] = useRecoilState(planetList);

  const hasNextPage = nextPage === null;
  const hasPrevPage = prevPage === null;

  const isPlanetSelect = useRecoilValue(planetList)?.map(p => p?.name);

  function handleAddToList(p) {
    const favsPlanets = [
      ...addPlanet,
    {
      name: p?.name,
      diameter: p?.diameter,
      climate: p?.climate,
      terrain: p?.terrain,
    }];
    setAddPlanet(favsPlanets);
  }

  return (
    <>
      <div className="Planet-Feed">
        {planets?.map(p => (
            <Card
              className="Planet-Feed__Card"
              variant="outlined"
              sx={[
                {
                  '&:hover': {
                    borderColor: '#1565C0',
                }},
                {
                  backgroundColor: '#a8a2a3',
                  borderColor: '#fafafa',
              }]}
            >
              <CardContent>
                <h3 className="Planet-Feed__Card-Header">{p?.name}</h3>
                <p className="Planet-Feed__Card-Content"><b>Diameter:</b> {p?.diameter}.</p>
                <p className="Planet-Feed__Card-Content"><b>Climate:</b> {p?.climate}.</p>
                <p className="Planet-Feed__Card-Content"><b>Terrain:</b> {p?.terrain}.</p>
              </CardContent>
              <CardActions>
                <Button
                  className="Planet-Feed__Card-Content"
                  onClick={() => handleAddToList(p)}
                  disabled={isPlanetSelect.find(q => q === p?.name) === p?.name}
                  sx={[
                    {
                      '&:hover': {
                        color: '#fafafa',
                        backgroundColor: '#1565C0',
                    }},
                    {
                      '&:disabled': {
                        color: '##6E697D',
                        backgroundColor: '#948e8f',
                    }},
                    {
                      color: '#fafafa',
                      backgroundColor: '#1678e0',
                      fontWeight: 'bold',
                    }
                  ]}
                >
                  Add to your list
                </Button>
              </CardActions>
            </Card>
        ))}
      </div>
      <div className="Planet-Feed__Pagination">
        {hasPrevPage && hasNextPage ? (
          '-'
        ):(
          <>
            <Button
              className="Planet-Feed__Pagination-Button"
              disabled={hasPrevPage}
              onClick={handlePrevPage}
              sx={[
                {
                  '&:hover': {
                    color: '#fafafa',
                    backgroundColor: '#1565C0',
                }},
                {
                  fontWeight: 'bold',
                }
              ]}
            >
              Back
            </Button>
            <div className="Planet-Feed__Pagination-Number">{page}</div>
            <Button
              className="Planet-Feed__Pagination-Button"
              disabled={hasNextPage}
              onClick={handleNextPage}
              sx={[
                {
                  '&:hover': {
                    color: '#fafafa',
                    backgroundColor: '#1565C0',
                }},
                {
                  fontWeight: 'bold',
                }
              ]}
            >
              Next
            </Button>
          </>
        )}
      </div>
    </>
  );
}

PlanetsFeed.propTypes = {
  nextPage: PropTypes.string,
  page: PropTypes.number,
  planets: PropTypes.array,
  prevPage: PropTypes.string,
}

 export default PlanetsFeed;