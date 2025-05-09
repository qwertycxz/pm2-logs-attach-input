import * as pm2 from 'pm2'
import { createInterface } from 'readline'
import { exclusive, highlight, id, line, raw, timestamp } from './cli'
pm2.streamLogs(id, line, raw, timestamp, exclusive, highlight)
const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
})
rl.on('close', () => {
	process.exit()
})
rl.on('line', (input) => {
	const line = input.split(' ');
	pm2.describe(line.shift(), (err, list) => {
		if (err) {
			process.exit(1)
		}
		if (list.length != 1) {
			console.error(`Expected exactly one process, but found ${list.length}.`)
			process.exit(1)
		}
		pm2.sendLineToStdin(list[0].pm_id.toString(), line.join(' '), function(err) {
			if (err) {
				process.exit(1)
			}
		})
	})
})
