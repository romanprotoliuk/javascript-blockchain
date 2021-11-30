const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1637878426337,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1637878457497,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1637878520405,
      transactions: [
        {
          amount: 6.25,
          sender: "00",
          recipient: "40ef629f31aa4ca9948402ed9a7b2332",
          transactionId: "f96a2451a45147e1bcb10f96178c243a",
        },
        {
          amount: 10,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "1b0d40d0f40447aabd9e509c93b28a51",
        },
        {
          amount: 20,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "aab3a537b2b545a8aa4f159e4fb32877",
        },
        {
          amount: 30,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "76ecbd48a74440639fb8495443d6dc33",
        },
      ],
      nonce: 96783,
      hash: "000042b8d822a2ae3ab3275ebdd140b0fc1224235f250bd612e473e0eeb1b418",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1637878561579,
      transactions: [
        {
          amount: 6.25,
          sender: "00",
          recipient: "40ef629f31aa4ca9948402ed9a7b2332",
          transactionId: "302a769ecad64506a922db614552da47",
        },
        {
          amount: 40,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "1d4a73c7c0814b9d8c523150b20c38cc",
        },
        {
          amount: 50,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "8f7b3c27d22a47e8975f68b925aed98e",
        },
        {
          amount: 60,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "3e01e18e46964f18b23689129eef4f62",
        },
        {
          amount: 70,
          sender: "X2HGFFGHFDGDFGSD1",
          recipient: "Z2jGFFGHFDGDFGSD2",
          transactionId: "6b92a40c01704e90a4038dbf5e101454",
        },
      ],
      nonce: 14902,
      hash: "00002892094aea436606e9f2c723758e5ad013078908c15a83ff071b83d610af",
      previousBlockHash:
        "000042b8d822a2ae3ab3275ebdd140b0fc1224235f250bd612e473e0eeb1b418",
    },
    {
      index: 5,
      timestamp: 1637878581038,
      transactions: [
        {
          amount: 6.25,
          sender: "00",
          recipient: "40ef629f31aa4ca9948402ed9a7b2332",
          transactionId: "da5510300f9a4749890cb5e3e44a7f60",
        },
      ],
      nonce: 45066,
      hash: "00007a06eba9d571d642b40f55d870541bba72986e6b2f424296eac72bacf8f4",
      previousBlockHash:
        "00002892094aea436606e9f2c723758e5ad013078908c15a83ff071b83d610af",
    },
    {
      index: 6,
      timestamp: 1637878586745,
      transactions: [
        {
          amount: 6.25,
          sender: "00",
          recipient: "40ef629f31aa4ca9948402ed9a7b2332",
          transactionId: "5dca46b0ce4e4d1abda897789878651e",
        },
      ],
      nonce: 9256,
      hash: "0000e535d0d9969105afbc62d1230951468136f2b8ca8ecf539a614a2429ec6d",
      previousBlockHash:
        "00007a06eba9d571d642b40f55d870541bba72986e6b2f424296eac72bacf8f4",
    },
  ],
  pendingTransactions: [
    {
      amount: 6.25,
      sender: "00",
      recipient: "40ef629f31aa4ca9948402ed9a7b2332",
      transactionId: "db94dab5e48d4e3c80229732aee607e9",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
