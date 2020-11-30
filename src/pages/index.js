import React from "react"
import { Link } from "gatsby"

import { Carousel, Card, Button, Jumbotron, Container,Form, } from 'react-bootstrap';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import slide01 from "../images/slide01.jpg"
import slide06 from "../images/slide06.jpg"
import slide05 from "../images/slide05.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>

    <br></br>
    <br></br>
    <br></br>
    <Carousel className="teste">
      <Carousel.Item>
        <img src={slide01} alt="my first"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src={slide06} alt="my first"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src={slide05} alt="my first"/>
      </Carousel.Item>
    </Carousel>

    <Card id="texto1">
  <Card.Header>Aqui você encontra todos os principais bluckbusters!</Card.Header>
  <Card.Body>
    <Card.Title>Todos os gêneros da nossa aclamada sétima arte: </Card.Title>
    <Card.Text>
      <p> Para quebrar a rotina, nada melhor do que viver emoções fortes no conforto do seu sofá. 
        Ao longo de décadas, os filmes de ação têm arrastado multidões para as salas de cinema e acelerado batimentos cardíacos de espectadores do mundo inteiro.<br></br>
        Confira as nossas sugestões que combinam os melhores títulos recentes e os verdadeiros
        clássicos do gênero. </p>
    </Card.Text>
    <Button variant="primary">Descubra o que mais lhe agrada!</Button>
  </Card.Body>
</Card>
<br></br>
<Jumbotron fluid>
  <Container>
    <h1>Nossas Redes Sociais:</h1>
   
    <Link to="/"> <img src="https://img.icons8.com/ios-filled/48/000000/linkedin.png"/> </Link>
    <Link to="/"> <img src="https://img.icons8.com/fluent/48/000000/github.png"/> </Link>
    <Link to="/"> <img src="https://img.icons8.com/fluent/48/000000/gmail--v2.png"/> </Link>

  </Container>
</Jumbotron>

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Receba as novidades</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  
</Form>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>

   
    <Link to="/using-typescript/"> </Link>

  
  </Layout>
)

export default IndexPage
