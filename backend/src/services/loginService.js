const FIREBASE_APP = require('../FirebaseConfig.js')
const { getFirestore, collection, getDocs, query, where } = require('firebase/firestore/lite');

const db = getFirestore(FIREBASE_APP)

async function getUsers(db) {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const userList = usersSnapshot.docs.map(doc => doc.data());
    return userList;
}

const getAllUsers = async() => {
    console.log("Get all Users call")

    userList = await getUsers(db);
    return userList;
}

const login = async(email, password) => {
    console.log("Logging in call")

    const usersCol = collection(db, 'users');
    const q = query(usersCol, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        throw new Error('User not found');
    }

    const userData = querySnapshot.docs[0].data();

    if (userData.password !== password) {
        throw new Error('Incorrect password');
    }

    // Authentication successful, return user data without password
    delete userData.password;
    return userData;
}

module.exports = {
    getAllUsers,
    login
}