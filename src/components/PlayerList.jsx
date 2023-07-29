import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import Header from './Header';

const playersData = [
  {
    id: 1,
    name: 'Virat Kohli',
    
  },
  {
    id: 2,
    name: 'Ms Dhoni',
    
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    
  },
  {
    id: 4,
    name: 'Yuvraj Singh',
  }
  // Add more players' data here
];

const PlayerList = () => {
  const [favoritePlayers, setFavoritePlayers] = useState([]);

  const handleAddToFavorites = (player) => {
    if (favoritePlayers.includes(player)) {
      setFavoritePlayers(favoritePlayers.filter((favPlayer) => favPlayer !== player));
    } else {
      setFavoritePlayers([...favoritePlayers, player]);
    }
  };

  return (
    <>
    <Header></Header>
      <List>
        {playersData.map((player) => (
          <div key={player.id}>
            <ListItem style={{
                    justifyContent:'space-between'
                }} >
                <Button component={Link} to={`/players/${player.id}`}>{player.name}</Button>
              <IconButton
                color={favoritePlayers.includes(player) ? 'primary' : 'default'}
                align="right"
                onClick={() => handleAddToFavorites(player)}
              >
                {favoritePlayers.includes(player) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
};

export default PlayerList;
