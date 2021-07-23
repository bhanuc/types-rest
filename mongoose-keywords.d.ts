// import mongoose = require('mongoose');


declare module 'mongoose-keywords' {

    declare function mongoosekeyword(schema: mongoose.Schema, options?: Partial<Options>): void;
    export default mongoosekeyword;
  }
