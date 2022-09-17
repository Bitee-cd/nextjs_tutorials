import { useRouter } from "next/router"


function Docs (){

    const router = useRouter()
    const {params=[]} = router.query

    if (params.length==2){
        return(
            <h1>this is whatever it is supposed to be {params[0]} and {params[1]}</h1>
        )
    }
    else if (params.length === 1 ){
        return(
            <h2>this is the another thing i dont know about {params[0]}</h2>
        )
    }
    else if(params.length ===3){
        return(
            <h2>this is more than everything {params[0]} and {params[1]} and finally {params[2]}</h2>
        )
    }
    else{
        return(
            <h2>this is the docs homepage</h2>
        )
    }
}
export default Docs