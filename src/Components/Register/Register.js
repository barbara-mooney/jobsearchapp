import React from 'react';

<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" HTMLfor="name">Name</label>
        <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text" 
          name="email-address"
          id="name" 
          onChange={this.onNameChange}
        />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" HTMLfor="email-address">Email</label>
        <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"
          id="email-address" 
          onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" HTMLfor="password">Password</label>
        <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"
          id="password" 
          onChange={this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div className="">
        <input 
          onClick={this.onSubmitRegister}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
      </div>
  </div>
</main>
</article>