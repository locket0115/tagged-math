import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const prisma = new PrismaClient();

export async function load() {
  return {};
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const description = data.get('description');
    const tags = data.getAll('tags');
    const image = data.get('image');

    let imageUrl = null;

    if (image && image.size > 0) {
      const imageExtension = path.extname(image.name);
      const imageName = `${uuidv4()}${imageExtension}`;
      const imagePath = path.join('static', 'uploads', imageName);

      await fs.writeFile(imagePath, await image.arrayBuffer());

      imageUrl = `/uploads/${imageName}`;
    }

    await prisma.problem.create({
      data: {
        description,
        tags,
        imageUrl,
      },
    });

    return {
      status: 201,
    };
  },
};