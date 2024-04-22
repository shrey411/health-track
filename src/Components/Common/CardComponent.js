import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
} from '@mui/material';
import { GrLocation } from '../../assets/Icons/index';

const CardComponent = ({ title, description, imgSrc, color }) => {
    return (
        <Card sx={{
            maxWidth: '27rem', margin: '3rem auto', display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                    justifyContent:"Center",
                   backgroundColor: color,
                   height:"200px" ,
                   width:"100%",
                }}
            >
                <div style={{ width: "90%",  }}>
                    <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        src={imgSrc}
                        alt={title}
                        style={{ objectFit: 'cover'}}
                    />
                </div>
            </Box>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        mb: 2,
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <Typography variant="h5" component="h2" sx={{ fontFamily: "outfit", fontSize: "20px" }}>
                        {title}
                    </Typography>

                    <Typography paragraph sx={{ display: "flex", alignItems:"center", gap:"10px", fontSize: "15px", fontFamily: "outfit", fontWeight: "400" }}>
                        <span style={{ fontSize:"20px"}}><GrLocation/></span>
                        {description}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'White',
                        color: 'black',
                        border: "1px solid rgba(54, 54, 54, 1)",
                        '&:hover': {
                            backgroundColor: 'black',
                            color: 'white',
                        },
                        width: '100%',
                    }}
                >
                    View
                </Button>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
