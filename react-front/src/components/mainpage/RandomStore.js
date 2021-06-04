import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MainPage.css';


const StoreBlock = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #212529;
`;


const RandomStore = () => {
    return (
        <>
            <StoreBlock>
                <div className="card-position">
                    <Card style={{width: '17rem', margin: '15px'}}>
                        <Card.Img variant="top"
                                  src="https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg"/>
                        <Card.Body>
                            <Card.Title>Store Name</Card.Title>
                            <Card.Text>
                                Store Information
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '17rem', margin: '15px'}}>
                        <Card.Img variant="top"
                                  src="https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg"/>
                        <Card.Body>
                            <Card.Title>Store Name</Card.Title>
                            <Card.Text>
                                Store Information
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '17rem', margin: '15px'}}>
                        <Card.Img variant="top"
                                  src="https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg"/>
                        <Card.Body>
                            <Card.Title>Store Name</Card.Title>
                            <Card.Text>
                                Store Information
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '17rem', margin: '15px'}}>
                        <Card.Img variant="top"
                                  src="https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg"/>
                        <Card.Body>
                            <Card.Title>Store Name</Card.Title>
                            <Card.Text>
                                Store Information
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </StoreBlock>

        </>
    );
}

export default RandomStore;