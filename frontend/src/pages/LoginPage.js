import React from 'react'
// import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    // let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form >
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage
// import React from 'react'

// const LoginPage = ()=> {
//   return (
//     <div>
//       <form>
//           <input type='text' name = 'username' placeholder='enter username'/>
//           <input type='password' name = 'password' placeholder='enter password'/>
//           <input type='submit'/>
//       </form>

//     </div>
//   )
// }

// export default LoginPage
