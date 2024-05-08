import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const HomeAttendantCard = ( { imgSrc ,description}) => {
    return (
        <>
        
            <Card sx={{
                width: "275px",
                height: "95px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <CardContent sx={{ padding: 0, width: '100%',height: "100%" , paddingBottom: 0, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <Avatar
                        variant="rounded"
                        src={imgSrc}
                    />
                    <Box sx={{ padding: 0, width: '65%' }}>
                        <Typography variant="h6" sx = {{ fontSize: "1.1rem"}}>
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default HomeAttendantCard

