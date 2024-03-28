import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function LogIn() {
  const [dataSubmit, setDataSubmit] = useState({ username: "", password: "" });

  const handleInputChange = (event, name) => {
    const { value } = event.target;
    setDataSubmit((prevFormTasks) => ({
      ...prevFormTasks,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataSubmit);
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        className="w-100 h-100 border border-2 border-gray rounded-3 p-4"
        style={{ maxWidth: "600px", maxHeight: "300px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={dataSubmit.username}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={dataSubmit.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button variant="light" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
