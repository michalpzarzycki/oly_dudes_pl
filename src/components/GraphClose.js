import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Button from '@material-ui/core/Button';
function GraphClose() {
    return (
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => { }}>
            <CancelPresentationIcon />
        </Button>
    )
}

export default GraphClose
