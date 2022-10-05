import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import { Box } from '@mui/system';
import { OutlinedInput } from '@mui/material';


const languages = ['English', 'Luganda'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Language</DialogTitle>
      <List sx={{ pt: 0 }}>
        {languages.map((languages) => (
          <ListItem button onClick={() => handleListItemClick(languages)} key={languages}>
            <ListItemText primary={languages} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function InputDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(languages[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
        <Box sx={{
          justifyContent: 'space-between',
          p: 5,
          m: 1,
          bgcolor: 'background.paper',
          height: 100,
          borderRadius: 1,
        }}>
    
            
            <Button variant="outlined" onClick={handleClickOpen}>
                Select Language
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
        />
        <br />
        <Typography variant="subtitle1" component="div">
            Selected: {selectedValue}
        </Typography>
        </Box>
        <TextField label={selectedValue} multiline='default value'>
            <OutlinedInput placeholder="{selectedValue}"/>
        </TextField>
    </div>
  );
}

export default InputDialog;