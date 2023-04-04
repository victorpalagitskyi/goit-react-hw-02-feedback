
import Counter from "./Counter/counter";

export const App  = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1> Please leave feedback</h1>
      <Counter /> 
    </div>
  );
};

