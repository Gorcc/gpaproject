import React from 'react'

const Layout = () => {
  return (
    <div className='align'>
        <div class="grid">

<form action="" method="POST" class="form login">

  <div class="form__field">
    <label for="login__username"><i class="fa-solid fa-users"></i><svg class="icon">
        
      </svg><span class="hidden">Username</span></label>
    <input autocomplete="username" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required/>
  </div>

  <div class="form__field">
    <label for="login__password"><i class="fa-solid fa-lock"></i><svg class="icon">
      </svg><span class="hidden">Password</span></label>
    <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required/>
  </div>

  <div class="form__field">
    <input type="submit" value="Sign In"/>
  </div>

</form>

</div>


    </div>
  )
}

export default Layout