import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function LandingPage() {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    return <div>
        Hi welcome to landing page
        <Button variant="contained" onClick={() => {
            setCount(count + 1);
            navigate(`/meeting/${count}`);
        }
        }> Go to Meeting {count} </Button>
    </div >
}
