import { useState } from 'react'
import axios from "axios"
import { navigate } from "@reach/router"
var moment = require('moment');
moment().format(); 

const Project = ({ project }) => {

    const myTime = moment(project.date).format("dddd, MMMM Do YYYY");
    const [status, setProjectStatus] = useState(project.status)
    const handleClick = (e) => {
        if (e.target.name === 'start') {
            setProjectStatus("prog")
            // axios to save it on the server
            axios
            .put("http://localhost:8000/api/Projects/" + project._id, {status:"prog"} )
            .then((res) => { console.log(res.data)
            })
        }

        if (e.target.name === 'prog') {
            setProjectStatus("delete")
            axios
            .put("http://localhost:8000/api/Projects/" + project._id, {status:"delete"})
            .then((res) => { console.log(res.data)
            })

        }
        if (e.target.name === 'delete') {
            setProjectStatus("delete")
            axios
            .put("http://localhost:8000/api/Projects/" + project._id, status )
            .then((res) => { console.log(res.data)
            })


        }
    }

    const handleClickdelete = (e) => {
        setProjectStatus("delete")
        axios
            .delete("http://localhost:8000/api/Projects/" + project._id)
            .then((res) => {
                navigate("/dashboard")
            })
            .catch(err => console.log(err))
    }



    return (
        <tr>


<td>
{status === "start"?
(
   <>
    <p>{project.name}</p>
    <p>{myTime}</p>
    <button
        name="start"
        style={status === "start" ? { backgroundColor: "green" } : {}}
        onClick={handleClick}
    >
        start
</button>


</>
):null
}

</td>       

            {/* <td>
                <p>{project.name}</p>
                <p>{myTime}</p>
                <button
                    name="prog"
                    style={status === "prog" ? { backgroundColor: "blue" } : {}}
                    onClick={handleClick}
                >
                    in prog
    </button>

            </td> */}


<td>
{status === "prog"?
(
   <>
    <p>{project.name}</p>
    <p>{myTime}</p>
    <button
        name="prog"
        style={status === "prog" ? { backgroundColor: "blue" } : {}}
        onClick={handleClick}
    >
        in prog
</button>


</>
):null
}

</td>       





{/* 
            <td>
                <p>{project.name}</p>
                <p>{myTime}</p>
                <button
                    name="delete"
                    style={status === "delete" ? { backgroundColor: "red" } : {}}
                    onClick={handleClickdelete}
                >
                    delete
    </button>
            </td> */}



            <td>
{status === "delete"?
(
   <>
    <p>{project.name}</p>
    <p>{myTime}</p>
    <button
        name="delete"
        style={status === "delete" ? { backgroundColor: "red" } : {}}
        onClick={handleClickdelete}
    >
          delete
</button>


</>
):null
}

</td> 



        </tr>
    )
}

export default Project



