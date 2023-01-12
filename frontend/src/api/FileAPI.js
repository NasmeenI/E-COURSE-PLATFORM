import { ref, uploadBytes } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./firebase";

async function blobUrlToBlob(blobUrl) {
  const res = await fetch(blobUrl);
  const blob = await res.blob();
  return blob;
}

async function upload(blobUrl) {
  const id = uuidv4();
  const result = await uploadBytes(ref(storage, id), await blobUrlToBlob(blobUrl));
  return result;
}

const FileAPI = { upload };

export default FileAPI;
