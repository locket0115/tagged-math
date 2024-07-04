import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
    const tags = await prisma.tag.findMany();
    return { tags };
}

export const actions = {
    addTag: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
    
        if (name) {
            await prisma.tag.create({
                data: { name }
            });
        }
    
        return { success: true };
    },
    deleteTag: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
    
        if (id) {
            await prisma.tag.delete({
                where: { id: parseInt(id, 10) }
            });
        }
    
        return { success: true };
    },
    updateTag: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        const name = data.get('name');
    
        if (id && name) {
            await prisma.tag.update({
                where: { id: parseInt(id, 10) },
                data: { name }
            });
        }
    
        return { success: true };
    }
}