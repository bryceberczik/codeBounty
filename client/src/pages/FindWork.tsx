import { Form, Button } from "react-bootstrap";
import "../css/findwork.css";

const FindWork = () => {
  return (
    <div>
      <h1>Search for work that fits your role.</h1>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default FindWork;
