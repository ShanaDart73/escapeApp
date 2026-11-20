const SECRET_KEY = "0x4AAAAAAGJ9_wFc1EJR7Iv-CfexeUirADc";

async function validateTurnstile(token, remoteip) {
	try {
		const response = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					secret: SECRET_KEY,
					response: token,
					remoteip: remoteip,
				}),
			},
		);

		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Turnstile validation error:", error);
		return { success: false, "error-codes": ["internal-error"] };
	}
}