import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./firebase";
import defaultImage from "../assets/default_profile_picture.jpg";

async function blobUrlToBlob(blobUrl) {
  const res = await fetch(blobUrl);
  const blob = await res.blob();
  return blob;
}

/**
 *
 * @param blobUrl the url of the blob to upload
 * @returns a string representing path in firebase storage
 */
async function upload(blobUrl) {
  const id = uuidv4();
  await uploadBytes(ref(storage, id), await blobUrlToBlob(blobUrl));
  return id;
}

/**
 *
 * @param path path in firebase storage
 * @returns the file download url
 */
async function getURL(path) {
  try {
    const result = await getDownloadURL(ref(storage, path));
    return result;
  } catch (error) {
    return defaultImage;
  }
}

const FileAPI = { upload, getURL };

export default FileAPI;
