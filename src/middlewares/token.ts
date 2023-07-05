const crypto = require("crypto");

const Decipher = (token: string) => {
    if (typeof token !== 'string' && !Buffer.isBuffer(token)) {
        throw new TypeError('O argumento "token" deve ser uma string ou um buffer.');
      }

    const CRYPTO_CONFIGS = {
        algs: 'aes-256-ctr',
        pass: 'IOGURTEDEUVA'
    };
    
    const decipher = crypto.createDecipher(CRYPTO_CONFIGS.algs, CRYPTO_CONFIGS.pass);
    const plain = decipher.update(token, 'hex', 'utf-8');
    return plain;
};

export default Decipher