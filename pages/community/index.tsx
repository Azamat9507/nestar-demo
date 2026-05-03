import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";



const Community: NextPage = () => {
    const [title, setTitle] = useState<string>("hello")
    return <div>COMMUTINY{" "}
        <button onClick={() => alert("hello world")} style={{margin:"15px"}} > 
            PRESS ME
        </button>
     LIST</div>
}

export default withLayoutBasic(Community);