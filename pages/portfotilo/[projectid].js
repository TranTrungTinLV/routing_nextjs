import {useRouter} from 'next/router'

function Projectid() {
    const routes = useRouter();

    console.log(routes.pathname, 'hello'); // 
    console.log(routes.query); // query gives us access to the concrete data that is encoded in the URL

    return <div>
        <h1>nope</h1>
    </div>
}
export default Projectid;