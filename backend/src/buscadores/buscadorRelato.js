import prisma from '../config/db.js';

async function buscarRelatos() {
    let relatos = prisma.relato.findMany({
        include: {
            usuario: true,
            categoria: true,
            status: true,
            comentarios: true
        }
    });
    return relatos
}

async function buscarRelatosPorId(id) {
    let relatos = prisma.relato.findMany({
        where: {
            id: id
        },
        include: {
            usuario: true,
            categoria: true,
            status: true,
            comentarios: true
        }
    });
    return relatos
}

async function buscarRelatosPorUsuario(usuarioId) {
    let relatos = prisma.relato.findMany({
        where: {
            usuarioId: usuarioId
        },
        include: {
            usuario: true,
            categoria: true,
            status: true,
            comentario: true
        }
    });
    return relatos
}

export default { buscarRelatos, buscarRelatosPorId, buscarRelatosPorUsuario }