import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const HomeAttendantCard = ( { imgSrc ,description}) => {
    return (
        <>
        
            <Card sx={{
                // width: "275px",
                height: "125px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <MEdiaQueries>
                <CardContent sx={{ padding: 0, width: '100%',height: "100%" , paddingBottom: 0, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <Avatar
                        variant="rounded"
                        src={imgSrc}
                    />
                    <Box 
                    className="AttendantCard-Box"
                    sx={{ padding: 0, width: '65%' }}>
                        <Typography variant="h6" sx = {{ fontSize: "1.1rem"}}>
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
                </MEdiaQueries>
            </Card>
        </>
    )
}

export default HomeAttendantCard


export const MEdiaQueries = styled.div`
width: 90%;
img{
    object-fit: fill;
}
.css-12tddib-MuiCardContent-root:last-child {
    padding-bottom: 0px;
}

@media(max-width: 1024px){
    .AttendantCard-Box h6{
        font-size: 1rem;
    }
}
@media(max-width: 440px){
    width: 65%;
    .AttendantCard-Box{
        width: 50%;
    }
}

`
