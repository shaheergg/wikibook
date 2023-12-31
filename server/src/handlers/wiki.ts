import prisma from "../db";

export const createWiki = async (req, res) => {
  try {
    const { title, content } = req.body;
    const wiki = await prisma.wiki.create({
      data: {
        title,
        content,
        folderId: req.params.folderId,
      },
    });
    res.json({ data: wiki });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getWikis = async (req, res) => {
  try {
    const wikis = await prisma.wiki.findMany({
      where: {
        folderId: req.params.folderId,
      },
    });
    res.json({ data: wikis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneWiki = async (req, res) => {
  try {
    const { id } = req.params;
    const wiki = await prisma.wiki.findUnique({
      where: {
        id: id,
      },
    });
    res.json({ data: wiki });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateWiki = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const wiki = await prisma.wiki.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
      },
    });
    res.json({ data: wiki });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteWiki = async (req, res) => {
  try {
    const { id } = req.params;
    const wiki = await prisma.wiki.delete({
      where: {
        id: id,
      },
    });
    res.json({ data: wiki });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
