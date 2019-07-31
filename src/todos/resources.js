import { database } from '../firebase';

export default {
  create: todo => database.collection('todos').add(todo),
  remove: id =>
    database
      .collection('todos')
      .doc(id)
      .delete(),
  update: todo =>
    database
      .collection('todos')
      .doc(todo.id)
      .update(todo),
  onChange: callback =>
    database
      .collection('todos')
      .onSnapshot(snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))),
};
