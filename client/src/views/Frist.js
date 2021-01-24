import { navigate } from "@reach/router"
import axios from "axios"
import { useEffect, useState } from "react"
import Register from "../components/Register"
import Login from "../components/Login"

const Frist = () => {
  const [user, setUser] = useState(null)


  return (
    <div>
      <Register setUser={setUser} ></Register>
      <Login setUser={setUser} ></Login>
    </div>
  )
}
export default Frist