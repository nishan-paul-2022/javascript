/* eslint-disable @typescript-eslint/no-unused-vars */

import dns from 'dns';

// Retrieves the list of IP addresses of the DNS servers used by the system.
function getServers() {
	const servers = dns.getServers();
	console.log(`getServers() | DNS Servers: ${servers}`);
}

// Sets the list of IP addresses of DNS servers to be used by the system.
function setServers() {
	const customServers = ['8.8.8.8', '8.8.4.4'];
	console.log('setServers() |');
	dns.setServers(customServers);
	getServers();
}

// Resolves a hostname to an IP address using DNS.
function lookup() {
	dns.lookup('www.google.com', (err, address, family) => {
		if (err) {
			throw err;
		}
		console.log(`lookup() | IP Address: ${address}, Family: ${family}`);
	});
}

// Resolves an IP address and port to a hostname and service.
function lookupService() {
	const address = '8.8.8.8';
	const port = 80;
	dns.lookupService(address, port, (err, hostname, service) => {
		if (err) {
			throw err;
		}
		console.log(
			`lookupService() | Hostname: ${hostname}, Service: ${service}`
		);
	});
}

// Resolves an IP address to an array of hostnames (reverse DNS lookup).
function reverse() {
	dns.reverse('8.8.8.8', (err, hostnames) => {
		if (err) {
			throw err;
		}
		console.log(`reverse() | Hostnames: ${hostnames}`);
	});
}

/*-----new-chapter-01-----*/

// Resolves a hostname to an array of resource records based on the query type (rrtype).
function resolve() {
	dns.resolve('www.google.com', 'A', (err, addresses) => {
		if (err) {
			throw err;
		}
		console.log(`resolve() | IP Addresses: ${addresses}`);
	});
}

// Resolves a hostname to an array of IPv4 addresses.
function resolve4() {
	dns.resolve4('www.google.com', (err, addresses) => {
		if (err) {
			throw err;
		}
		console.log(`resolve4() | IPv4 Addresses: ${addresses}`);
	});
}

// Resolves a hostname to an array of IPv6 addresses.
function resolve6() {
	dns.resolve6('www.google.com', (err, addresses) => {
		if (err) {
			throw err;
		}
		console.log(`resolve6() | IPv6 Addresses: ${addresses}`);
	});
}

/*-----new-chapter-02-----*/

// Resolves a hostname to an array of mail exchange records.
function resolveMx() {
	dns.resolveMx('google.com', (err, mxRecords) => {
		if (err) {
			throw err;
		}
		console.log(`resolveMx() | MX Records: ${mxRecords}`);
	});
}

// Resolves a hostname to an array of name server records.
function resolveNs() {
	dns.resolveNs('google.com', (err, nsRecords) => {
		if (err) {
			throw err;
		}
		console.log(`resolveNs() | NS Records: ${nsRecords}`);
	});
}

// Resolves a hostname to a start of authority record.
function resolveSoa() {
	dns.resolveSoa('google.com', (err, soaRecord) => {
		if (err) {
			throw err;
		}
		console.log(`resolveSoa() | SOA Record: ${soaRecord}`);
	});
}

// Resolves a hostname to an array of text records (TXT records).
function resolveTxt() {
	dns.resolveTxt('google.com', (err, txtRecords) => {
		if (err) {
			throw err;
		}
		console.log(`resolveTxt() | TXT Records: ${txtRecords}`);
	});
}

// Resolves a hostname to an array of canonical name records.
function resolveCname() {
	dns.resolveCname('www.github.com', (err, cnames) => {
		if (err) {
			throw err;
		}
		console.log(`resolveCname() | CNAME Records: ${cnames}`);
	});
}

/*-----new-chapter-03-----*/

// Resolves a hostname to an array of service records.
function resolveSrv() {
	dns.resolveSrv('_http._tcp.google.com', (err, srvRecords) => {
		if (err) {
			throw err;
		}
		console.log(`resolveSrv() | SRV Records: ${srvRecords}`);
	});
}

// Resolves an IP address to an array of reverse DNS records (PTR records).
function resolvePtr() {
	dns.resolvePtr('8.8.8.8', (err, ptrRecords) => {
		if (err) {
			throw err;
		}
		console.log(`resolvePtr() | PTR Records: ${ptrRecords}`);
	});
}

getServers();
setServers();
lookup();
reverse();
lookupService();

resolve();
resolve4();
resolve6();

resolveMx(); // mail service record
resolveNs(); // name server record
resolveSoa(); // start of authority record
resolveTxt(); // textual record
resolveCname(); // canonical name record

// resolveSrv(); // service record
// resolvePtr(); // reverse DNS record
