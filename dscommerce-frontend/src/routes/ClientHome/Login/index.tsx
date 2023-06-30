import "./styles.css";
import { CredentialsDTO } from "../../../models/auth";
import { useState } from "react";
import * as authService from "../../../services/auth-service";

function Login() {
  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: "",
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    authService
      .loginRequest(formData)
      .then((response) => {
        authService.saveAccessToken(response.data.access_token);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Erro no login,", error);
      });
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  onChange={handleInputChange}
                  name="username"
                  value={formData.username}
                  className="dsc-form-control"
                  type="text"
                  placeholder="Email"
                />
                <div className="dsc-form-error"></div>
              </div>
              <div>
                <input
                  onChange={handleInputChange}
                  name="password"
                  value={formData.password}
                  className="dsc-form-control"
                  type="password"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
