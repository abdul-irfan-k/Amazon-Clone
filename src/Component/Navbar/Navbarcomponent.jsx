import React from 'react'
import Navlistcomponent from './Navlistcomponent';
import { Room, Search, ShoppingCartOutlined } from '@material-ui/icons'
import { makeStyles, styled } from '@material-ui/styles'
import { AppBar, Box, FormControl, Stack, MenuItem, OutlinedInput, Select, TextField, Toolbar, Typography } from '@mui/material'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: { style: { maxHeight: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP, width: 230, margin: '0px 0 0 80px' }, },
};
const Navbarcomponent = () => {
    const languages = ['English - EN', 'español - ES', ' العربية - AR', ' Deutsch - DE', ' עברית - HE', ' 한국어 - KO', ' português - PT', ' 中文 (简体) - ZH', ' 中文 (繁體) - ZH',]
    const searchTypes = ['All', 'Arts & Craft', 'Automotive', 'Baby', 'Beauty & Personal Care', 'Books', 'Computer', 'Boys fashion', 'Deals', 'Digital Music', 'Girl fashion', 'Kindle store', 'Luggage'];
    const style = styles()
    return (
        <>
            <AppBar >
                <Toolbar sx={{ bgcolor: 'navbar.primary', padding: '0', color: 'text.light' }} className={style.toolBar}>
                    <Box className={style.logoAndLocationBox}>
                        <Image src='images/appImage/logo.png' className={style.logoImg} />
                        <Box className={style.locationBox}>
                            <Room />
                            <Box className={style.locationDetailBox}>
                                <Typography variant='body2' sx={{ fontSize: '12px' }}>Deliver to </Typography>
                                <Typography variant='body2' sx={{ fontSize: '12px' }}>india </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={style.searchBox}>
                        <FormControl sx={{ minWidth: 50, height: '60px' }}>
                            <Select defaultValue={'All'} input={<OutlinedInput />} MenuProps={MenuProps}   >
                                {searchTypes.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <Box className={style.inputBox}>
                            <TextField fullWidth />
                        </Box>
                        <Box sx={{ color: "#000", bgcolor: 'yellow.light' }} className={style.searchBtnBox + ' ' + style.flexXY} >
                            <Search />
                        </Box>
                    </Box>
                    <Box className={style.navRightBox} sx={{ color: '#FFF' }}>
                        <Box className={style.languageSelectBox}>
                            <Image src='images/appImage/flag.png' className={style.smallImage} />
                            <FormControl sx={{ minWidth: 70, height: '60px', color: 'white' }}>
                                <Select defaultValue={'English - EN'} input={<OutlinedInput />} MenuProps={MenuProps} renderValue={(val) => val.split('-')[1]} sx={{
                                    color: 'white',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none'
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: 'white'
                                    }
                                }} >
                                    {languages.map((name) => (<MenuItem key={name} value={name}>{name}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Stack sx={{ margin: 'auto' }}>
                            <Typography variant='body2'>Hello, Sign in </Typography>
                            <Typography variant='body2'>Account & Lists </Typography>
                        </Stack>
                        <Stack sx={{ margin: 'auto' }}>
                            <Typography variant='body2'>Return </Typography>
                            <Typography variant='body2'>& Orders </Typography>
                        </Stack>
                        <Stack sx={{ margin: 'auto' }}>
                            <ShoppingCartOutlined />
                            <Typography variant='body2'>& Orders </Typography>
                        </Stack>
                    </Box>
                </Toolbar>
                <Navlistcomponent />
            </AppBar>
        </>
    )
}

export default Navbarcomponent

const Image = styled('img')({
    objectFit: 'fill',
    objectPosition: 'center',
})

const styles = makeStyles({
    flexXY: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolBar: {
        height: '55px',
        width: '100%',
        padding: '0px'
    },
    logoAndLocationBox: {
        width: '19%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: '10%'
    },
    locationBox: {
        width: '50%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
    },
    locationImg: {
        width: '27px',
        height: '27px'
    },
    logoImg: {
        width: '50%',
        height: '100%'
    },
    searchBox: {
        width: '50%',
        height: '70%',
        borderRadius: '5px',
        background: '#FFF',
        alignItem: 'center',
        display: 'flex',
        borderRadius: '5px'
    },
    inputBox: {
        width: '85%'
    },
    searchBtnBox: {
        width: '8%',
        height: '100%'
    },

    navRightBox: {
        width: '26%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 50px 0 auto'
    },
    languageSelectBox: {
        display: 'flex',
        width: '22%',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    smallImage: {
        width: '20px',
        height: '20px    '
    }
})
