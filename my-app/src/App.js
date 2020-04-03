import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { getAllRepos } from './client'; // we want to import our function
import {
  Table,
  Avatar,
  Spin,
  Icon,
  Modal,
  Empty
} from 'antd';


class App extends Component {

state = {
  repos: []
}

componentDidMount (){
  this.fetchRepos();
}
  

fetchRepos = () => {
  getAllRepos()
    .then(res => res.json()
    .then(repos => {
    console.log(repos);
    this.setState({
      repos
    });
  }));
}


  render(){

    const { repos } = this.state;

    if (repos && repos.length){

      const columns = [
        {
          title: 'Repository Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Language',
          dataIndex: 'language',
          key: 'language'
        },
        {
          title: 'Created at',
          dataIndex: 'created_at',
          key: 'created_at'
        },
        {
          title: 'Updated at',
          dataIndex: 'updated_at',
          key: 'updated_at'
        },
        {
          title: 'Source code',
          dataIndex: 'html_url',
          render: (text, record) => <a href={record.html_url}>Click here</a>
        }
  
      ];
    

    return (
    <Table
      dataSource={repos}
      columns={columns}
      rowKey='name' />
      );
  }

  return <h1>Nothing to show</h1>
    
 }
}

export default App;