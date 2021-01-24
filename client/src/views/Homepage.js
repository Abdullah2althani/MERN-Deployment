import React, { useEffect } from "react";
import { Link, navigate } from "@reach/router";
import ProjectsTable from "../components/ProjectsTable";
import axios from "axios";

const Homepage = (props) => {
    const { Projects, setProjects } = props;
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/Projects")
    //         .then((res) => {
    //             setProjects(res.data.sort((a, b) => {
    //                 if (a.name < b.name) { return -1 };
    //                 return (a.name > b.name ? 1 : 0);
    //             }));
    //         })
    //         .catch((err) => { console.log(err); })
    // }, [setProjects]);

    const handleClick = (e) => {
        axios
            .get("http://localhost:8000/api/logout")
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
        <h1>Peoject Manager</h1>
            <button onClick={handleClick}>Logout</button>

            <ProjectsTable Projects={Projects} setProjects={setProjects} />

            <Link class="btn btn-primary" to="/Projects/new">Add an Project</Link>

        </>
    )
};

export default Homepage;