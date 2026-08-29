import { Link } from 'react-router-dom'

function Signup() {
  return (
    <main>
      <h1>Signup</h1>
      <p>Create a PsySync account to get started.</p>
      <Link to="/onboarding">Go to Onboarding</Link>
    </main>
  )
}

export default Signup
