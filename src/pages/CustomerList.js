import { Box, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { fbBuscar } from '../utils/FirebaseUtil';
import CustomerListResults from '../components/customer/CustomerListResults';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';

const CustomerList = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = async () => {
    let resultado = await fbBuscar('clientes');
    setClientes(resultado);
  }

  return <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults customers={clientes} />
        </Box>
      </Container>
    </Box>
  </>;
}

export default CustomerList;
