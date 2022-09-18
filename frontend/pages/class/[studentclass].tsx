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
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import ModeIcon from '@mui/icons-material/Mode';



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


interface s { 
    presentDates:Date[],
    absentDates:Date[]
}


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

   const [temp,setTemp]=useState<Date>(new Date())

    const handleSave=(id:any,type:string,data:Date)=>{
        // setOpen(false)
        console.log(id);
        if(type="present"){
            setUser({...user,presentDates:[...presentDates,data]})
        }else{
            
            setUser({...user,absentDates:[...user.absentDates,data]})
        }

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
       profile
        <h3 style={{color:"red",textAlign:"center"}} >Students</h3>


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
              <TableCell align="right">{student.carbs}</TableCell>
              <TableCell align="right">{student.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        {/* <input type="text" name="" id="" /> */}
        {/* {studnets && studnets.map((student:any,index:any)=>{
            // console.log(index)
            return (
                <div key={student.$id} className={styles.list}><div ><span className={styles.listItem}>{student.name}</span><span>{student.admissionNumber   }</span></div><div><span>edit</span><span className={styles.listItem}>delete</span></div></div>
                
            )
        
         })}  */}
       <Dialog
        open={open.status}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={()=>{handleSave(open.id,"present",temp)}}>Update Present</Button>
          <Button onClick={()=>{handleSave(open.id,"absent",temp)}}>Update Absent</Button>
        </DialogActions>
      </Dialog>
            </div>
        </>
        
    )
}

export default Selectclass;