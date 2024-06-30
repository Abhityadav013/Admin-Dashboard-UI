'use client';
import * as React from 'react';
import { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  //makeStyles,
  Theme,
  createStyles,
} from '@mui/material';
//import makeStyles from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TransitionsModal from './Modal';
const FormExample: React.FC = () => {
  // const classes = useStyles();
  const [formData, setFormData] = useState({
    textField1: '',
    textField2: '',
    textField3: '',
    textField4: '',
    quantity1: 0,
    quantity2: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuantityChange = (
    field: 'quantity1' | 'quantity2',
    value: number,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: Math.max(0, prevData[field] + value), // Ensure quantity doesn't go below 0
    }));
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Form Example
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text Field 1"
            name="textField1"
            value={formData.textField1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text Field 2"
            name="textField2"
            value={formData.textField2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text Field 3"
            name="textField3"
            value={formData.textField3}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text Field 4"
            name="textField4"
            value={formData.textField4}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">
            Quantity 1:
          </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              // className={classes.quantityInput}
              type="number"
              value={formData.quantity1}
              inputProps={{ min: 0 }}
              onChange={(e) =>
                handleQuantityChange(
                  'quantity1',
                  Number(e.target.value) - formData.quantity1,
                )
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="div">
            Quantity 2:
          </Typography>
          <Box display="flex" alignItems="center">
            <TextField
              //   className={classes.quantityInput}
              type="number"
              value={formData.quantity2}
              inputProps={{ min: 0 }}
              onChange={(e) =>
                handleQuantityChange(
                  'quantity2',
                  Number(e.target.value) - formData.quantity2,
                )
              }
            />
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormExample;
