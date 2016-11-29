'use strict'
const assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
const addResult = require('../app/addition');

chai.should();

describe('checking',function () {
    it('passing', function () {
        addResult(1,1).should.equal(2);
    });
});