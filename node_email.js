import nodemailer from 'nodemailer';

const mailAuthentication = {
	service: 'gmail',
	auth: {
		user: 'nishanpaul12011996se@gmail.com',
		pass: 'nzmnqerwruwzudco' // app-password, not regular password
	}
};

const mailOptions = {
	from: 'nishanpaul12011996se@gmail.com',
	to: 'np007mlf@gmail.com, udntnomeyt@gmail.com',
	subject: 'sending email using node.js',
	html: '<div>hello, <b>batman</b></div>'
	// text: 'hello, batman'
};

const callback = (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log('email sent: ' + info.response);
	}
};

const transporter = nodemailer.createTransport(mailAuthentication);
transporter.sendMail(mailOptions, callback);

/* either html or text */
