import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardDeck, Image, Button } from "react-bootstrap"
import slide07 from "../images/slide07.jpg"
import slide08 from "../images/slide08.jpg"
import slide09 from "../images/slide09.jpg"

import slide10 from "../images/slide10.jpg"
import slide11 from "../images/slide11.jpg"
import slide12 from "../images/slide12.jpg"
import slide13 from "../images/slide13.jpg"

const SecondPage = () => (
  <Layout>
    
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    <Card className="text-white">
  <Card.Img img src={slide13} alt="my first" />
  <Card.ImgOverlay>
    <Card.Title></Card.Title>  
  </Card.ImgOverlay>
  <Button id="botao" variant="secondary" size="lg" active>
     Vingadores Guerra Infinita 
  </Button>
</Card>

<br></br>
<br></br>
<br></br>

    <CardDeck className="texto">
      <Card>
      <Button variant="outline-primary">Saiba mais...</Button>
        <Card.Img img src={slide08} alt="my first" />
        <Card.Text>
          <p>Thor é um filme de super-herói americano de 2011, baseado no personagem homônimo da Marvel Comics com um poder inigualável...</p> {' '}
        </Card.Text>
        <Button variant="outline-danger">Saiba mais...</Button>
        <Card.Img img src={slide10} alt="my first" />
        <Card.Body>
          <Card.Text>
            <p>Deadpool é um filme de ação e comédia americano dirigido por Tim Miller e distribuído pela...</p>
      </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
      <Button variant="outline-danger">Saiba mais...</Button>
        <Card.Img img src={slide07} alt="my first" />
        <Card.Text>
          <p>Black Widow (bra/prt: Viúva Negra) é um futuro filme estadunidense de super-herói de 2021...{' '}</p>
        </Card.Text>
        <Button variant="outline-dark">Saiba mais...</Button>
        <Card.Img img src={slide11} alt="my first" />
        <Card.Body>

          <Card.Text>
           <p> X-Men – o Filme é, com certeza, uma das mais felizes adaptações de quadrinhos para o cinema...{' '} </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
      <Button variant="outline-warning">Saiba mais...</Button>
        <Card.Img img src={slide09} alt="my first" />
        <Card.Text>
         <p> Spider-Man (no Brasil e em Portugal, Homem-Aranha) é um filme norte-americano de 2002 com algumas releituras...{' '} </p>
        </Card.Text>
        <Button variant="outline-success">Saiba mais...</Button>
        <Card.Img img src={slide12} alt="my first" />
        <Card.Body>
          <Card.Text>
           <p> Black Panther (Brasil: Pantera Negra /Portugal: Black Panther) é um filme de super-herói estadunidense de 2018, baseado no personagem de mesmo nome da ...</p>
      </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    </CardDeck>
    <SEO title="Filmes" />
    
    <Link to="/">Página inicial</Link>
  </Layout>
)

export default SecondPage
