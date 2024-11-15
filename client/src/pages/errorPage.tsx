import { useRouteError } from "react-router-dom";

export default function errorPage() {

const error: any = useRouteError();
console.error(error);

return (

    <div id='error-page'>

        <h1>Oops!</h1>

        <p>Sorry, an unexpected error has occured.</p>

        <p>
            <i>{error.status || error.message}</i>
        </p>

    </div>

);

}
