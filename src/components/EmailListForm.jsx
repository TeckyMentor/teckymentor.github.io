/* eslint-disable operator-linebreak */
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import "../static/styles/components/EmailListForm.scss";

const EmailListForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { result, msg } = await addToMailchimp(email);
    result === "success" && setEmail("");
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split("<")[0]);
    setStatus(result);
  };

  const handleChange = (event) => {
    return setEmail(event.target.value);
  };

  return (
    <form className="subscribe-form">
      <span className="subscribe-form__title">
        Suscríbase para mantenerte informado
      </span>
      <p className="subscribe-form__text">
        ¡Suscríbase a nuestro boletín y reciba notificaciones cuando publiquemos
        novedades acerca de nuestra comunidad!
      </p>
      <div className="subscribe-form__content">
        <input
          className="subscribe-form__input"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="example@domain.com"
          required
        />
        <span
          status={status}
          className={
            status === "success"
              ? "subscribe-form__message_success"
              : "subscribe-form__message_failure"
          }
        >
          {message}
        </span>
      </div>
      <button
        className="subscribe-form__button"
        type="submit"
        onClick={handleSubmit}
      >
        Suscribir
      </button>
    </form>
  );
};

export default EmailListForm;
