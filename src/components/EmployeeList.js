import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  // another livecycle method that will be called whenever we are about to
  //receive a new set of props to rerender the component with

  // We have to use it because in the componentWillMount we first call employeesFetch()
  //and then we get access to the result of it
  // but we are not sure if there is any result yet

  //nextProps are the next set of props that this component will be rendered with
  // this.props is still the old set of props
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  // No mather where this component is coming from ( if we are in EmployeeCreate and we go back
  // or if we come from login )
  // we will always be atempting to create the data source
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(employees);
  }
  render() {
    console.log(this.props);
    return (
      <View>
      </View>
    );
  }
}
// { ...val, uid} will return ex. {shift: 'Monday', name: 's', id '1j2j34'}
// then map will return us array of employees
const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
