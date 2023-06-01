import { DataTable } from '../../components';
import './EmployeeListPage.scss';

export function List() {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];

  let employeesNameData;
  if (employees.length !== 0) {
    employeesNameData = Object.getOwnPropertyNames(employees[0]) || '';
  } else {
    employeesNameData = [];
  }

  return (
    <main>
      <h1>Current Employees</h1>
      <DataTable data={employees} nameData={employeesNameData} />
    </main>
  );
}
