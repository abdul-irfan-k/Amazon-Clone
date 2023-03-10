import { styled } from '@material-ui/styles'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const MulipleProductBox = () => {
    return (
        <>
            <Stack sx={{ width: '300px', height: '380px', background: '#fefefe', padding: '20px' }}>
                <Typography variant='h6' >
                    Gaming assesories </Typography>
                <Stack sx={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: '20px' }}>
                    <Stack sx={{ width: '49%' }}>
                        <ImageBox src='images/cardImage/image6.jpg' />
                        <Typography >Laptop</Typography>
                    </Stack>
                    <Stack sx={{ width: '49%' }}>
                        <ImageBox src='images/cardImage/image3.jpg' />
                        <Typography >Gaming Chair</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: '20px' }}>
                    <Stack sx={{ width: '49%' }}>
                        <ImageBox src='images/cardImage/image1.jpg' />
                        <Typography >Keyboard</Typography>
                    </Stack>
                    <Stack sx={{ width: '49%' }}>
                        <ImageBox src='images/cardImage/image2.jpg' />
                        <Typography >Mouse</Typography>
                    </Stack>
                </Stack>
                <Typography color='blue.primary' mt={4}>See more</Typography>
            </Stack>
        </>
    )
}

const ImageBox = styled('img')({
    width: '95%',
    aspectRatio: 3 / 2,
    margin: '0 auto'
})

export default MulipleProductBox
