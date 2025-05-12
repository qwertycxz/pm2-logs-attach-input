# pm2-logs-attach-input
[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/qwertycxz/pm2-logs-attach-input/latest)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub contributors](https://img.shields.io/github/contributors/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub Created At](https://img.shields.io/github/created-at/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub last commit](https://img.shields.io/github/last-commit/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![NPM Collaborators](https://img.shields.io/npm/collaborators/pm2-logs-attach-input)](https://www.npmjs.com/package/pm2-logs-attach-input)
[![GitHub language count](https://img.shields.io/github/languages/count/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub top language](https://img.shields.io/github/languages/top/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/qwertycxz/pm2-logs-attach-input/package.yml)](https://github.com/qwertycxz/pm2-logs-attach-input/actions)
[![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/qwertycxz/pm2-logs-attach-input/total)](https://github.com/qwertycxz/pm2-logs-attach-input/releases)
[![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/qwertycxz/pm2-logs-attach-input/latest/total)](https://github.com/qwertycxz/pm2-logs-attach-input/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/qwertycxz)](https://ko-fi.com/qwertycxz)
[![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input/issues)
[![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input/discussions)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub repo size](https://img.shields.io/github/repo-size/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/pm2-logs-attach-input)](https://www.npmjs.com/package/pm2-logs-attach-input)
[![GitHub followers](https://img.shields.io/github/followers/qwertycxz)](https://github.com/qwertycxz)
[![GitHub forks](https://img.shields.io/github/forks/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub Repo stars](https://img.shields.io/github/stars/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)
[![GitHub watchers](https://img.shields.io/github/watchers/qwertycxz/pm2-logs-attach-input)](https://github.com/qwertycxz/pm2-logs-attach-input)


A workaround to send messages to processes in `pm2 logs`.

This script is similar to `pm2 logs`, but its stdin is open.

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
