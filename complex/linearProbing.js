/*
    In open addressing we use the array as our underlying data structure,
    but we continue looking for a new index to save our data if the first
    result of our hash function has a different key's data.

    A common open method of open addressing is called "probing".

    Suppose we want to associate famous horses with their owners. We want 
    our first key, “Bucephalus”, to store our first value, “Alexander the 
    Great”. Our hash function returns an array index 3 and so we save 
    “Alexander the Great”, along with our key “Bucephalus”, into the array
    at index 3.

    After that, we want to store “Seabiscuit”s owner “Charles Howard”. 
    Unfortunately “Seabiscuit” also has a hash value of 3. Our probing 
    method adds one to the hash value and tells us to continue looking 
    at index 4. Since index 4 is open we store “Charles Howard” into the 
    array at index 4. Because “Seabiscuit” has a hash of 3 but “Charles 
    Howard” is located at index 4, we must also save “Seabiscuit” into 
    the array at that index.

    In a quadratic probing open addressing system, we add increasingly
    large numbers to the hash code. At the first collision we just add 1,
    but if the hash collides there too we add 4, and the third time we
    add 9. Having a probe sequence change over time like this avoids
    clustering.
*/
