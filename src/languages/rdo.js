/*
Language: rdo
*/

function(hljs) {
  return {
    case_insensitive: true,
    lexemes: /[a-zA-Z_$][a-zA-Z0-9_]*/,
    keywords: {
      keyword: '$Activities $Back_picture $Body $Changes $Compare_tops $Condition ' +
               '$Constant $Decision_point $Default $End $End_picture $Evaluate_by $Frame $Function ' +
               '$Include $Multithreading $multithreading $Operations $Parameters $Fuzzy_Parameters ' +
               'Term $Pattern $Process $Relevant_resources $Resource_type ' +
               '$Resources $Result_values $Results $Sequence $Status $Term_condition $Time $Tracing ' +
               '$Type $Watching active AExpCalcCounter after algorithmic all and Animation array before ' +
               'BExpCalcCounter bitmap Break_point by_hist Choice Convert_begin ' +
               'Convert_end Convert_event Convert_rule Create circle ellipse enumerative Erase EventCount ' +
               'exponential first Frame_file Frame_number from get_value Get_value integer ' +
               'event Keep keyboard line list longint Model_name Monitor NO Planning Stopping ' +
               'NoChange NoCheck NonExist normal NoShow operation ' +
               'OperRuleCheckCounter OprIev_file or permanent r_rect real enum rect Resource_file ' +
               'Results_file rule Run_file Run_StartTime s_bmp search Seconds selected ' +
               'ADVANCE SEIZE RELEASE GENERATE QUEUE DEPART ASSIGN TERMINATE ' +
               'set Show_mode Show_rate some Statistic_file such_as table temporary ' +
               'Terminate_if text Time_now Trace_EndTime Trace_file Trace_StartTime triang triangular ' +
               'uniform until value watch_par watch_quant watch_state watch_value with_max ' +
               'with_min YES Seed Системное_время not if else for return break result ruler space string bool true false ' +
               'External_Model external_model $Priority $Parent prior cf Terminate_counter typedef $Typedef $Sprite',
      built_in:'Abs ArcCos ArcSin ArcTan Cos Cotan Exist Exp Floor For_All Frac ' +
               'GetRelResNumber GetResNumber IAbs IMax IMin Int IntPower Ln Log10 Log2 LogN Max Min ' +
               'Not_Exist Not_For_All Power Round Sin Sqrt Tan Select Size Empty ' +
               'no_trace trace trace_all trace_stat trace_tops ' +
               'transparent last white black red green blue cyan magenta yellow gray'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}
