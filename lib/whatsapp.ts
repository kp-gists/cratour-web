export const createWhatsappHref = (phone: string, text?: string) => {
	const api = `https://api.whatsapp.com/send?phone=`;
	if (!text) {
		return api + phone;
	}

	return api + phone + '&text=' + text;
};
