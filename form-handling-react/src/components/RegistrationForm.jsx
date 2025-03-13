import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[error, setErrors] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault()
        if (!username){
            setErrors("INPUT USERNAME")
          }
        if (!email){
            setErrors("input email")  
        }
        if (!password){
            setErrors("input password")
        }else{
            console.log('Form data submitted:', username,email,password);
        }
          
          setUsername('')
          setEmail('')
          setPassword('')
        setErrors('')
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


