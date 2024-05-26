import crypto from 'crypto';

function EncryptUsingHMAC(text, algo, key) {
	const cipher = crypto.createHmac(algo, key);
	const encrypt = cipher.update(text, 'utf8');
	const final = encrypt.digest('hex');
	console.log(final);
}

function EncryptText(text, algo, key, iv) {
	const cipher = crypto.createCipheriv(algo, key, iv);
	const encrypt = cipher.update(text, 'utf8', 'hex');
	const final = encrypt + cipher.final('hex');
	return final;
}

function DecryptText(encryptedText, algo, key, iv) {
	const decipher = crypto.createDecipheriv(algo, key, iv);
	const decrypt = decipher.update(encryptedText, 'hex', 'utf8');
	const final = decrypt + decipher.final('utf8');
	return final;
}

function EncryptDecrypt(text, algo, key, iv) {
	const encryptedText = EncryptText(text, algo, key, iv);
	const decryptedText = DecryptText(encryptedText, algo, key, iv);
	console.log(encryptedText);
	console.log(decryptedText);
}

function Cryptography() {
	const text = 'HelloWorld';
	const password = 'password';
	const algo1 = 'sha256';
	const algo2 = 'aes-192-cbc';
	const key1 = crypto.randomBytes(24);
	const key2 = crypto.scryptSync(password, 'salt', 24, { N: 512 });
	const iv = crypto.randomBytes(16);

	EncryptUsingHMAC(text, algo1, key1);
	EncryptUsingHMAC(text, algo1, key2);
	EncryptDecrypt(text, algo2, key1, iv);
	EncryptDecrypt(text, algo2, key2, iv);
}

Cryptography();
