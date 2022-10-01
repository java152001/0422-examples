function Home(){

  const ctx = React.useContext(UserContext);

  const name = ctx.users[0].name;
  const email = ctx.users[0].email;

  const welcomeMessage = "Welcome to the bank " + name + "!";
  const textMessage = "You can move around using the navigation bar " + email + "."

  return (
    <Card
      txtcolor="black"
      bgcolor="red"
      header="BadBank Landing Module"
      title={welcomeMessage}
      text={textMessage}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
