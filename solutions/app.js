import checkVisa from "./visa.js"
import checkMac from "./mac.js"
import checkIP from "./ip.js"

const checker = {
    rules: {
      visa: checkVisa(),
      mac: checkMac(),
      ip: checkIP(),
    },
    validate(string, rule){
      return this.rules[rule](string);
    } 
}
export default checker