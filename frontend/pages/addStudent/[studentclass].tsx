import { Query, Permission, Role } from 'appwrite'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { COLLECTION_ID, DATABASE_ID } from '../../config.env'
import { account, database } from '../../config.keys'
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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
// import Search from '../components/search'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Selectclass: NextPage = () => {
  const router = useRouter();
  let { studentclass } = router.query;

  const [student, setStudent] = useState<any>({
    name: "",
    dateofbirth: "",
    classNumber: "",
    admissionNumber: "",
    presentDates: [],
    absentDates: [],
    succes: "",
    error: ""

  })
  const [login, setLogin] = useState({
    name: ""
  })
  useEffect(() => {
    const getData = account.get();
    getData.then(res => {
      login.name = res.name
    }).catch(res => {
      console.log(res);
    })
  }, [])

  // const []

  const { name, dateofbirth, classNumber, admissionNumber, succes, error, presentDates, absentDates } = student;


  // class=string(class)
  // studentclass=String(studentclass) || " "
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    database.createDocument(DATABASE_ID, COLLECTION_ID, "unique()", { name, dateofbirth, classNumber, admissionNumber, presentDates, absentDates }, [
      // Permission.read(Role.any()), 
    ]).then(res => {
      console.log(student)
      console.log(res)
      setStudent({ name: "", dateofbirth: "", admissionNumber: "", error: "", succes: "Student Created Sucessfully!" })
    }).catch(res => {
      console.log("errme")
      setStudent({ ...student, error: "Something went wrong!", succes: "" })
    })

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
            maxWidth: "100%"

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="black">
            Add Student
          </Typography>
          {succes && <div style={{ color: "red", textAlign: "center" }} >{succes}</div>}
          {error && <div style={{ color: "red", textAlign: "center" }} >{error}</div>}
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
                  onChange={(e) => setStudent({ ...student, [e.target.name]: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="classNumber"
                  // name="firstName"
                  required
                  fullWidth
                  id="classNumber"
                  label="ClassNumber"
                  autoFocus
                  name="classNumber"
                  value={classNumber}
                  onChange={(e) => setStudent({ ...student, [e.target.name]: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "100%" }}
                  id="date"
                  label="Date of Birth"
                  type="date"
                  defaultValue="2017-05-24" />
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
                  onChange={(e) => setStudent({ ...student, admissionNumber: e.target.value })}
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