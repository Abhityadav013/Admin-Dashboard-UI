'use client';
import * as React from 'react';
import Link from '@mui/material/Link';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import StatBox, { StateBoxProps } from '../components/StateBox';
import { Email } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { DataGrid } from '@mui/x-data-grid';
import TableData from '../components/TableData';
import AddIcon from '@mui/icons-material/Add';
import FormExample from '../components/ProductsAdd';
import TransitionsModal from '../components/Modal';

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* SVG path for email icon */}
  </svg>
);

const model: StateBoxProps = {
  title: 'Box Container',
  value: 'Mail Box',
  increase: 15,
  icon: <EmailIcon />, // Example with React.ReactNode type
  description: 'This is an Email Box Container',
};

interface TitleProps {
  children?: React.ReactNode;
}

function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}


export default function Products() {
  const [openModal, setOpenModal] = React.useState(false); // State to manage modal open/close

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" // Adjusted for responsive grid
          gap="20px"
        >
          <StatBox {...model} />
          <StatBox {...model} />

          <StatBox {...model} />
          <StatBox {...model} />
          <Box
            gridColumn="span 8"
            gridRow="span 3"
            // sx={{
            //   '& .MuiDataGrid-root': {
            //     border: 'none',
            //     borderRadius: '5rem',
            //   },
            //   '& .MuiDataGrid-cell': {
            //     borderBottom: 'none',
            //   },
            //   '& .MuiDataGrid-columnHeaders': {
            //     //backgroundColor: theme.palette.background.alt,
            //     // color: theme.palette.secondary[100],
            //     borderBottom: 'none',
            //   },
            //   '& .MuiDataGrid-virtualScroller': {
            //     //backgroundColor: theme.palette.background.alt,
            //   },
            //   '& .MuiDataGrid-footerContainer': {
            //     //backgroundColor: theme.palette.background.alt,
            //     // color: theme.palette.secondary[100],
            //     borderTop: 'none',
            //   },
            //   '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            //     //color: `${theme.palette.secondary[200]} !important`,
            //   },
            // }}
          >
            <Typography>
              <Button onClick={handleOpenModal}>
                <AddIcon />
                Add Products
              </Button>
            </Typography>

            <TableData />
          </Box>
        </Box>
      </Container>

      <TransitionsModal isOpen={openModal} handleClose={handleCloseModal}>
        <FormExample />
      </TransitionsModal>
    </React.Fragment>
  );
}
