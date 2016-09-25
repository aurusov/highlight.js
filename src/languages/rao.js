/*
Language: rao
*/

function(hljs) {
  return {
    case_insensitive: true,
    lexemes: /[a-zA-Z_$][a-zA-Z0-9_]*/,
    keywords: {
      keyword: 'type new operation rule relevant event ' +
        'logic edge set activity search sequence constant ' +
        'result resultType var if else for ' +
        'enum int double boolean Value ' +
        'String array break return resource ' +
        'frame background drawText drawRectangle drawLine drawCircle drawEllipse drawTriangle ' +
        'RaoColor BLACK BLUE CYAN DARK_BLUE DARK_CYAN DARK_GRAY DARK_GREEN DARK_MAGENTA DARK_RED ' +
        'DARK_YELLOW GRAY GREEN MAGENTA RED WHITE YELLOW ' +
        'Alignment LEFT CENTER RIGHT',
      constant: 'true false',
      built_in:'accessible all filter any onlyif exists forall next minBySafe maxBySafe ' +
        'startCondition heuristic compareTops terminateCondition init draw ' +
        'DiscreteHistogram Uniform Exponential Normal Triangular ' +
        'duration begin end execute stop plan ' +
        'create erase currentTime'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}
