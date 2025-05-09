# pm2-logs-attach-input
A workaround to send messages to processes in `pm2 logs`.

This script is samilar to `pm2 logs`, but its stdin is open.

This repo has the same functionality as [`pm2 logs --attach-input`](https://github.com/Unitech/pm2/pull/5981). While it is not merged into pm2 yet.
## Example:
```bash
$ pm2-logs-attach-input # We could send message to stdin of processes in `pm2 logs`. Below is an example to send "Lorem Ipsum" to process 0.
> 0 Lorem Ipsum
```
## Usage:
```bash
pm2-logs-attach-input [id|name|namespace] [options]
```
### Options:
	-h, --help           show this help message
	--raw                raw output
	--err                only shows error output
	--out                only shows standard output
	--lines <n>          output the last N lines, instead of the last 15 by default
	--timestamp [format] add timestamps (default format YYYY-MM-DD-HH:mm:ss)
	--highlight [value]  highlights the given value
## Contributor
[@qwertycxz](https://github.com/qwertycxz)
## How could I contribute?
[Issue](https://github.com/qwertycxz/GLmod-IgnoreFile/issues/new) and [Pull-requests](https://github.com/qwertycxz/GLmod-IgnoreFile/compare) are both welcomed.
## License
[Apache 2.0](LICENSE) © qwertycxz
