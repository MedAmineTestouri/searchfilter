import React from 'react'
import { Form } from "react-bootstrap";

export default function SearchBarcomp() {
  return (
    <div>
        <Form.Label >Search</Form.Label>
            <Form.Control
            type="text"
            
            aria-describedby="passwordHelpBlock"
            />
                <Form.Text >
                        Search for Name here !
                </Form.Text>
    </div>
  )
}

