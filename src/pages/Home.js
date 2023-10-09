import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAuth } from 'hooks/useAuth';
import { HelmetProvider, Helmet } from 'react-helmet-async';

export default function Home() {
  const { user } = useAuth();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 500,
          marginTop: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <CardContent>
          <Typography variant="h3" component="div">
            Welcome
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            to your phonebook
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h5" color="text.secondary">
            {user.name}
          </Typography>
        </CardContent>
      </Card>
    </HelmetProvider>
  );
}
