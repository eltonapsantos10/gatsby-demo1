import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Jumbotron, Button} from "react-bootstrap"

const Thirdpage = () => (
  <Layout>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <SEO title="Cartaz" />
    
    <Jumbotron id="jumb">
  <h1>Comunicado:</h1>
  <p>
  Por recomendação do Governo do Estado de São Paulo, informamos que a nossas unidades na capital paulista (Augusta, Frei Caneca e Pompéia) estarão fechadas pelos próximos dias, a partir de amanhã, dia 17 de março.

Reforçamos que estas medidas têm o objetivo de manter a saúde dos nossos colaboradores e clientes e que continuaremos a agir de acordo com a responsabilidade social que nos cabe para evitar a evolução dos casos na cidade e no país.

Seguiremos acompanhando as recomendações das autoridades e dividiremos com vocês qualquer novidade.
  </p>
  <p>
      <br></br>
      <br></br>
      <br></br>
    <Button variant="dark">Saiba mais</Button>
  </p>
</Jumbotron>

    <Link to="/">Página inicial</Link>
  </Layout>
)

export default Thirdpage
