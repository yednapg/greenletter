import { Query } from 'appwrite'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { COLLECTION_ID, DATABASE_ID } from '../../config.env'
import { database } from '../../config.keys'
import styles from '../styles/Home.module.css'


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material'
// import Search from '../components/search'


const Selectclass: NextPage = () => {
    const router = useRouter();
    let { studentclass } = router.query;

    const [studnet, setStudent] = useState<any>({
        name: "",
        dateofbirth: "",
        admissionNumber: "",
        presentDates: [],
        absentDates: []
    })

    const { name, dateofbirth, admissionNumber} = studnet;

    // class=string(class)
    // studentclass=String(studentclass) || " "
    const handleSubmit = () => {


    }

    // useEffect(()=>{
    //     fetchStudent()
    // },[])



    return (
        <>
            {/* <Search /> */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',


                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    // name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Name"
                                    autoFocus
                                    name="name"
                                    value={name}
                                // onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="dob"
                                    label="Date of Birth"
                                    name="dob"
                                // value={email}
                                // onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="admissionNumber"
                                    label="Admin No."
                                    type="password"
                                    id="admissionNumber"
                                    autoComplete="admissionNumber"
                                // value={password}
                                // onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </>
    )
}

export default Selectclass;