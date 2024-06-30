import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '85%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface TransitionsModalProps {
  children: React.ReactNode;
  isOpen: boolean; // Receive isOpen as a prop
  handleClose?: () => void; // Prop to handle closing modal
}

export default function TransitionsModal({ children, isOpen, handleClose }: TransitionsModalProps) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen} // Use isOpen prop to determine modal state
        onClose={handleClose} // Use handleClose prop to close modal
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      
        <Fade in={isOpen}>
            
          <Box sx={style}>
          <Button onClick={handleClose}  variant="contained" color="inherit" sx={{ border: 0,background: 'none' }}>
              <CloseIcon />
            </Button>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
