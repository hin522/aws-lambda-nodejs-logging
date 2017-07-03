'use strict';

var cls = require("continuation-local-storage");

const SESSION_NAME = "lambdaSession";

class AuditLogger {

  static init() {
    console.info("[INFO] >> Initialising AuditLogger");
    return cls.createNamespace(SESSION_NAME);
  }

  static getSession() {
    return cls.getNamespace(SESSION_NAME);
  }

  static identify(txnId) {
    console.info(`>> Setting transactionId to ${txnId}`);
    let session = this.getSession();
    if (session.active) {
      session.set("txnId", txnId);
    }
  }

  static info(logMsg) {
    let txnId = this.getTxnId();
    console.log(`[INFO] ${txnId} ${logMsg}`);
  }

  static getTxnId() {
    let session = this.getSession();
    if (session == undefined) return "";
    let txnId = session.get("txnId");
    return txnId == undefined ? "" : `[${txnId}]`;
  }
}

module.exports = AuditLogger;