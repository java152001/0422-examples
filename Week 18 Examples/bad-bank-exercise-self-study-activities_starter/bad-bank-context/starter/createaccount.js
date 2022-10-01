function CreateAccount(){
  const ctx = React.useContext(UserContext);    
  return (
    <h1>Create Account<br/>
      Thanks for your interest in an account {(ctx.users[0].name)} at email address {(ctx.users[0].email)}!
    </h1>
  );
}