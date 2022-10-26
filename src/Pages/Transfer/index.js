import React from 'react'
import Content from '../../Layout/Content'

import { Icon } from "@iconify/react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Transfer = () => {
  return <Content>
    <Container>
      <Row className='d-flex flex-column justify-content-center'>
        <Col>
        <h4 className=''>Search Receiver</h4>
        </Col>
      </Row>
      <Row className='d-flex flex-column justify-content-center'>
        <Col>
        <InputGroup className='sm-3'>
        <InputGroup.Text id='search'><Icon icon="ant-design:search-outlined" width="20" height="20" className='m-3'/></InputGroup.Text>
        <Form.Control placeholder='Search receiver here' aria-label='Search receiver here' aria-describedby='search'/>
        </InputGroup>
        </Col>
      </Row>
      <Row className='d-flex flex-column justify-content-center'>
        <Col>
        <Card className='shadow-md'>
          <Card.Body>
            
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  </Content>
}

export default Transfer