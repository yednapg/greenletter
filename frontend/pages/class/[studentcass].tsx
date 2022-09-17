import { Query } from 'appwrite'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { COLLECTION_ID, DATABASE_ID } from '../../config.env'
import { database } from '../../config.keys'
import styles from '../../styles/StudentList.module.css'


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
        <div className={styles.container}>
        

        {/* <input type="text" name="" id="" /> */}
                <div className={styles.list}><div ><span className={styles.listItem}>name</span><span>adminssion</span></div><div><span>edit</span><span className={styles.listItem}>delete</span></div></div>
        {/* {studnets && studnets.map((index,student)=>{
            return (
                
            ) */}
        {/* })} */}
            </div>
        </>
        
    )
}

export default Selectclass;