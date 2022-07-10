import React from "react"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Grid, Button, Tabs, Tab} from "@mui/material"
import Box from '@mui/material/Box';
import "../assets/css/header.css";



const Header = ()=>{

    return  (
        <div className="header">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <div className="logo">
                            <img src={require("../assets/img/logo.png")} alt="log"/>
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <div className="tabsMain">
                        <Tabs value={0}  aria-label="icon tabs example" indicatorColor={"#14967B"}>
                            <Tab className="active-tabs" icon={<ExploreOutlinedIcon />} label="Discovery" style={{borderBottom : "1px solid #14967B"}}/>
                            <Tab icon={<PeopleAltOutlinedIcon />} label="Invited" />
                            <Tab icon={<SupportAgentOutlinedIcon />} label="Help" />
                        </Tabs>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className='authbutton'>
                            <div className="jobBtn"><Button variant='outlined'>Post Job</Button></div>
                            <div className="signBtn"><Button variant='contained'>Sign In</Button></div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
    
}

export default Header;