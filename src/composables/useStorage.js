import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "./useUser";
import {
  ref as refStorage,
  uploadBytes,
  // uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const storageRef = refStorage(projectStorage, filePath.value);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Get URL link");
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("File available at", downloadURL);
      url.value = downloadURL;
      return await url;
    } catch (err) {
      console.log(err);
      error.value = err.massage;
    }
  }
  return { error, uploadFile, filePath, url };
};
export default useStorage;
