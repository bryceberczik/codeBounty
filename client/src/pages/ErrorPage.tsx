import { useRouteError } from "react-router-dom";
import "../css/errorPage.css";

export default function errorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="errorPage">
      {/* <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occured.</p>

      <p>
        <i>{error.status || error.message}</i>
      </p> */}

      <h1 className="noBananas">404 | Banana Not Found!!</h1>

      <iframe
        src="https://giphy.com/embed/H8uuXYln5pxVVLFn7k"
        height="270"
        frameBorder="0"
        allowFullScreen
        title="Bananas GIF"
        className="banana"
      ></iframe>

    </div>
  );
}
