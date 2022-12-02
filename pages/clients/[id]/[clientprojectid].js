import {useRouter} from 'next/router'

function Specific(){
    console.log(useRouter().query);
    return <div>
        <h1>
            Project Page for a Specific
        </h1>
    </div>
}
export default Specific;