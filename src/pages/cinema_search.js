import React, {Component} from 'react'
import Layout from '../components/layout'
import { Icon, Container, Input, Button } from 'semantic-ui-react'
import { Link } from 'gatsby'
//import keydown from 'react-keydown'



class SearchPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      mode: 'search',
      search_term: 'Busque um cinema',
    }
  }

  //@keydown('enter')

  searchPage = () => this.setState({showDemand: false, mode: 'search'})
  loadingPage = () => this.setState({showDemand: true, mode: 'loading'})
  resultPage= () => this.setState({mode: 'result'})

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  /*
  saveDemandToDatabase() {
    var url = 'http://127.0.0.1:5000/demanda';

    console.log(this.state.limit_date)

    var demand = {
      id_cliente: 1,
      titulo: this.state.title,
      tipo_servico: this.state.service_type,
      data_limite: this.state.limit_date,
      descricao: this.state.description,
    };

  /*  fetch(url, {
      method: 'PUT',
      body: JSON.stringify(demand),
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }*/

  render() {
    return (
    <Layout>
       
        <Container textAlign="center">
          <div style={{ paddingTop: 190, paddingBottom: 90}}>
            <h1>Buscar cinema</h1>
          </div>
        </Container>
        

        {
          this.state.mode === 'search'?
          <Container>
            
            <Container textAlign="center" style={{ paddingBottom: 10 }}>
              <Input
                style={{ paddingBottom: 10 }}
                name='search'
                icon={<Icon name='search' inverted circular link onClick={this.loadingPage}/>}
                id="form-input-control-loading"
                fluid
                control={Input}
                onKeyDown={this.loadingPage}
                //label="Buscar cinema"
                onChange={event => this.handleChange(event)}
                placeholder={this.state.search_term}
              />
            </Container>
          </Container>
          : null
        }

        {
          this.state.mode === 'loading'?
          <Container>
            
            <Container textAlign="center" style={{ paddingBottom: 10 }}>
              <Input
                style={{ paddingBottom: 10 }}
                name='search'
                icon={<Icon name='loading' inverted circular link onClick={this.resultPage}/>}
                id="form-input-control-search"
                fluid
                loading
                
                //label="Buscar cinema"
                onChange={event => this.handleChange(event)}
                placeholder={this.state.search_term}
              />
            </Container>
          </Container>
          : null
        }
        
    </Layout>
  )
  }
}

export default SearchPage
