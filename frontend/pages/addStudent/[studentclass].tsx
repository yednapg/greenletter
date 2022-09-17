import { Query } from 'appwrite'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { COLLECTION_ID, DATABASE_ID } from '../../config.env'
import { database } from '../../config.keys'
import styles from '../styles/Home.module.css'


const Selectclass:NextPage=()=>{
    const router =useRouter();
    let {studentclass}=router.query;

    const [studnet,setStudent]=useState<any>({
        name:"",
        dateofbirth:"",
        admissionNumber:"",
        presentDates:[],
        absentDates:[]
    })

    const {name,dateofbirth,admissionNumber,presentDates,absentDates}=studnet;

    // class=string(class)
    // studentclass=String(studentclass) || " "
    const onSubmit=()=>{
        
    
    }

    // useEffect(()=>{
    //     fetchStudent()
    // },[])



    return (
        <>
       profile
        
      <input type="text" name="" id="" />
        </>
    )
}

export default Selectclass;