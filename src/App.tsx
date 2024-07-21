import "./App.css";
import ContactForm from "./component/ContactForm";
import Description from "./component/Description";

function App() {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <Description />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
