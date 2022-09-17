exports.params = {
  hostConfig:             {sample: '',                    type: 's',    title: 'Sets remote syntax configuration. Available templates: smartVista (default), openWay. See iso8583/lib/packager', default: 'smartVista'},
  smartVista:             {sample: '',                    type: 'b',    title: 'Follow SmartVista ISO 8583 syntax (default)',  replaced: 'system'},
  openWay:                {sample: '',                    type: 'b',    title: 'Follow OpenWay ISO 8583 syntax',               replaced: 'system'},
  overrides:              {sample: '1:bitmap-hex:8,...',  type: 's',    title: 'Overrides one or several fields with format of given name and length. Format: <field number>:<type>[:length]'},
  upstreamHost:           {sample: '<ip or host>',        type: 's',    title: 'Host or ip address for the upstream server to connect to'},
  upstreamPort:           {sample: '<port number>',       type: 'n',    title: 'Upstream server port to connect to'},
  upstreamListenPort:     {sample: '<port number>',       type: 'n',    title: 'Wait for the upstream server to connect to this port'},
  listenPort:             {sample: '<port number>',       type: 'n',    title: 'Local server port'},
  listenHttpPort:         {sample: '<port number>',       type: 'n',    title: 'Local http server port'},
  upstreamTimeout:        {sample: '<seconds>',           type: 'n',    title: 'Upstream timeout. If there will be no data on the upstream socket for a given period of time the socket will be closed (default: no timeout)'},
  clientTimeout:          {sample: '<seconds>',           type: 'n',    title: 'Client socket timeout (default: no timeout)'},
  maxQueue:               {sample: '<message count>',     type: 'n',    title: 'Maximum messages in queue (default: 100)',                                   default: 100},
  queueLockTerminal:      {sample: '',                    type: 'b',    title: 'Queue subsequent messages with the same TID until it gets released',         default: true},
  queueTimeout:           {sample: '<seconds>',           type: 'n',    title: 'Queue message timeout (default: 35 seconds)',                                default: 35},
  queueShortTimeout:      {sample: '<seconds>',           type: 'n',    title: 'Queue message short timeout (for system messages, default: 5 seconds)',      default: 5},
  queueMessageKeyFields:  {sample: '<fields list>',       type: 'csn',  title: 'The fields used to identify the source clients by the messages in the message queue',        default: '11,41'},
  noAutoReversal:         {sample: '',                    type: 'b',    title: 'Disable auto-reversals'},
  logFile:                {sample: '<file path>',         type: 's',    title: 'A file name to log to'},
  pidFile:                {sample: '<pid file>',          type: 's',    title: 'A file name to write pid to'},
  logstashHost:           {sample: '<ip or host>',        type: 's',    title: 'Host or ip address of logstash service to send logs to'},
  logstashPort:           {sample: '<port number>',       type: 'n',    title: 'Logstash service port to connect to'},
  logstashNode:           {sample: '<Node name>',         type: 's',    title: 'Logstash node name', default: 'SocketQueue'},
  echoServerPort:         {sample: '',                    type: 'n',    title: 'Run local echo server'},
  testClients:            {sample: '<number>',            type: 'n',    title: 'Run number of test clients to test the upstream'},
  testTargetHost:         {sample: '<ip or host>',        type: 's',    title: 'The destination host to test'},
  testTargetPort:         {sample: '<port number>',       type: 'n',    title: 'The destination port to test'},
  testRealLife:           {sample: '<level>',             type: 'b',    title: 'Make tests more realistic'},
  statServerPort:         {sample: '<port number>',       type: 'n',    title: 'Run stat server on given port'},
  statDumpFile:           {sample: '<file name>',         type: 's',    title: 'Use this file to keep stat server data'},
  c:                      {sample: '<confing file path>', type: 's',    title: 'Read configuration from file'},
  v:                      {sample: '',                    type: 'b',    title: 'Sets logging level to warn'},
  vv:                     {sample: '',                    type: 'b',    title: 'Sets logging level to verbose'},
  dangerous:              {sample: '',                    type: 'b',    title: 'Disable the masking of private data'},
  useHeader:              {sample: '',                    type: 'b',    title: 'Disable or enable iso8583 header (currently supported only for upstream communication)', default: true},
  headerFormat:           {sample: '',                    type: 's',    title: 'iso8583 header format (every header field is comma separated and defined as <name:type:length:default>)', default: 'length:n:4'},
  lengthIncludeHeader:    {sample: '',                    type: 'b',    title: 'Whether or not length header value should include the header length itself', default: false},
  silent:                 {sample: '',                    type: 'b',    title: 'Stay silent'},
  help:                   {sample: '',                    type: 'b',    title: 'Display help screen'},
  helpJson:               {sample: '',                    type: 'b',    title: 'Display help screen in json mode'}
}