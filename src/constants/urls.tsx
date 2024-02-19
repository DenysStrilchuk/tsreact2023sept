const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id:number) :string => (`${users}/${id}`)
    }
}