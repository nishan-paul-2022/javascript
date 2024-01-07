import crypto from 'crypto';

function EncryptUsingHMAC(text, algorithm, key) {
	const cipher = crypto.createHmac(algorithm, key);
	const encrypt = cipher.update(text, 'utf8');
	const final = encrypt.digest('hex');
	console.log(final);
}

function EncryptText(text, algorithm, key, iv) {
	const cipher = crypto.createCipheriv(algorithm, key, iv);
	const encrypt = cipher.update(text, 'utf8', 'hex');
	const final = encrypt + cipher.final('hex');
	return final;
}

function DecryptText(encryptedText, algorithm, key, iv) {
	const decipher = crypto.createDecipheriv(algorithm, key, iv);
	const decrypt = decipher.update(encryptedText, 'hex', 'utf8');
	const final = decrypt + decipher.final('utf8');
	return final;
}

function EncryptDecrypt(text, algorithm, key, iv) {
	const encryptedText = EncryptText(text, algorithm, key, iv);
	const decryptedText = DecryptText(encryptedText, algorithm, key, iv);
	console.log(encryptedText);
	console.log(decryptedText);
}

function Cryptography() {
	const text = 'HelloWorld';
	const password = 'password';
	const algorithm1 = 'sha256';
	const algorithm2 = 'aes-192-cbc';
	const key1 = crypto.randomBytes(24);
	const key2 = crypto.scryptSync(password, 'salt', 24, { N: 512 });
	const iv = crypto.randomBytes(16);

	EncryptUsingHMAC(text, algorithm1, key1);
	EncryptUsingHMAC(text, algorithm1, key2);
	EncryptDecrypt(text, algorithm2, key1, iv);
	EncryptDecrypt(text, algorithm2, key1, iv);
}

Cryptography();
