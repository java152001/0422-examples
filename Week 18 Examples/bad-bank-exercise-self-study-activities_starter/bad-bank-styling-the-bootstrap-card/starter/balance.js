function Balance(){

  const ctx = React.useContext(UserContext);

  const balance = ctx.users.map(item => {
    return item.balance;
  });

  return (
    <h1>Balance</h1>

    {JSON.stringify(balance)}

  )
}
