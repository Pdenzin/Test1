for(i = 0; i < 3; i++){
    const key = Object.keys(newObject1.course.instructor.contact);
    const value = Object.values(newObject1.course.instructor.contact);

    if(key[i] == 'email') console.log(value[i])
    else console.log('-')
}