import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[error, setError] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault()
        if (!username){
            setError("INPUT USERNAME")
          }
        if (!email){
            setError("input email")  
        }
        if (!password){
            setError("input password")
        }else{
            console.log('Form data submitted:', username,email,password);
        }
          
          setUsername('')
          setEmail('')
          setPassword('')
        setError('')
      };

      

       

    return(
        <>
        <form action={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p className="error">{error}</p>}

        
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error">{error}</p>}

      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
    
        />
        {error && <p className="error">{error}</p>}

      </div>
      <button type="submit">SUBMIT</button>
      
        </form>





        </>
    )
}

export default RegistrationForm;


