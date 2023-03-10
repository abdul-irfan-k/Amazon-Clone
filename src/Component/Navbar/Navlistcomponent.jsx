import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import { Stack } from '@mui/system'
import { Menu } from '@material-ui/icons'

const Navlistcomponent = () => {
    return (
        <>
            <Toolbar sx={{ height: '35px', bgcolor: 'navbar.secondary' }} variant='' >
                <Stack direction={'row'} sx={{ alignItems: 'center', width: '100%' }}>
                    <Stack direction={'row'}>
                        <Menu />
                        <Typography ml={0.5}>All</Typography>
                    </Stack >
                    <Typography ml={2} variant='body2' >Today's Deals</Typography>
                    <Typography ml={2} variant='body2' >Customer Service</Typography>
                    <Typography ml={2} variant='body2' >Rigistry</Typography>
                    <Typography ml={2} variant='body2' >Gift Cards</Typography>
                    <Typography ml={2} variant='body2' >Sells</Typography>
                    <Typography sx={{marginLeft:'auto'}} variant='body1'  >Shop Deals in Electronics</Typography>
                </Stack>
            </Toolbar>
        </>
    )
}

export default Navlistcomponent

