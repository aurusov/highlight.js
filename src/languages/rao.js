/*
Language: rao
*/

function(hljs) {
	return {
		case_insensitive: true,
		lexemes: /[a-zA-Z_$][a-zA-Z0-9_]*/,
		keywords: {
			keyword: 'type new operation rule event relevant relevants combination of types ' +
					'logic edge def activity search sequence constant ' +
					'result dataSource var val if else for switch case default ' +
					'enum int long double Integer boolean as ' +
					'String array break return resource ' +
					'frame background drawText drawRectangle drawLine drawCircle drawEllipse drawTriangle drawImage ' +
					'RaoColor BLACK BLUE CYAN DARK_BLUE DARK_CYAN DARK_GRAY DARK_GREEN DARK_MAGENTA DARK_RED ' +
					'DARK_YELLOW GRAY GREEN MAGENTA RED WHITE YELLOW ' +
					'Alignment LEFT CENTER RIGHT ResultMode AUTO MANUAL',
			constant: 'true false',
			built_in:'accessible all filter any onlyif exists forall next minBySafe maxBySafe ' +
					'condition parent priority ' +
					'startCondition heuristic compareTops terminateCondition init ' +
					'draw mouseDown mouseUp mouseMove mouseDoubleClick mouseScrolled keyReleased keyPressed ' +
					'DiscreteHistogram ContinuousHistogram Values Uniform Exponential Normal Triangular ' +
					'duration begin end execute stop plan evaluate ' +
					'create erase currentTime log update'
		},
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			hljs.QUOTE_STRING_MODE,
			hljs.APOS_STRING_MODE,
			hljs.C_NUMBER_MODE,
			{
				className: 'trace-resource-create',
				begin: '^RC ', end: '$'
			},
			{
				className: 'trace-resource-keep',
				begin: '^RK ', end: '$'
			},
			{
				className: 'trace-resource-erase',
				begin: '^RE ', end: '$'
			},
			{
				className: 'trace-system',
				begin: '^ES ', end: '$'
			},
			{
				className: 'trace-operation-begin',
				begin: '^EB ', end: '$'
			},
			{
				className: 'trace-operation-end',
				begin: '^EF ', end: '$'
			},
			{
				className: 'trace-event',
				begin: '^EI ', end: '$'
			},
			{
				className: 'trace-rule',
				begin: '^ER ', end: '$'
			},
			{
				className: 'trace-result',
				begin: '^V ', end: '$'
			},
			{
				className: 'trace-search-begin',
				begin: '^SB ', end: '$'
			},
			{
				className: 'trace-search-open',
				begin: '^SO ', end: '$'
			},
			{
				className: 'trace-search-spawn-new',
				begin: '^STN ', end: '$'
			},
			{
				className: 'trace-search-spawn-worse',
				begin: '^STD ', end: '$'
			},
			{
				className: 'trace-search-spawn-better',
				begin: '^STR ', end: '$'
			},
			{
				className: 'trace-search-resource-keep',
				begin: '^SRK ', end: '$'
			},
			{
				className: 'trace-search-decision',
				begin: '^SD ', end: '$'
			},
			{
				className: 'trace-search-end-aborted',
				begin: '^SEA ', end: '$'
			},
			{
				className: 'trace-search-end-condition',
				begin: '^SEC ', end: '$'
			},
			{
				className: 'trace-search-end-success',
				begin: '^SES ', end: '$'
			},
			{
				className: 'trace-search-end-fail',
				begin: '^SEN ', end: '$'
			},
			{
				className: 'trace-process',
				begin: '^PR ', end: '$'
			},
		]
	};
}
