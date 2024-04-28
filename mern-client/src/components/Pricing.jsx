/*import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Pricing = () => {
  return (
    <Container>
      <header className="bg-dark text-white text-center py-5">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
      </header>

      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <h4 className="my-0 font-weight-normal">Free</h4>
            </Card.Header>
            <Card.Body>
              <Card.Title as="h1" className="pricing-card-title">$0 <small className="text-muted">/ mo</small></Card.Title>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="outline-primary" size="lg" block>Sign up for free</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </Card.Header>
            <Card.Body>
              <Card.Title as="h1" className="pricing-card-title">$15 <small className="text-muted">/ mo</small></Card.Title>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="primary" size="lg" block>Get started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </Card.Header>
            <Card.Body>
              <Card.Title as="h1" className="pricing-card-title">$29 <small className="text-muted">/ mo</small></Card.Title>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="primary" size="lg" block>Contact us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;
*/

import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-5">
          <h2 className="text-5xl leading-9 font-bold text-gray-900">Pricing</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="shadow-lg border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-8 bg-white border-b border-gray-200">
              <h3 className="text-center text-5xl leading-8 font-bold text-gray-900">Free</h3>
              <p className="text-center mt-6 text-lg leading-6 font-medium text-gray-900">$0<small className="text-base text-gray-500">/ mo</small></p>
            </div>
            <div className="px-6 py-8">
              <ul className="divide-y divide-gray-200">
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">10 users included</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">2 GB of storage</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">Email support</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">Help center access</span>
                </li>
              </ul>
              <button className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">Sign up for free</button>
            </div>
          </div>

          <div className="shadow-lg border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-8 bg-white border-b border-gray-200">
              <h3 className="text-center text-5xl  leading-8 font-bold text-gray-900">Pro</h3>
              <p className="text-center mt-6 text-lg leading-6 font-medium text-gray-900">$15<small className="text-base text-gray-500">/ mo</small></p>
            </div>
            <div className="px-6 py-8">
              <ul className="divide-y divide-gray-200">
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">20 users included</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">10 GB of storage</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">Priority email support</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">Help center access</span>
                </li>
              </ul>
              <button className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">Get started</button>
            </div>
          </div>

          <div className="shadow-lg border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-8 bg-white border-b border-gray-200">
              <h3 className="text-center text-5xl leading-8 font-bold text-gray-900">Enterprise</h3>
              <p className="text-center mt-6 text-lg leading-6 font-medium text-gray-900">$29<small className="text-base text-gray-500">/ mo</small></p>
            </div>
            <div className="px-6 py-8">
              <ul className="divide-y divide-gray-200">
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">30 users included</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">15 GB of storage</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">Phone and email support</span>
                </li>
                <li className="flex items-start py-6">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-lg leading-6 text-gray-700">Help center access</span>
                </li>
              </ul>
              <button className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
