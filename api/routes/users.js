import express from "express";
import { db } from "../db.js";


const router = express.Router();


//Tabela Participantes
//Get table
router.get("/participantes", (req, res) => {
    const q = `SELECT * FROM participantes`;

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
});

//Add rows in table
router.post("/participantes", (req, res) => {
    const data = req.body;

    const q = "INSERT INTO participantes SET ?"

    db.query(q, data, (err, result) => {
        if (err) {
            console.error("Erro ao inserir participante na tabela", err);
            return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
        }

        return res.status(200).json(`Participante cadastrada com sucesso!`);
    })
});

//Update row in table
router.put("/participantes/:id_participante", (req, res) => {
    const id_participante = req.params.id_participante;
    const { nome_participante, cargo_participante, curso_participante } = req.body;

    const q = `
    UPDATE participantes
    SET nome_participante = ?,
    cargo_participante = ?,
    curso_participante = ?
    WHERE id_participante = ?
    `;

    const values = [
        nome_participante,
        cargo_participante,
        curso_participante,
        id_participante
    ];

    db.query(q, values, (err) => {
        if (err) {
            console.error("Erro ao atualizar dados na tabela", err);
            return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
        }

        return res.status(200).json("Participante atualizado com sucesso!");
    });
});

//Delete rou in table
router.delete("/participantes/:id_participante", (req, res) => {
    const q = `DELETE FROM participantes WHERE id = ?`;

    db.query(q, [req.params.id_participante], (err) => {
        console.error("Erro ao deletar participante na tabela", err);
        return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
    });

    return res.status(200).json(`Participante excluído com sucesso!`);
});

//Tabela Projetos
//Get table
router.get("/projetos", (req, res) => {
    const q = `SELECT * FROM projetos`;

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
});

//Add rows in table
router.post("/projetos", (req, res) => {
    const data = req.body;

    const q = "INSERT INTO projetos SET ?"

    db.query(q, data, (err, result) => {
        if (err) {
            console.error("Erro ao inserir projeto na tabela", err);
            return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
        }

        return res.status(200).json(`Projeto cadastrada com sucesso!`);
    })
});

//Update row in table
router.put("/projetos/:id_projeto", (req, res) => {
    const id_projeto = req.params.id_projeto;
    const { nome_projeto, descricao_projeto } = req.body;

    const q = `
    UPDATE projetos
    SET nome_projeto = ?,
    descricao_projeto = ?
    WHERE id_projeto = ?
    `;

    const values = [
        nome_projeto,
        descricao_projeto,
        id_projeto
    ];

    db.query(q, values, (err) => {
        if (err) {
            console.error("Erro ao atualizar dados na tabela", err);
            return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
        }

        return res.status(200).json("Projeto atualizado com sucesso!");
    });
});

//Delete rou in table
router.delete("/projetos/:id_projeto", (req, res) => {
    const q = `DELETE FROM projetos WHERE id = ?`;

    db.query(q, [req.params.id_projeto], (err) => {
        console.error("Erro ao deletar projeto da tabela", err);
        return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
    });

    return res.status(200).json(`Projeto excluído com sucesso!`);
});


export default router;