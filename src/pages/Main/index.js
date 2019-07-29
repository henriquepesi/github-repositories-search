import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, Error } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
    errorMessage: '',
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleDelete = repository => {
    this.setState({
      repositories: this.state.repositories.filter(rep => rep !== repository),
    });
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') throw 'You need type one repository';

      const hasRepo = repositories.find(r => r.name === newRepo);

      if (hasRepo) throw 'Duplicated repository';

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        errorMessage: '',
      });
    } catch (error) {
      const { newRepo, repositories } = this.state;
      const hasRepo = repositories.find(r => r.name === newRepo);

      if (newRepo === '') {
        this.setState({ error: true, errorMessage: error });
      } else if (hasRepo) {
        this.setState({ error: true, errorMessage: error });
      } else {
        this.setState({
          error: true,
          errorMessage: 'Repository not found ',
        });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, repositories, loading, error, errorMessage } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <small>
          Type the name of the repository. Ex: facebook/react,
          angular/angular...
        </small>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <Error>{errorMessage}</Error>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Details
              </Link>
              <FaTrash onClick={() => this.handleDelete(repository)} />
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
