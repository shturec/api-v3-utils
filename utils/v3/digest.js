/*
 * Copyright (c) 2010-2019 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
var java = require('core/v3/java');
var streams = require('io/v3/streams');

exports.md5 = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'md5', [JSON.stringify(bytes)]);
	return output;
};

exports.md5Hex = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'md5Hex', [JSON.stringify(bytes)]);
	return output;
};

exports.sha1 = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'sha1', [JSON.stringify(bytes)]);
	return output;
};

exports.sha256 = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'sha256', [JSON.stringify(bytes)]);
	return output;
};

exports.sha384 = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'sha384', [JSON.stringify(bytes)]);
	return output;
};

exports.sha512 = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'sha512', [JSON.stringify(bytes)]);
	return output;
};

exports.sha1Hex = function(input) {
	var bytes = input;
	if (typeof bytes === 'string') {
		var baos = streams.createByteArrayOutputStream();
		baos.writeText(bytes);
		bytes = baos.getBytes();
	}
	var output = java.call('org.eclipse.dirigible.api.v3.utils.DigestFacade', 'sha1Hex', [JSON.stringify(bytes)]);
	return output;
};
