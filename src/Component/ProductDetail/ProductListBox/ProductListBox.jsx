import React, { useRef } from 'react'
import { styled } from '@material-ui/styles'
import { Stack, Typography } from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos, ConstructionOutlined } from '@mui/icons-material'

const ProductListBox = () => {
    const contentWrapper = useRef(null);

    const arrowBtnHandler = (val) => {
        const distance = 200
        let scrollAmount = 0

        const interval = setInterval(() => {
            contentWrapper.current.scrollLeft += val
            scrollAmount += 20
            if (scrollAmount >= distance) {
                clearInterval(interval)
            }
        }, 24)
    }
    return (
        <>
            <Stack sx={{ width: '96%', margin: '15px auto', backgroundColor: '#FFF', height: '250px' }}>
                <Typography variant='h5' ml={3} mt={3} >Holi shopping from your trusted local shops</Typography>
                <Stack sx={{ width: '97%', margin: '0 auto', height: '210px', flexDirection: 'row', overflow: 'hidden', scrollLeft: '100' }} ref={contentWrapper} >
                    <ImageDiv src='images/cardImage/image1.jpg' />
                    <ImageDiv src='images/cardImage/image2.jpg' />
                    <ImageDiv src='images/cardImage/image2.jpg' />
                    <ImageDiv src='images/cardImage/image3.jpg' />
                    <ImageDiv src='images/cardImage/image9.jpg' />
                    <ImageDiv src='images/cardImage/image6.jpg' />
                    <ImageDiv src='images/cardImage/image7.jpg' />
                    <ImageDiv src='images/cardImage/image4.jpg' />
                    <ImageDiv src='images/cardImage/image8.jpg' />
                    <ImageDiv src='images/cardImage/image5.jpg' />
                    <ImageDiv src='images/cardImage/image9.jpg' />
                    <ImageDiv src='images/cardImage/image6.jpg' />
                    <ImageDiv src='images/cardImage/image7.jpg' />
                </Stack>
                <Stack sx={{ width: '40px', height: '100px', backgroundColor: '#FFF', position: 'absolute', marginTop: '100px' }} ml={3} onClick={() => arrowBtnHandler(-40)}>
                    <ArrowBackIosNew sx={{ margin: 'auto' }} fontSize='large' />
                </Stack>
                <Stack sx={{ width: '40px', height: '100px', backgroundColor: '#FFF', position: 'absolute', marginTop: '100px', right: '2%' }} mr={3} onClick={() => arrowBtnHandler(40)} >
                    <ArrowForwardIos sx={{ margin: 'auto' }} fontSize='large' />
                </Stack>

            </Stack>
        </>
    )
}

const ImageDiv = styled('img')({
    width: '200px',
    height: '200px'
})

export default ProductListBox
