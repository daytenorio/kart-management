import React, { Component } from 'react';
import axios from 'axios';

import ReactTable from "react-table";
import "react-table/react-table.css";

export class Standing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      tableHeaders:[]
    };

  }

  componentWillMount(){
    axios
      .get(
        `http://kartodromogranjaviana.com.br/resultados/folha/?uid=678e125b4098c91f4896ea86f669a720&parte=prova`
      )
      .then((res) => {
        const standing = document.createElement('div');
        standing.innerHTML = res.data;

        const attributes = [...standing.querySelectorAll('table.points th')].map((th) => {
          return th.innerHTML;
        });

        console.log(attributes);
        const tableHeaders = attributes.map((a)=>{
          return {
            Header: a,
            accessor: a.replace('.','')
          } 
        })
        const results = [...standing
          .querySelectorAll('table.points tr')]
          .map((tr) => {
            let result = {};
            tr.querySelectorAll('td').forEach((td, idx) => {
              result[`${attributes[idx].replace('.','')}`] = td.innerHTML;
            });
            return result;
          });
          console.log(results)
        this.setState({ results,tableHeaders });
      });
  }
  
  render() {
    const { results,tableHeaders } = this.state;
    return (
        <ReactTable
          data={results}
          columns={tableHeaders}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    );
  }
}
