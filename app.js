#!/usr/bin/env node

const fs = require ('fs');
const buf = Buffer.alloc(1024, 'Bob\'s your uncle!  ','utf-8' );


fs.appendFile('foo',buf, err => {if (err) throw err;});
