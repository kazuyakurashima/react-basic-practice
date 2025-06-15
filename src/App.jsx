export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color:"blue",
    fontSize:"18px",
    margin: 100
  };
  return (
    <>
      <h1 style={{ color:"red" }}>あべーすみ</h1>
      <p style={contentStyle}>お元気</p>
      <button onClick = {onClickButton}>ボタン</button>
    </>
  );
};