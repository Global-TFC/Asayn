import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort by">
      <Dropdown.Item href="#/">Popular Cource</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Newest Cource</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;