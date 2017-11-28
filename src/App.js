import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Alert from './components/Alert'
import { Button, ButtonGroup } from './components/Button'
import Card from './components/Card'
import { Container, Row, Column } from './components/Container'
import { Form, Text, File, Select } from './components/Form'
import { Nav, NavItem } from './components/Nav'
import Progress from './components/Progress'

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className="mt-3 px-5">
        <Container fluid={ true }>
          <Row>
            <Column base='12' sm='6'>
              <Progress variation='success' percentage='95' />
              <Progress variation='danger' percentage='15' striped='yes' />
            </Column>
          </Row>
          <Row>
            <Column sm='1'>A</Column>
            <Column sm='3'>B</Column>
            <Column sm='5'>C</Column>
            <Column sm='3'>D</Column>
          </Row>
        </Container>
      </div>
      <div className='mt-3 text-center'>
        <Form title='Bootstrap Forms'>
          <Text type='email' label='Email' />
          <Text type='password' label='Password' />
          <Text label='Company' />
          <Text label='Thoughts' rows='4' />
          <File label='Resume' help='Please upload your resume' />
          <Select label="Choose" showAll={ true }>
            1, 2, 3, 4, 5
          </Select>
        </Form>
      </div>
      <div className='mt-3 p-3'>
          <Card title='Ben Simmons' imageLink='https://images.perthnow.com.au/publication/B9E1882EA958D35F5CA6D7F4A1FC01CB/1511737219641_d5c113687fa613d864426d8d15b91daa.jpeg?imwidth=668&impolicy=pn_v1' link='https://www.google.com' linkVariation='dark' linkText='See More' >
            PHILADELPHIA 76ers point guard Ben Simmons remains questionable for Tuesday’s (AEDT) blockbuster clash with the Cleveland Cavaliers.
          </Card>
          <Card title='Ozbargain' link='https://www.ozbargain.com.au' linkVariation='primary' linkText='See More' >
          Cheap Cheap deals.
        </Card>
        </div>
        <div className='mt-3'>
          <Alert title='Hello World' variation='success'>Lorem Ipsum Dolar</Alert>
          <Alert title='Hello World' variation='danger'></Alert>
          <Alert title='Hello World'>Crazy</Alert>
        </div>
        <div className='mt-3'>
          <ButtonGroup>
            <Button title='Google' href='https://www.google.com/' />
            <Button title='Second' variation='primary' />
            <Button title='Third' variation='success' />
          </ButtonGroup>
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default App;
