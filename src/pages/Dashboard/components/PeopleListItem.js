import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";


function PeopleListItem(props) {
  const navigate = useNavigate();

  const { person, id } = props

  return (
    
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage ? <p>Wage: £{person.wage}</p> : <Link to={`/view/${id + 1}`} state={{ person }}><p>More details</p></Link>  }
      
    </li>
  )
}

export default PeopleListItem
