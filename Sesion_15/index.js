const firstName = 'Marlon Aurelio';
const lastName = 'García Morales';

const data = {
    firstName,
    lastName
};

localStorage.setItem('data', JSON.stringify(data));
sessionStorage.setItem('data', JSON.stringify(data));
const now = new Date();

document.cookie = `data=${JSON.stringify(data)};expires=${new Date(now.getTime() + 2 * 60000)}`;