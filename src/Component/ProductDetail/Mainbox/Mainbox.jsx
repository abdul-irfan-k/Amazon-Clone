import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Stack, Typography } from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos, Transform } from '@mui/icons-material'
import MulipleProductBox from '../MultipleProductbox/MulipleProductBox'
import SingleProductBox from '../SingleProductBox/SingleProductBox'


const Mainbox = () => {
    const style = styles()
    const [bgImageNum, setBgImageNum] = useState(1)
    const arrowBtnHandler = (val) => {
        if ((bgImageNum + val) == 6) return setBgImageNum(1)
        if ((bgImageNum + val) == 0) return setBgImageNum(5)
        setBgImageNum(bgImageNum + val)
    }
    return (
        <>
            <Box sx={{ width: '100vw', height: "78vh", margin: '100px auto 15px auto', backgroundSize: '100% 100%', backgroundImage: `linear-gradient(rgba(0,0,0,0) 60%,#e3e6e6),url('images/bgImage/bgimage${bgImageNum}.jpg')` }} >
                <Stack sx={{ width: "98%", margin: 'auto', height: '200px', flexDirection: 'row' }}>
                    <Box className={style.arrowBtnBox} sx={{ bgcolor: "blue" }} onClick={() => arrowBtnHandler(-1)}>
                        <ArrowBackIosNew fontSize='inherit' className={style.arrowBtn} />
                    </Box>
                    <Box className={style.arrowBtnBox} sx={{ marginLeft: 'auto' }} onClick={() => arrowBtnHandler(1)}>
                        <ArrowForwardIos fontSize='inherit' className={style.arrowBtn} />
                    </Box>
                </Stack>

                <Stack sx={{ width: '98%', height: '450px', margin: '70px auto 15px auto', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <MulipleProductBox />
                    <SingleProductBox />
                    <SingleProductBox />

                    <MulipleProductBox />
                </Stack>
            </Box >
        </>
    )
}

export default Mainbox

const styles = makeStyles({
    arrowBtnBox:
    {
        width: '70px',
        height: '100%',
        fontSize: '50px',
        textAlign: 'center',
        display: 'flex'
    },
    arrowBtn: {
        margin: 'auto'
    }
})
