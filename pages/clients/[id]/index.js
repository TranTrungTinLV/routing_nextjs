import {useRouter} from 'next/router';

function ProjectClient(){
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler(){
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid:'clientprojectida'}
        })
    }
    return <div>
        <h1>
            Project of the given client
        </h1>
        <button onClick={loadProjectHandler}>
            Click project A
        </button>
    </div>
}
export default ProjectClient;