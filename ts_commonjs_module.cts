import fs1 = require('fs');
const fs2 = import('fs');

function FileRead1(filename: string): string {
	return fs1.readFileSync(filename).toString();
}

async function FileRead2(filename: string): Promise<string> {
	const fs2Resolved = await fs2;
	const ans = fs2Resolved.readFileSync(filename).toString();
	console.log(ans);
	return ans;
}

const content1 = FileRead1('zmax.html');
console.log(content1, '\n');
FileRead2('zmax.html');
