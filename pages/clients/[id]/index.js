import {useRouter} from 'next/router'

function ProjectClient(){
    console.log(useRouter().query);
    return <div>
        <h1>
            Project of the given client
        </h1>
    </div>
}
export default ProjectClient;