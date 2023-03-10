import { styled } from '@material-ui/styles'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const SingleProductBox = () => {
    return (
        <>
            <Stack sx={{ width: '300px', height: '380px', background: '#fefefe', padding: '20px' }}>
                <Typography variant='h6' >Health & Personla Care </Typography>
                <ImageBox src='images/cardImage/image10.jpg' />
                <Typography color='blue.primary' mt={4}>See more</Typography>
            </Stack>
        </>
    )
}

const ImageBox = styled('img')({
    width: '100%',
    aspectRatio: 10 / 9
})

export default SingleProductBox
