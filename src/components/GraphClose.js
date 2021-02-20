import {useState} from 'react'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Button from '@material-ui/core/Button';
import CloseButtonDialog from './CloseButtonDialog';
function GraphClose() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickOpen}>
            <CancelPresentationIcon />
            <CloseButtonDialog open={open} handleClose={handleClose} />
        </Button>
    )
}

export default GraphClose
