
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'MOGAtheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ff5555 
		"--color-primary-50": "255 230 230", // #ffe6e6
		"--color-primary-100": "255 221 221", // #ffdddd
		"--color-primary-200": "255 213 213", // #ffd5d5
		"--color-primary-300": "255 187 187", // #ffbbbb
		"--color-primary-400": "255 136 136", // #ff8888
		"--color-primary-500": "255 85 85", // #ff5555
		"--color-primary-600": "230 77 77", // #e64d4d
		"--color-primary-700": "191 64 64", // #bf4040
		"--color-primary-800": "153 51 51", // #993333
		"--color-primary-900": "125 42 42", // #7d2a2a
		// secondary | #0080ff 
		"--color-secondary-50": "217 236 255", // #d9ecff
		"--color-secondary-100": "204 230 255", // #cce6ff
		"--color-secondary-200": "191 223 255", // #bfdfff
		"--color-secondary-300": "153 204 255", // #99ccff
		"--color-secondary-400": "77 166 255", // #4da6ff
		"--color-secondary-500": "0 128 255", // #0080ff
		"--color-secondary-600": "0 115 230", // #0073e6
		"--color-secondary-700": "0 96 191", // #0060bf
		"--color-secondary-800": "0 77 153", // #004d99
		"--color-secondary-900": "0 63 125", // #003f7d
		// tertiary | #1bd0e4 
		"--color-tertiary-50": "221 248 251", // #ddf8fb
		"--color-tertiary-100": "209 246 250", // #d1f6fa
		"--color-tertiary-200": "198 243 248", // #c6f3f8
		"--color-tertiary-300": "164 236 244", // #a4ecf4
		"--color-tertiary-400": "95 222 236", // #5fdeec
		"--color-tertiary-500": "27 208 228", // #1bd0e4
		"--color-tertiary-600": "24 187 205", // #18bbcd
		"--color-tertiary-700": "20 156 171", // #149cab
		"--color-tertiary-800": "16 125 137", // #107d89
		"--color-tertiary-900": "13 102 112", // #0d6670
		// success | #00ff00 
		"--color-success-50": "217 255 217", // #d9ffd9
		"--color-success-100": "204 255 204", // #ccffcc
		"--color-success-200": "191 255 191", // #bfffbf
		"--color-success-300": "153 255 153", // #99ff99
		"--color-success-400": "77 255 77", // #4dff4d
		"--color-success-500": "0 255 0", // #00ff00
		"--color-success-600": "0 230 0", // #00e600
		"--color-success-700": "0 191 0", // #00bf00
		"--color-success-800": "0 153 0", // #009900
		"--color-success-900": "0 125 0", // #007d00
		// warning | #ff8000 
		"--color-warning-50": "255 236 217", // #ffecd9
		"--color-warning-100": "255 230 204", // #ffe6cc
		"--color-warning-200": "255 223 191", // #ffdfbf
		"--color-warning-300": "255 204 153", // #ffcc99
		"--color-warning-400": "255 166 77", // #ffa64d
		"--color-warning-500": "255 128 0", // #ff8000
		"--color-warning-600": "230 115 0", // #e67300
		"--color-warning-700": "191 96 0", // #bf6000
		"--color-warning-800": "153 77 0", // #994d00
		"--color-warning-900": "125 63 0", // #7d3f00
		// error | #804040 
		"--color-error-50": "236 226 226", // #ece2e2
		"--color-error-100": "230 217 217", // #e6d9d9
		"--color-error-200": "223 207 207", // #dfcfcf
		"--color-error-300": "204 179 179", // #ccb3b3
		"--color-error-400": "166 121 121", // #a67979
		"--color-error-500": "128 64 64", // #804040
		"--color-error-600": "115 58 58", // #733a3a
		"--color-error-700": "96 48 48", // #603030
		"--color-error-800": "77 38 38", // #4d2626
		"--color-error-900": "63 31 31", // #3f1f1f
		// surface | #616161 
		"--color-surface-50": "231 231 231", // #e7e7e7
		"--color-surface-100": "223 223 223", // #dfdfdf
		"--color-surface-200": "216 216 216", // #d8d8d8
		"--color-surface-300": "192 192 192", // #c0c0c0
		"--color-surface-400": "144 144 144", // #909090
		"--color-surface-500": "97 97 97", // #616161
		"--color-surface-600": "87 87 87", // #575757
		"--color-surface-700": "73 73 73", // #494949
		"--color-surface-800": "58 58 58", // #3a3a3a
		"--color-surface-900": "48 48 48", // #303030
		
	}
}