import React from 'react'
import { Stack, TableCell, TableContainer, TableHead, TableRow, Table, TableBody, Typography } from '@mui/material'
import { styled } from '@material-ui/styles'
import { Copyright, Language } from '@mui/icons-material'
import { countryList, newList1, newList2, newList3 } from './FooterDetail'


const FooterComponent = () => {
    return (
        <>
            <Stack sx={{ backgroundColor: 'navbar.secondary', color: '#FFFFFF',marginTop:'15px' }}>

                <Stack sx={{ width: '100%', height: '331px' }}>
                    <TableContainer sx={{ width: '1000px', height: '271px', margin: 'auto' }}>
                        <Table  >
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '16px' }} >Get to know us </TableCell>
                                    <TableCell sx={{ color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '16px' }} >Make Money With Us </TableCell>
                                    <TableCell sx={{ color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '16px' }} >Amazon Payment Product  </TableCell>
                                    <TableCell sx={{ color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '16px' }} >Let Us Help You </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {newList1.map((row, id) => {
                                    return <TableRow >
                                        <TableCell sx={{ color: '#DDDDDD', borderBottom: 'none', paddingBottom: '10px', paddingTop: '0', lineHeight: '16.8px' }} >{row.first} </TableCell>
                                        <TableCell sx={{ color: '#DDDDDD', borderBottom: 'none', paddingBottom: '10px', paddingTop: '0', lineHeight: '16.8px' }} >{row.second}</TableCell>
                                        <TableCell sx={{ color: '#DDDDDD', borderBottom: 'none', paddingBottom: '10px', paddingTop: '0', lineHeight: '16.8px' }} >{row.third} </TableCell>
                                        <TableCell sx={{ color: '#DDDDDD', borderBottom: 'none', paddingBottom: '10px', paddingTop: '0', lineHeight: '16.8px' }} >{row.fourth} </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>

                <Stack sx={{ height: '88px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
                    <Stack sx={{ width: '76px', height: '38px' }}> <ImageDiv src='images/appImage/logo1.png' /></Stack>
                    <Stack sx={{ width: '120px', height: '30px', flexDirection: 'row', alignItems: 'center', padding: '5px', border: '1px solid #DDDDDD', borderRadius: '3px' }} ml={2}>
                        <Language /> <Typography ml={1}>Language</Typography>
                    </Stack>
                </Stack>

                <Stack sx={{ width: '70%', height: '40px', margin: 'auto', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
                    {countryList.map((country, index) => <Typography fontSize={'12px'} ml={3}>{country}</Typography>)}
                </Stack>
            </Stack>


            <Stack sx={{ backgroundColor: 'navbar.primary', color: '#FFFFFF', fontSize: '12px' }}>
                <Stack sx={{ width: '100%', height: '200px' }}>
                    <TableContainer sx={{ width: '1000px', margin: 'auto' }}>
                        <Table size='small'  >
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px' }}>Abe Books </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px' }}>Amazon Web Services </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px' }}>Audible  </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px', width: '20%z' }}>DP Review </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px' }}>IMDB </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {newList2.map((row, id) => {
                                    return <TableRow >
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', lineHeight: '16.8px', fontSize: '12px' }} >{row.first} </TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', lineHeight: '16.8px', fontSize: '12px' }} >{row.second}</TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', lineHeight: '16.8px', fontSize: '12px' }} >{row.third} </TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', lineHeight: '16.8px', fontSize: '12px' }} >{row.fourth} </TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', lineHeight: '16.8px', fontSize: '12px' }} >{row.fifth} </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>

                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px', }}>Shop Box </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px', }}>Amazon Business  </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px', }}>Prime Now  </TableCell>
                                    <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#FFFFFF', borderBottom: 'none', fontWeight: '700', fontSize: '12px', }}>Amazon Prime Music </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {newList3.map((row, id) => {
                                    return <TableRow >
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', fontSize: '12px' }} >{row.first} </TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', fontSize: '12px' }} >{row.second}</TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', fontSize: '12px' }} >{row.third} </TableCell>
                                        <TableCell sx={{ paddingTop: '0px', paddingBottom: '0px', color: '#DDDDDD', borderBottom: 'none', fontSize: '12px' }} >{row.fourth} </TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>

                <Stack sx={{ margin: '0 auto', fontSize: '12px', textAlign: 'center', lineHeight: '18px', marginBottom: '20px' }}>
                    <Typography fontSize='inherit'>Condition of Use & sale  Privacy Notice  Interest Based Ads</Typography>
                    <Typography fontSize='inherit'><Copyright sx={{ fontSize: '12px' }} />  1996-2023, Amazon.com, Inc. or its affiliates</Typography>
                </Stack>

            </Stack>
        </>
    )
}
export default FooterComponent

const ImageDiv = styled('img')({
    width: '100%',
    height: '100%'
})
