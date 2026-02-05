import { useEffect, useState } from 'react';
import api from '../api/api';
import { Container, Typography, List, ListItem } from '@mui/material';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    api.get('/vehicles').then(res => setVehicles(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={3}>Vehicles</Typography>
      <List>
        {vehicles.map((v: any) => (
          <ListItem key={v._id}>
            {v.make} {v.model} ({v.licensePlate})
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
