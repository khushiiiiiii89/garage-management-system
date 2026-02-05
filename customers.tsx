import { useEffect, useState } from 'react';
import api from '../api/api';
import { Container, Typography, List, ListItem } from '@mui/material';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('/customers').then(res => setCustomers(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" mt={3}>Customers</Typography>
      <List>
        {customers.map((c: any) => (
          <ListItem key={c._id}>
            {c.firstName} {c.lastName} – {c.phone}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
