import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';

const playersData = [
  {
    id: 1,
    name: 'Virat Kohli',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwoZ6e_XbIJzZ3YYiooiuSM8lu5_cSlGNZOsc1ozWBZzrkzBaOWxZJHjVIe9xmBZHkhQ&usqp=CAU',
    personalInfo: {
      dateOfBirth: '5 November 1988',
      nationality: 'Indian',
      // Add more personal information as needed
    },
    careerStats: {
      // Add career stats data here
    },
    recentPerformances: {
      // Add recent performances data here
    },
  },
  {
    id: 2,
    name: 'Ms Dhoni',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkOgSB7zwGb5t0yVa7optmsYHKqa0O-Hi6w&usqp=CAU',
    personalInfo: {
      dateOfBirth: '5 November 1988',
      nationality: 'Indian',
      // Add more personal information as needed
    },
    careerStats: {
      // Add career stats data here
    },
    recentPerformances: {
      // Add recent performances data here
    },
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1q8EVdsfQXMN8YkOQaCxKZOdAyu5IsmBYrJ-9zNug7-q3Ou8t99a84Ecl-g7e-NUjLVE&usqp=CAU',
    personalInfo: {
      dateOfBirth: '5 November 1988',
      nationality: 'Indian',
      // Add more personal information as needed
    },
    careerStats: {
      // Add career stats data here
    },
    recentPerformances: {
      // Add recent performances data here
    },
  },
  {
    id: 4,
    name: 'Yuvraj Singh',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0tkQzfuXPYkweEMDk2RVOA8z2R30LGKbsZ3_6x60ZBUMp7SCDPcwlYaOiJAOj7LTCxg&usqp=CAU',
    personalInfo: {
      dateOfBirth: '5 November 1988',
      nationality: 'Indian',
      // Add more personal information as needed
    },
    careerStats: {
      // Add career stats data here
    },
    recentPerformances: {
      // Add recent performances data here
    },
  },
  // Add more players' data here
];

const PlayerDetails = () => {
  const {id} = useParams();
  const player = playersData.find((player) => player.id === parseInt(id));
  if (!player) {
    return <Typography variant="h4">Player not found</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={player.profilePicture}
          alt={`${player.name}'s profile picture`}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {player.name}
          </Typography>
          <Typography variant="h6">Personal Information</Typography>
          <Typography variant="body2">
            Date of Birth: {player.personalInfo.dateOfBirth}
          </Typography>
          <Typography variant="body2">
            Nationality: {player.personalInfo.nationality}
          </Typography>
          {/* Add more personal information as needed */}

          <Typography variant="h6">Career Stats</Typography>
          {/* Display career stats here */}

          <Typography variant="h6">Recent Performances</Typography>
          {/* Display recent performances here */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default PlayerDetails;
