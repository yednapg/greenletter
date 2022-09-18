import { Query } from 'appwrite'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { COLLECTION_ID, DATABASE_ID } from '../../config.env'
import { database } from '../../config.keys'
import styles from '../../styles/StudentList.module.css'
//mUI
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeIcon from '@mui/icons-material/Mode';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
interface s { 
    presentDates:string[],
    absentDates:string[]
}
const date = new Date(Date.UTC(2022, 9, 18, 3, 0, 0));
const Selectclass:NextPage=()=>{
    const router =useRouter();
    let {studentclass}=router.query;
    const [students,setStudents]=useState<any>([])
    
    const [user,setUser]=useState<s>({
        presentDates:[],
        absentDates:[]
    })
    
    // class=string(class)
    // studentclass=String(studentclass) || " "
    const fetchStudent=()=>{
      const stuclass=Number(studentclass)!;
        console.log(studentclass)
        console.log(stuclass)   
        if (stuclass == NaN || stuclass==undefined ) return;
        database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.equal("classNumber",stuclass)
        ]).then(res=>{
            console.log(res.documents)
            setStudents(res.documents)
        }).catch(res=>{
            console.log(res)
        })
    
    }
    const [open, setOpen] = React.useState({status:false,id:""});
    useEffect(()=>{
        fetchStudent()
    },[studentclass])

   const {presentDates,absentDates}=user

   const [temp,setTemp]=useState<string>("")

    const deleteUser=(id:string)=>{
      database.deleteDocument(DATABASE_ID,COLLECTION_ID,id).then(res=>{
        console.log(res)
        fetchStudent();
      }).catch(err=>{
        console.log(err);
        
      })
    }


    const handleSave=(id:any,type:string,data:string)=>{
        // setOpen(false)
        console.log(id);
        console.log(data)
        if(type==="present"){
            setUser({...user,presentDates:[...user.presentDates,data]})
        }else{
            
            setUser({...user,absentDates:[...user.absentDates,data]})
        }
        console.log(user);
        
        database.updateDocument(DATABASE_ID,COLLECTION_ID,id,{presentDates,absentDates})
        .then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
            
        })
    }
    const handleClose=()=>{
        setOpen({status:false,id:""})
    }

    // const pop=(id:any)=>{
    //     console.log(id);
        
    //     if(open==true){
    //         return (
    //             <>
    //             {/* <Button variant="outlined" onClick={handleClickOpen}>
    //     Slide in alert dialog
    //      </Button> */}
      
    //         </>
    //         )
    //     }
    //     return(
    //         ""
    //     )
    // }

    return (
        <>
       
        <h3 style={{color:"red",textAlign:"center"}} >Students</h3>
        <Button onClick={()=>router.push(`/addstudent/${studentclass}`)} variant="outlined">Add Student</Button>
        <div className={styles.container}>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Admission No.</TableCell>
            <TableCell align="right">Button&nbsp;</TableCell>
            <TableCell align="right">Button&nbsp;</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students && students.map((student:any,index:any) => (
            <TableRow
              key={student.$id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.admissionNumber}</TableCell>
              <TableCell align="right"><ModeIcon onClick={()=>
               { 
                setOpen({status:true,id:student.$id})}
                
                }/></TableCell>
              <TableCell align="right"><DeleteForeverIcon onClick={()=>deleteUser(student.$id)}/></TableCell>
              <TableCell align="right">{student.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       <Dialog
        open={open.status}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Mark Attendance"}</DialogTitle>
        <DialogContent>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "100%"}}
                  id="date"
                  label=""
                  type="date"
                  onChange={(e)=>setTemp(e.target.value)!}
                  defaultValue={String(date.toLocaleDateString())} />
              </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{handleSave(open.id,"present",temp)}}>Mark Present</Button>
          <Button onClick={()=>{handleSave(open.id,"absent",temp)}}>Mark Absent</Button>
        </DialogActions>
      </Dialog>
            </div>
        </>
        
    )
}

export default Selectclass;