/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { DataTable } from '../../components';
import './EmployeeListPage.scss';

import { EmployeeContext } from '../../App';

export function List() {
  const { employeeList, setEmployeeList } = useContext(EmployeeContext);

  let employeesNameData;
  if (employeeList.length !== 0) {
    employeesNameData = Object.getOwnPropertyNames(employeeList[0]) || '';
  } else {
    employeesNameData = [];
  }

  return (
    <main>
      <h1>Current Employees</h1>
      <DataTable data={employeeList} nameData={employeesNameData} />
    </main>
  );
}
