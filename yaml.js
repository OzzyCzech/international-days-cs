import {readFile, writeFile} from 'node:fs/promises';
import yaml from 'js-yaml';

const data = await readFile('./data/international-days.yaml', 'utf8');
const parse = yaml.load(data);

let output = '';
// Itearate over all records wirh key value pairs
for (const [key, value] of Object.entries(parse)) {
	for (const day of value) {
		day.date = key;
		output += yaml.dump([day]) + '\n';
	}
}

await writeFile('./data/international-days.yaml', output);
