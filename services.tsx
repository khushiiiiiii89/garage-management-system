import { useEffect, useState } from 'react';
import api from '../api/api';
import { Container, Typography, List, ListItem } from '@mui/material';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services').then(res => setServices(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={3}>Service Requests</Typography>
      <List>
        {services.map((s: any) => (
          <ListItem key={s._id}>
            {s.description} – ₹{s.cost}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
