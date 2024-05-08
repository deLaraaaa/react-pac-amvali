import React, { useState } from "react";

function FormsLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="form" action="POST">
      <label>
        <input className="input" type="email" placeholder="" required />
        <span>E-Mail...</span>
      </label>

      <label>
        <input className="input" type="text" placeholder="" required />
        <span>Nome Completo...</span>
      </label>
      <label className="password-label">
        <input
          className="input"
          type={showPassword ? "text" : "password"}
          placeholder=""
          required
          id="password"
        />
        <span>Senha...</span>
        <img
          src={showPassword ? "/img/view.png" : "/img/hide.png"}
          alt="Esconder Senha"
          id="togglePassword"
          style={{ width: "30px", cursor: "pointer" }}
          onClick={handleTogglePassword}
        />
      </label>
    </form>
  );
}

export default FormsLogin;
