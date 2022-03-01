import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { instanceAxios } from "../../services/axios";

import "./styles.scss";

function Account() {

	return (
		<main className="sn__account">

			<div className="sn__account-wrapper">
				
				<h1 className="sn__account-title">my account</h1>

				<p className="sn__account-thankyou">Bem vindo, Pessoa!</p>

				<Link to="login">login</Link>
				<Link to="register">register</Link>

			</div>

		</main>
	);
}

export default Account;