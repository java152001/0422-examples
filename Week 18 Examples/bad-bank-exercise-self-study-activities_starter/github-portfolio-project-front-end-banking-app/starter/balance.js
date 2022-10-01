function Balance(){

  const ctx = React.useContext(UserContext);

  const balance = ctx.users.map(item => {
    return {name: item.name, balance: item.balance};
  });

  return (
    <>
      <h1>Balance</h1>
      
      {
        balance.map((user, index) => {
          return <div key={index}>
            <p>The balance of {user.name} is {user.balance}.</p>
          </div>
        })
      }
    </>
  )
}
