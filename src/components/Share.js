import { Button} from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import "../assets/css/share.css";
const Share = ()=><div className="share-button">
    <Button variant="outlined" startIcon={<ShareIcon/>}>Share</Button>
</div>

export default Share;