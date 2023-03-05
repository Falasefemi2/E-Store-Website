import { useRouteError } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div>
        <h1>Oops!</h1>
        <Alert variant="danger">Sorry, an unexpected error has occurred.</Alert>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Container>
  );
}
