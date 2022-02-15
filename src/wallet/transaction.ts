import ChainUtil from '../chain-util';
import Wallet from ".";
import TransactionInput from "./transaction-input";
import TransactionOutput from "./transaction-output";


export default class Transaction {
    id: string;
    txInput: TransactionInput;
    txOutputs: TransactionOutput[];


constructor() {
    this.id = ChainUtil.genID();
    this.txOutputs = [];
}

/**
     * Helper function used to generate new and reward transactions.
     */
    static transactionsWithOutput(senderWallet: Wallet, txOutputs: TransactionOutput[]): Transaction {
        const transaction: Transaction = new this();
        transaction.txOutputs.push(...txOutputs);
        Transaction.signTransaction(transaction, senderWallet);
        return transaction;
    }

};