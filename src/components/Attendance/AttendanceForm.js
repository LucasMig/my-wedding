import { useState } from "react";

const AttendanceForm = () => {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");

  const checkForm = () => (guestName && guestEmail ? true : false);

  const handleSubmit = (event) => {
    event.preventDefault();

    checkForm()
      ? console.log("form is complete!")
      : console.log("please fill fields");
  };

  return (
    <form
      className="form form--attendance"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="input__container">
        <label htmlFor="name" className="input__title">
          Nome completo:
        </label>
        <input
          id="name"
          type="text"
          className="text__input"
          placeholder="Fulano de Souza e Silva"
          value={guestName}
          onChange={(event) => setGuestName(event.target.value)}
        />
      </div>
      <div className="input__container">
        <label htmlFor="email" className="input__title">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="text__input"
          placeholder="seuemail@exemplo.com"
          value={guestEmail}
          onChange={(event) => setGuestEmail(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className={`btn btn--submit ${checkForm() ? "enabled" : "disabled"}`}
      >
        CONFIRMAR
      </button>
    </form>
  );
};

export default AttendanceForm;
