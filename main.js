#!/usr/bin/env node

require('yargs')
    .scriptName("near-cli-extension-example-js")
    .usage('$0 <cmd> [args]')
    .command('say [text]', 'prints the provided text', (yargs) => {
        yargs.positional('text', {
            type: 'string',
            default: 'default text'
        })
    }, function (argv) {
        console.log(argv.text)
    })
    .help()
    .argv