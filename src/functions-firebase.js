import firebase from "firebase";
import { actionTypes } from '../src/components/context/reducer'
import { useStateValue } from "./components/context/StateProvider";
import db from "./firebase";
import { auth } from "./firebase";

const signInWithGoogle = async (user) => {
    try {
        const query = await db
          .collection("users")
          .where("uid", "==", user.uid)
          .get();

        if (query.docs.length === 0) {
          await db.collection("users").add({
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
          });
        }
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
}

export { signInWithGoogle }