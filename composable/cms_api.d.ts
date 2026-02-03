
// CMI_API_Response: Ce type est une enveloppe de base pour toutes les réponses du CMS.
// Il permet de vérifier si la requête s'est bien passée (code = 200, status = "ok").
// Avant de lire les données, on regarde ces deux champs pour éviter les erreurs.


type CMS_API_Response = {
    code: number,
    status: 'ok' | string,
}

type CMS_API_Image = {
    "extension": string,
    "filename": string,
    "height": number,
    "id": string,
    "mime": string,
    "niceSize": "951 B",
    "template": "",
    "type": "image",
    "url": "http://localhost:8000/media/pages/home/0a94594deb-1751548581/capture-decran-2025-07-03-a-15.14.47-50x-q10.png",
    "width": 50
}

type CMS_API_ImageObject = {
    "alt": null,
    "tiny": CMS_API_Image,
    "small": CMS_API_Image,
    "reg": CMS_API_Image,
    "large": CMS_API_Image,
    "xxl": CMS_API_Image,
    "focus"?: string,
}


type CMS_API_people = {
    prenom?: string,
    nom?: string,
    image?: CMS_API_ImageObject,
    lien?: [],
}

type CMS_API_domaines_activite = {
    "domaines"?: { "titre": string, "description": string }[],
    "image"?: CMS_API_ImageObject,
    /*     "id": string */
}


type CMS_API_hero = {
    titre?: string,
    texte?: string,
}


type CMS_API_Article = {
    // title: string
    accroche?: string,
    main_title?: string
    date?: string
    resume?: string
    contenu?: string | any[]
    slug?: string
    files?: {
        id: string
        uuid?: string
        url: string
        filename: string
        name?: string
    }[]
}

type CMS_API_Footer = {
    adresse?: string
    acces?: string
    contact?: string
    accueil?: string
}

type CMS_API_membre = {
    nom?: string
    email?: string
}

type CMS_API_team = {
    profils_list?: CMS_API_profil[];
}

type CMS_API_profil = {
  title?: string;
  email?: string;
  description?: string;
  photo?: CMS_API_ImageObject;
}



type CMS_API_contact = {
    intro?: string
    etude_nom?: string
    etude_email?: string
    etude_tel?: string
    adresse?: string
    membres?: CMS_API_membre[] // ou { nom: string, email: string }[]
    image?: CMS_API_ImageObject
}

type CMS_API_PhotoEquipe = CMS_API_ImageObject

