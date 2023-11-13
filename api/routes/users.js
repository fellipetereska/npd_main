import express from "express";
import { db } from "../db.js";


const router = express.Router();


//Tabela Empresa
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
    const id_participante = req.params.id_participante; // Obtém o ID da empresa da URL
    const { nome_participante, descricao_participante } = req.body;
    
    const q = `
    UPDATE participantes
    SET nome_participante = ?,
    descricao_participante = ?
    WHERE id_participante = ?
    `;
    
    const values = [
        nome_participante,
        descricao_participante,
        id_participante
    ];
    
    db.query(q, values, (err) => {
        if (err) {
            console.error("Erro ao atualizar dados na tabela", err);
            return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
        }
        
        return res.status(200).json("Empresa atualizada com sucesso!");
    });
});

//Delete rou in table
router.delete("/participantes/:id_participante", (req, res) =>{
    const q = `DELETE FROM participantes WHERE id = ?`;
    
    db.query(q, [req.params.id_participante], (err) => {
        console.error("Erro ao deletar participante na tabela", err);
        return res.status(500).json({ error: 'Erro interno do servidor', details: err.message });
    });
    
    return res.status(200).json(`Participante excluída com sucesso!`);
});


export default router;