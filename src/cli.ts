function invalidOption(code = 0): never {
	console.log(`
Usage: pm2-logs-attach-input [id|name|namespace] [options]
Options:
	-h, --help           show this help message
	--raw                raw output
	--err                only shows error output
	--out                only shows standard output
	--lines <n>          output the last N lines, instead of the last 15 by default
	--timestamp [format] add timestamps (default format YYYY-MM-DD-HH:mm:ss)
	--highlight [value]  highlights the given value
	`)
	process.exit(code)
}
export let id = 'all'
export let exclusive: 'err' | 'out' | undefined
export let highlight: string | undefined
export let line = 15
export let raw = false
export let timestamp: string | undefined
let next_highlight = false
let next_lines = false
let next_timestamp = false
for (let i = 0; i < process.argv.length; i++) {
	switch (i) {
		case 0:
		case 1:
			continue
		case 2:
			if (process.argv[2] == '-h' || process.argv[2] == '--help') {
				invalidOption()
			}
			if (!process.argv[2].startsWith('-')) {
				id = process.argv[2]
				break
			}
		default:
			if (next_highlight) {
				next_highlight = false
				highlight = process.argv[i]
				continue
			}
			if (next_lines) {
				next_lines = false
				line = parseInt(process.argv[i])
				if (isNaN(line)) {
					invalidOption(2)
				}
				continue
			}
			if (next_timestamp) {
				next_timestamp = false
				timestamp = process.argv[i]
				continue
			}
			switch (process.argv[i]) {
				case '--err':
					exclusive = 'err'
					break
				case '--out':
					exclusive = 'out'
					break
				case '--highlight':
					next_highlight = true
					break
				case '--line':
					next_lines = true
					break
				case '--timestamp':
					next_timestamp = true
					break
				case '--raw':
					raw = true
					break
				case '--format':
				case '--json':
				case '--nostream':
					console.error('Sorry, this option is not supported yet')
				default:
					invalidOption(2)
			}
	}
}
if (next_highlight || next_lines || next_timestamp) {
	invalidOption(2)
}
