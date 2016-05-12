#!/usr/bin/env node

const fs = require ('fs');
const buf = Buffer.alloc(1024, 0xff);


fs.appendFile('foo',buf, err => {if (err) throw err;});
