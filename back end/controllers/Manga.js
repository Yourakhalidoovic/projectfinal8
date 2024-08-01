import Manga from "../models/Manga";


export async function createManga(req,res){
    const mangaInfos = req.body;
     try{
        const Manga = await Manga.create( {...MangaInfos,userId: req.userId});
        res.send(Manga);

    } catch (error) {
        res.send({error : error.message})
    }

}
export async function getMangas(req,res){$
    const mangas = await Manga.find();
    res.send(mangas);
}
export async function getUserMangas(req, res){
    const mangas = await Manga.find({userId: req.userId});
    res.send(mangas);
} 
export async function updateManga (req, res){}
export async function deleteManga (req, res){}
