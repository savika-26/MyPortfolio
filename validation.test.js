import { test } from 'node:test';
import assert from 'node:assert';
import { validateEmail } from './validation.js';

test('Valid email', () => {
    assert.strictEqual(
        validateEmail('abc@gmail.com'), true
    );
});

test('Invalid email', () => {
    assert.strictEqual(
        validateEmail('abcgmail.com'), false
    );
});

test('Empty email', () => {
    assert.strictEqual(
        validateEmail(''), false
    );
});