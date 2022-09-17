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

    const [studnets,setStudents]=useState<any>([])


    // class=string(class)
    // studentclass=String(studentclass) || " "
    const fetchStudent=()=>{
        database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.equal("class",studentclass!)
        ]).then(res=>{
            console.log(res)
            setStudents(res)
        }).catch(res=>{
            console.log(res)
        })
    
    }

    useEffect(()=>{
        fetchStudent()
    },[])



    return (
        <>
       profile
        
        <input type="text" name="" id="" />
        {studnets && studnets.map((index,student)=>{
            return (
                
            )
        })}
        </>
    )
}

export default Selectclass;