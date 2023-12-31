import { Router } from "express";
import {
  createFolder,
  deleteFolder,
  getFolders,
  updateFolder,
} from "./handlers/folder";
import {
  createWiki,
  deleteWiki,
  getOneWiki,
  getWikis,
  updateWiki,
} from "./handlers/wiki";
import { handleInputError } from "./middlewares/handleError";
import { body } from "express-validator";

const router = Router();

router.get("/folders", getFolders);
router.post(
  "/folders",
  body("name").isString(),
  handleInputError,
  createFolder
);
router.put(
  "/folders/:id",
  body("name").isString(),
  handleInputError,
  updateFolder
);
router.delete("/folders/:id", deleteFolder);
router.get("/wikis/:folderId", getWikis);
router.post(
  "/wikis/:folderId",
  body("title").isString(),
  body("content").isString(),
  handleInputError,
  createWiki
);
router.get("/wikis/:id", getOneWiki);
router.put(
  "/wikis/:id",
  body("title").isString(),
  body("content").isString(),
  handleInputError,
  updateWiki
);
router.delete("/wikis/:id", deleteWiki);

export default router;
