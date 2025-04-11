import { increase, getCount } from "./counter.js";

increase();
increase();
increase();
console.log(getCount()); // 3

// is same as the following code:

import * as counter from "./counter.js";

counter.increase();
counter.increase();
counter.increase();
console.log(getCount()); // 3
