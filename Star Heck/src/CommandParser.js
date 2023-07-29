/*
Command List:
fire (weapon)
fire (weapon) and (weapon)
warp to (place)
set course for (place)
beam down
beam down with (party member) and (party member) and (party member)
beam down with (department)
beam down with (department) and (department) and (department)
scan (place)
scan (person)
scan (department)
combine (item) with (item)
beam up (person)
beam up (department)
beam up away team
talk to (person)
talk to (ship)
communicator
attack (ship)
attack (person)
attack (planet)
charm (person)
flirt (person)
kiss (person)
stun (person)
barter with (person)
buy from (person)
carry (body)
use (item)
*/

export function getTypos(str) {
 
    const replaceAt = (text, index, char) => {
	    return text.substr(0, index) + char + text.substr(index+char.length);
    }

    //define proximity arrays
    var array_prox = [];
    array_prox['a'] = ['q', 'w', 'z', 'x'];
    array_prox['b'] = ['v', 'f', 'g', 'h', 'n'];
    array_prox['c'] = ['x', 's', 'd', 'f', 'v'];
    array_prox['d'] = ['x', 's', 'w', 'e', 'r', 'f', 'v', 'c'];
    array_prox['e'] = ['w', 's', 'd', 'f', 'r'];
    array_prox['f'] = ['c', 'd', 'e', 'r', 't', 'g', 'b', 'v'];
    array_prox['g'] = ['r', 'f', 'v', 't', 'b', 'y', 'h', 'n'];
    array_prox['h'] = ['b', 'g', 't', 'y', 'u', 'j', 'm', 'n'];
    array_prox['i'] = ['u', 'j', 'k', 'l', 'o'];
    array_prox['j'] = ['n', 'h', 'y', 'u', 'i', 'k', 'm'];
    array_prox['k'] = ['u', 'j', 'm', 'l', 'o'];
    array_prox['l'] = ['p', 'o', 'i', 'k', 'm'];
    array_prox['m'] = ['n', 'h', 'j', 'k', 'l'];
    array_prox['n'] = ['b', 'g', 'h', 'j', 'm'];
    array_prox['o'] = ['i', 'k', 'l', 'p'];
    array_prox['p'] = ['o', 'l'];
    array_prox['r'] = ['e', 'd', 'f', 'g', 't'];
    array_prox['s'] = ['q', 'w', 'e', 'z', 'x', 'c'];
    array_prox['t'] = ['r', 'f', 'g', 'h', 'y'];
    array_prox['u'] = ['y', 'h', 'j', 'k', 'i'];
    array_prox['v'] = ['', 'c', 'd', 'f', 'g', 'b'];    
    array_prox['w'] = ['q', 'a', 's', 'd', 'e'];
    array_prox['x'] = ['z', 'a', 's', 'd', 'c'];
    array_prox['y'] = ['t', 'g', 'h', 'j', 'u'];
    array_prox['z'] = ['x', 's', 'a'];
    array_prox['1'] = ['q', 'w'];
    array_prox['2'] = ['q', 'w', 'e'];
    array_prox['3'] = ['w', 'e', 'r'];
    array_prox['4'] = ['e', 'r', 't'];
    array_prox['5'] = ['r', 't', 'y'];
    array_prox['6'] = ['t', 'y', 'u'];
    array_prox['7'] = ['y', 'u', 'i'];
    array_prox['8'] = ['u', 'i', 'o'];
    array_prox['9'] = ['i', 'o', 'p'];
    array_prox['0'] = ['o', 'p'];

    let arr = [];
	for(let a=0; a<str.length; a++) {
	    let temp = array_prox[str.charAt(a)];    
		for(let b=0; b<temp.length; b++) {
		    let typo = replaceAt(str, a, temp[b]);
            console.log(typo);
		    arr.push(typo);
		}
	}

	return arr;
}