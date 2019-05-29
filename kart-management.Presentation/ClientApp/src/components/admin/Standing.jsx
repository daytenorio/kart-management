import React, { Component } from 'react';
import axios from 'axios';

export class Standing extends Component {
  constructor() {
    super();
    axios
      .get(
        `http://kartodromogranjaviana.com.br/resultados/folha/?uid=678e125b4098c91f4896ea86f669a720&parte=prova`
      )
      .then((res) => {
        const standing = document.createElement('div');
        standing.innerHTML = res.data;

        let result = {};

        const format = standing.querySelectorAll('table.points th');
        // .forEach((th) => {
        //   // return th.innerHTML;
        //   console.log(th.innerHTML);
        // });

        console.log(format);
        // const header = standing
        //   .querySelectorAll('table.points tr')
        //   .forEach((tr) => {
        //     tr.querySelectorAll('td').forEach((td, idx) => {
        //       console.log(td.innerHTML, format[idx]);
        //     });
        //     console.log('---------------');
        //   });

        // const posts = res.data.data.children.map((obj) => obj.data);
        //this.setState({ posts });
      });
  }
  render() {
    return <h1>Day</h1>;
  }
}
