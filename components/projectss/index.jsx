'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './title';
import Descriptions from './description';

const data = [
    {
        title: "I",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.4
    },
    {
        title: "AM",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "VINEET",
        description: "",
        speed: 0.67
    },
    {
        title: "GOSWAMI",
        description: "",
        speed: 0.8
    },
    {
        title: "A PRO",
        description: "",
        speed: 1
    },
    {
        title: "grAMMER",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 0.8
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