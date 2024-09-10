import { Box } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { login, selectUser } from "./redux/slices/userSlice";

export default function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  

  const [counter, setCounter] = useState(0);
  return (
    <Box className="main">

     
    {user.isLoggedIn ? 'Zalogowano: ' + user.data?.name : 'Nie zalogowano' }

    <button onClick={()=> dispatch(login())  } >Zaloguj</button>
    </Box>
  );
}
