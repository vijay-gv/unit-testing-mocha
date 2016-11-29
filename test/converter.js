'use strict'
const assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
const addResult = require('/Users/vijaygv/Documents/statushttp/converter');

chai.should();

describe('checking',function () {
    it('passing', function () {
        addResult(1,1).should.equal(2);
    });
});