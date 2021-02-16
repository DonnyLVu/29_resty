import React, { Component } from 'react';
import Header from '../components/header/Header';
import Input from '../components/input/Input';
import Results from '../components/result/Results';
import { fetchApi } from '../services/Fetch';
import styles from './RestEz.css';

export default class RestEz extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    results: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetch();
  }

  fetch = () => {
    const { url, method, body } = this.state;
    return fetchApi(url, method, body)
      .then(res => this.setState({ results: JSON.stringify(res) }));
  }

  render() {
    const { url, method, body, results } = this.state;

    return (
      <>
        <Header />
        <section className={styles.RestEz}>
          <Input
            url={url}
            method={method}
            body={body}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange} />
          <Results results={results} />
        </section>
      </>
    );
  }
}

