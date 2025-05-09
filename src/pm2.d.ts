import 'pm2'
declare module 'pm2' {
	function sendLineToStdin(id: string, line: string, cb: (err: Error, result: unknown) => void): void
	function sendLineToStdin(id: string, line: string, separator: string, cb: (err: Error, result: unknown) => void): void
	function streamLogs(id?: string, lines?: number, raw?: boolean, timestamp?: string, exclusive?: 'err' | 'out', highlight?: string): void
}
