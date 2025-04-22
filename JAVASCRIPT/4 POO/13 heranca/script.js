const defaultUser = {
 name: 'Doe',
 age: 30
}

const user1 = {
    ...defaultUser,
    admin: true,
    age: 25
}

const adm = {
    ...defaultUser,
    admin: true,
    name:'ADMIN',
}