/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'shigni-modale-p14-master';
import 'remixicon/fonts/remixicon.css';

import States from '../../assets/data/States.json';
import Departments from '../../assets/data/Departments.json';
import 'react-datepicker/dist/react-datepicker.css';

import Dropdown from '../Dropdown/Dropdown';

import { EmployeeContext } from '../../App';

export function Create() {
  const [modalReset, setModalReset] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const { employeeList, setEmployeeList } = useContext(EmployeeContext);

  const modalParameter = {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    boxShadow: '0 0 5px #1B1919',
    color: '#1B1919',
    fontSize: 18,
    height: 'fit-content',
    padding: '20px 50px',
    width: 'fit-content',
  };

  const [employee, setEmployee] = useState({
    'First name': '',
    'Last name': '',
    'Date of birth': '',
    'Start date': '',

    State: States[0].abbreviation,
    'ZIP code': '',
    Street: '',
    City: '',

    Department: Departments[0].abbreviation,
  });

  const handleFormChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  };

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const handleFormDateChange = (name, value) => {
    setEmployee({
      ...employee,
      [name]: new Date(value).toLocaleDateString('fr'),
    });
  };

  const handleFormDropdownChange = (name, value) => {
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const [formOK, setFormOK] = useState(false);
  const [errorForm, setErrorForm] = useState([]);

  const regex = /^[a-zA-Z]+$/;

  const saveEmployee = () => {
    setErrorForm([]);
    Object.keys(employee).forEach((input, index) => {
      if (
        regex.test(employee['Last name']) === false ||
        regex.test(employee['First name']) === false ||
        Object.values(employee)[index] === ''
      ) {
        setFormOK(false);
        setErrorForm((errorForm) => [...errorForm, input]);
      }
    });

    if (errorForm.length === 0) {
      setFormOK(true);
    }
  };

  useEffect(() => {
    if (formOK === true && errorForm.length === 0) {
      setModalReset(!modalReset);
      setDisplayModal(true);

      setEmployeeList((currentValue) => {
        console.log(currentValue);
        currentValue.push(employee);
        return currentValue;
      });

      setEmployee({
        'First name': '',
        'Last name': '',
        'Date of birth': '',
        'Start date': '',

        State: States[0].abbreviation,
        'ZIP code': '',
        Street: '',
        City: '',

        Department: Departments[0].abbreviation,
      });
      document.getElementById('form-create').reset();
      setDateOfBirth('');
      setStartDate('');
    }
  }, [errorForm]);

  return (
    <>
      <div className="form-box">
        <form action="#" id="form-create">
          <div className="info-box">
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="first-name">First name</label>
                <input
                  autoComplete="off"
                  id="first-name"
                  name="First name"
                  onChange={handleFormChange}
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div className="form-col">
                <label htmlFor="last-name">Last name</label>
                <input
                  autoComplete="off"
                  id="last-name"
                  name="Last name"
                  onChange={handleFormChange}
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="date-of-birth">Date of birth</label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="date-picker-input"
                  id="date-of-birth"
                  maxDate={new Date()}
                  onChange={(date) => {
                    handleFormDateChange('Date of birth', date);
                    setDateOfBirth(date);
                  }}
                  placeholderText="jj/mm/aaaa"
                  selected={dateOfBirth}
                />
              </div>
              <div className="form-col">
                <label htmlFor="start-date">Start date</label>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="date-picker-input"
                  id="start-date"
                  maxDate={new Date()}
                  minDate={dateOfBirth}
                  onChange={(date) => {
                    handleFormDateChange('Start date', date);
                    setStartDate(date);
                  }}
                  placeholderText="jj/mm/aaaa"
                  selected={startDate}
                />
              </div>
            </div>

            <div className="form-row form-row-full">
              <div className="form-col form-col-full">
                <label htmlFor="Department">Department</label>
                <Dropdown
                  name="Department"
                  onChangeDropdown={(value) =>
                    handleFormDropdownChange('Department', value)
                  }
                  optionsList={Departments}
                />
              </div>
            </div>
          </div>
          <div className="address-box">
            <div className="form-divider">
              <span className="form-category">Address</span>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="State">State</label>
                <Dropdown
                  name="State"
                  onChangeDropdown={(value) =>
                    handleFormDropdownChange('State', value)
                  }
                  optionsList={States}
                />
              </div>
              <div className="form-col">
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  name="ZIP code"
                  onChange={handleFormChange}
                  placeholder="ZIP code"
                  type="number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="street">Street</label>
                <input
                  autoComplete="off"
                  id="street"
                  name="Street"
                  onChange={handleFormChange}
                  placeholder="Street name"
                  type="text"
                />
              </div>
              <div className="form-col">
                <label htmlFor="city">City</label>
                <input
                  autoComplete="off"
                  id="city"
                  name="City"
                  onChange={handleFormChange}
                  placeholder="City name"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
        {errorForm.length !== 0 && (
          <div className="form-errors">
            <span className="form-error-info">
              Please fill in the following fields correctly :
            </span>
            <ul className="form-error-list">
              {errorForm.map((error, index) => (
                <li className="form-error" key={index}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button id="form-btn" onClick={saveEmployee} type="submit">
          Save
        </button>
      </div>
      <div className="modal-">
        <Modal
          key={modalReset}
          id="modal-created"
          showModal={displayModal}
          closeModal={() => setDisplayModal(false)}
          parameter={modalParameter}
          message="Employee Created !"
        />
      </div>
    </>
  );
}
