import  { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>

      
          <NavLink to="/"><button>Home</button></NavLink>
         <NavLink to="/projects"><button>Feed</button></NavLink>
    
          <NavLink to="/login"><button>Login</button></NavLink>
        
        
          <NavLink to="/register"><button>Register</button></NavLink>

         
          <NavLink to="/"><button>Log Out</button></NavLink>

        
      
    </nav>
  )
}

export default Navbar;