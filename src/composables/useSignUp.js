import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const error = ref(null);
const isPending = ref(false);
async function signup(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    // ========First Way: Cannot update displayname
    // const response = await createUserWithEmailAndPassword(
    //   projectAuth,
    //   email,
    //   password
    // );
    // if (!response) throw new Error("Could not create a new user!");
    // const response2 = await updateProfile(projectAuth.currentUser, {
    //   displayName: fullname,
    // });
    // console.log(response2);
    // ==========Second Way:
    createUserWithEmailAndPassword(projectAuth, email, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        // Update displayName
        updateProfile(projectAuth.currentUser, {
          displayName: fullname,
        })
          .then(() => {
            // Profile updated!
            console.log("Profile updated!");
          })
          .catch(() => {
            // An error occurred
            console.log("An error occurred");
          });
      })
      .catch((err) => {
        console.log(err);
        error.value = err.message;
        // ..
      });
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
