import {useRouter} from 'next/router'

//[...slug] it allows you to write very dynamic paths
function Slug() {

    console.log(useRouter().query);
    return <div>
        <h1>
            The BLog Slugs
        </h1>
    </div>;
}

export default Slug;