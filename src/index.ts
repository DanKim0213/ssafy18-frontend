/** root ts file */
import _ from 'lodash';
import sayHi, {sayHiToSomeone} from './another';

const array = [1, 2, 3];
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

// b 변수 선언되었지만 쓰이지 않았다
const b = 0; 
sayHi();
sayHiToSomeone("주희, 준석, 상기, 태원");