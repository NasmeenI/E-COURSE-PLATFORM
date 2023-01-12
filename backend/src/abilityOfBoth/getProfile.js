import bp from "body-parser";
import express from "express";
import { getDocument } from "../method.js";
import { getuid } from "../uid.js";

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

export const getProfile = async (req, res) => {
  const { userID } = req.body;
  const newuserID = await getuid(userID);
  if (newuserID.error) {
    console.log(newuserID.error);
    res.send({ error: newuserID.error.message });
    return;
  }
  let profile = await getDocument(newuserID.uid);
  profile.userID = null;
  res.send({ profile: profile });
};
