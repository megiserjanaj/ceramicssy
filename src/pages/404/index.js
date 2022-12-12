import "./styles.scss";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry 😔, we couldn't find what you were looking for.</p>
      <br />
      <a href="/">Go home&nbsp;&rarr;</a>
    </div>
  );
};

export default ErrorPage;
