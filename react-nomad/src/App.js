import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!asdasdas!!!!!!!!!!!!!</h1>
      <Button text={"hihihihihihi"}/>
    </div>
  );
}
Button.prototype = {
  text : PropTypes.string.isRequired
}

export default App;
