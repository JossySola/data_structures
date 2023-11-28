/*
    Hash maps map keys to their related values. The key
    associated with every value added allows for faster
    retrieval later on. When you come across a coding
    problem that requires you to store and retrieve data,
    keep in mind that hash maps will often be the most
    efficient data structure for that scenario.

    A hash function takes a string (or some other type of data) as input and returns
    an array index as output. In order for it to return an array index, our hash map
    implementation needs to know the size of our array. Our hash map's hashing method
    should not return an index bigger than that.

    1. Data
    2. Fixed size array
    3. Hash function
        i.  Hash value
        ii. Hash mod Array size

    The storage location at the index given by a hash is called the "hash bucket"
*/

/*
     ______________________________________________
    | Key: Album Name        | Value: Release Year |
    | The Low End Theory     |        1991         |
    | Midnight Marauders     |        1993         |
    | Beats, Rhymes and Life |        1996         |
    | The Love Movement      |        1998         |
     ----------------------------------------------
*/
let array = [1998,1996,1991,1993];

function hashMap(key, len) {
    // hashValue = ((# of lowercase 'a's in album name) + (# of lowercase 'e's in album name))
    const hashValue = () => {
        let a = 0;
        let e = 0;
        
        if(typeof key === 'string') {
            key.toLowerCase();

            for(let char of key) {
                if(char === 'a') {
                    a++;
                } else if(char === 'e') {
                    e++;
                }
            }
        }

        return a + e;
    }

    return hashValue() % len;
}

console.log(`
The Low End Theory, ${array[hashMap('The Low End Theory', array.length)]}\n
Midnight Marauders, ${array[hashMap('Midnight Marauders', array.length)]}\n
Beats, Rhymes and Life, ${array[hashMap('Beats, Rhymes and Life', array.length)]}\n
The Love Movement, ${array[hashMap('The Love Movement', array.length)]}
`);