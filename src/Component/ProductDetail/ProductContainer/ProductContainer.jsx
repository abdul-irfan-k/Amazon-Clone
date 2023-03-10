import { Stack } from '@mui/material'
import React from 'react'
import MulipleProductBox from '../MultipleProductbox/MulipleProductBox'
import ProductListBox from '../ProductListBox/ProductListBox'
import SingleProductBox from '../SingleProductBox/SingleProductBox'

const ProductContainer = () => {
    return (
        <>
            <Stack sx={{ width: '100vw', height: '450px', marginTop: '120px' }}>
                <Stack sx={{ width: '98%', margin: 'auto', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <SingleProductBox />
                    <SingleProductBox />
                    <SingleProductBox />
                    <MulipleProductBox />
                </Stack>
            </Stack>

            <ProductListBox />

            <Stack sx={{ width: '100vw', height: '450px' }}>
                <Stack sx={{ width: '98%', margin: 'auto', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <SingleProductBox />
                    <SingleProductBox />
                    <SingleProductBox />
                    <MulipleProductBox />
                </Stack>
            </Stack>
            <Stack sx={{ width: '100vw', height: '450px' }}>
                <Stack sx={{ width: '98%', margin: 'auto', flexDirection: 'row', justifyContent: 'space-around' }}>

                    <MulipleProductBox />
                    <MulipleProductBox />
                    <MulipleProductBox />
                    <MulipleProductBox />
                </Stack>
            </Stack>

            <ProductListBox />
        </>
    )
}

export default ProductContainer
