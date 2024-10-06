import React from 'react';
import {Badge, Stack} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

const ButtonsShowcase: React.FC = () => (
    <div className="p-1">
        <Button variant="primary" className="mr-1">
            Primary
        </Button>
        <Button variant="secondary" className="mr-1">
            Secondary
        </Button>
        <Button variant="success" className="mr-1">
            Success
        </Button>
        <Button variant="warning" className="mr-1">
            Warning
        </Button>
        <Button variant="danger" className="mr-1">
            Danger
        </Button>
        <Button variant="info" className="mr-1">
            Info
        </Button>
        <Button variant="light" className="mr-1">
            Light
        </Button>
        <Button variant="dark" className="mr-1">
            Dark
        </Button>
        <Button variant="link" className="mr-1">
            Link
        </Button>
        <br/>
        <div>
        <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
        </Stack>
        </div>
        <div>
            <h1>
                Example heading
                <Badge bg="secondary" as={Button}>
                    New
                </Badge>
            </h1>
        </div>
    </div>
);

export default ButtonsShowcase;
