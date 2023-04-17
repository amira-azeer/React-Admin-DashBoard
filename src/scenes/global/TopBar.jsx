import { Box, Icon, IconButton, useTheme } from '@mui/material';
import { useContext, useState } from "react"
import { ColourModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';



const TopBar = () => {
    const theme = useTheme()
    const colours = tokens(theme.palette.mode)
    const colourMode = useContext(ColourModeContext);
    return (
    <Box display="flex" justifyContent="space-around" p={2}>

        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor={colours.primary[400]} borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1, }} placeholder="Search"/>
            <IconButton type='button' sx={{ p:1 }}>
                <SearchIcon/>
            </IconButton>
        </Box>


        {/* ICONS */}
        <Box display="flex" >
            <IconButton onClick={colourMode.toggleColourMode}> 
                {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)}
            </IconButton>

            <IconButton> <NotificationsOutlinedIcon/> </IconButton>
            <IconButton> <SettingsOutlinedIcon/> </IconButton>
            <IconButton> <PersonOutlinedIcon/> </IconButton>
        </Box>

    </Box>)
}

export default TopBar;