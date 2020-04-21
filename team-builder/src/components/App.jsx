import React, {useState} from 'react';
import Form from './Form'
import '../App.css'

const initialTeamList = [
  {
    username: 'Caleb',
    email: 'Caleb@coolest.net',
    role: 'Frontend',
    favFood: 'Honeydew'
  },
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
  favFood: '',
}

function App() {
  const [teamList, setTeamList] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    setFormValues({
      ...formValues, [evt.target.name]: evt.target.value
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const newMember = {
      username: formValues.username,
      email: formValues.email,
      role: formValues.role,
      favFood: formValues.favFood,
    }
    setTeamList([ ...teamList, newMember])
    setFormValues(initialFormValues)
  }

  return (
    <div>
      <h1>Friends</h1>
      {teamList.map(teamMember => {
        return (
          <div>
            <h3>Username: {teamMember.username}</h3>
            <h4>Email: {teamMember.email}</h4>
            <h4>Role: {teamMember.role}</h4>
            <h4>Favorite Food: {teamMember.favFood}</h4>
          </div>
        )
      })}
      <div className='container'>
        <Form values={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/> 
      </div>
      
    </div>

  )
}

export default App;
