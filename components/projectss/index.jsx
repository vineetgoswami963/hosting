'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './title';
import Descriptions from './description';

const data = [
    {
        title: "I",
        description: "",
        speed: 0.5
    },
    {
        title: "AM",
        description: "",
        speed: 0.4
    },
    {
        title: "VINEET",
        description: "",
        speed: 0.5
    },
    {
        title: "GOSWAMI",
        description: "",
        speed: 0.6
    },
    {
        title: "A PRO",
        description: "",
        speed:0.6
    },
    {
        title: "grAMMER",
        description: "",
        speed: 0.6
    }
]

const data2 = [
    {
        title: "CREATING",
        description: "",
        speed: 0.4
    },
    {
        title: "& HIDING",
        description: "",
        speed: 0.5
    },
    {
        title: "EPIC",
        description: "",
        speed: 0.67
    },
    {
        title: "SHITS",
        description: "",
        speed: 0.8
    },
    {
        title: "SINCE",
        description: "",
        speed: 1
    },
    {
        title: "2022",
        description: "",
        speed: 0.8
    }
]


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (

        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data2} selectedProject={selectedProject}/>

        </div>

    )
}