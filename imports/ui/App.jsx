import React, {Component} from 'react';
import EmployeeList from './components/employees/EmployeeList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <EmployeeList dados={[]}/>
    );
  }
}
