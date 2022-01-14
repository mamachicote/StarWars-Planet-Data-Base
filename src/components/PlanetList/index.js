// @packages
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// @app
import { planetList } from '../../utils/recoil';

// @own
import './styles.scss';

function PlanetList() {
  const planetItem = useRecoilValue(planetList)

  const history = useHistory();

  return (
    <>
      <div className="Planet-Back" onClick={() => history.push('/')}>Go back to home!</div>
      <div className="Planet-List">
        {planetItem?.map(p => (
          <Card
            className="Planet-List__Card"
            variant="outlined"
            sx={{
              backgroundColor: '#a8a2a3',
              borderColor: '#fafafa',
            }}
          >
            <CardContent>
              <h3 className="Planet-List__Card-Header">{p?.name}</h3>
              <p className="Planet-List__Card-Content"><b>Diameter:</b> {p?.diameter}.</p>
              <p className="Planet-List__Card-Content"><b>Climate:</b> {p?.climate}.</p>
              <p className="Planet-List__Card-Content"><b>Terrain:</b> {p?.terrain}.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

 export default PlanetList;