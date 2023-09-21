import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    await createUserWithEmailAndPassword(projectAuth, email, password);
    await updateProfile(projectAuth.currentUser, {
      displayName: fullname,
    });
    console.log("Profile updated!");
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
