import prisma from "../db";

export const createFolder = async (req, res) => {
  try {
    const { name } = req.body;
    const folder = await prisma.folder.create({
      data: {
        name,
        ownerId: req.user.id,
      },
    });
    res.json({ data: folder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFolders = async (req, res) => {
  try {
    const folders = await prisma.folder.findMany({
      where: {
        ownerId: req.user.id,
      },
      include: {
        wikis: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    res.json({ data: folders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await prisma.folder.findUnique({
      where: {
        id: id,
      },
      include: {
        wikis: true,
      },
    });
    res.json({ data: folder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const folder = await prisma.folder.update({
      where: {
        id: id,
        ownerId: req.user.id,
      },
      data: {
        name,
      },
    });
    res.json({ data: folder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await prisma.folder.delete({
      where: {
        id: id,
        ownerId: req.user.id,
      },
    });
    res.json({ data: folder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
