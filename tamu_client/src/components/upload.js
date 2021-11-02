import React from 'react';
import { Form } from 'react-bootstrap';


function Upload() {

    return(
        <>
        <h2>Upload</h2>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Upload a video or image</Form.Label>
                <Form.Control type="file" placeholder="Upload your file" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Video or Image name </Form.Label>
                <Form.Control type="text" placeholder="Enter file title"/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter video description"/>
            </Form.Group>
        </Form>
        </>
    );
}

export default Upload;