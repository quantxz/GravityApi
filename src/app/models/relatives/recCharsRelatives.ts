import mysql from 'mysql2/promise';
import { connection } from "../../../configs/connection";
import { othersCharsRelativesInterface } from "../../../configs/interfaces";

export const CreateRecRelatives = async (data: othersCharsRelativesInterface) => {
  try {
    const query = `
      INSERT INTO recurrentscharsrelatives 
        (
            parents, 
            sister_or_brother,
            grandfather, 
            great_grandfather_or_great_grandmother, 
            granduncle, 
            grand_daughters,
            grandson,
            ex_grandaunt_in_law, 
            great_niece_or_great_nephew, 
            nephew_or_niece_in_law, 
            ex_wife, 
            ancestor, 
            maternal_cousin, 
            maternal_grandfather, 
            maternal_grandmother,
            wife,
            husband,
            son,
            mother,
            father,
            daughter,
            Unnamed_niece_or_nephew,
            father_in_law,
            great_grandfather_in_law,
            ancestor_in_law,
            unknow,
            cousin,
            charactername)
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      data.parents,
      data.sister_or_brother,
      data.grandfather,
      data.great_grandfather_or_great_grandmother,
      data.granduncle,
      data.grand_daughters,
      data.grandson,
      data.ex_grandaunt_in_law,
      data.great_niece_or_great_nephew,
      data.nephew_or_niece_in_law,
      data.ex_wife,
      data.ancestor,
      data.maternal_cousin,
      data.maternal_grandfather,
      data.maternal_grandmother,
      data.wife,
      data.husband,
      data.son,
      data.mother,
      data.father,
      data.daughter,
      data.Unnamed_niece_or_nephew,
      data.father_in_law,
      data.great_grandfather_in_law,
      data.ancestor_in_law,
      data.unknow,
      data.cousin,
      data.charactername
    ];

    return await connection.promise().query(query, values);
  } catch (err) {
    console.error('Erro ao executar consulta:', err);
  }
};