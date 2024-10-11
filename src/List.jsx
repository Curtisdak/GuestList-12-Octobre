 const allGuest = [
  { id: 1, name: "Richard Dakouri Serikpa", tableNumber: 1 },
  { id: 2, name: "Aya Florence Serikpa", tableNumber: 1 },
  { id: 3, name: "Daniel Pelage", tableNumber: 1 },
  { id: 4, name: "Eliane Pelage", tableNumber: 1 },
  { id: 5, name: "Dany", tableNumber: 1 },
  { id: 6, name: "Naomie", tableNumber: 1 },

  { id: 7, name: "Franck", tableNumber: 2 },
  { id: 8, name: "Melene", tableNumber: 2 },
  { id: 9, name: "Thomas", tableNumber: 2 },
  { id: 10, name: "Bino", tableNumber: 2 },
  { id: 11, name: "Wilfried Tokpa", tableNumber: 2 },
  { id: 12, name: "Aicha amie de Madame Yeo", tableNumber: 2 },

  { id: 13, name: "Keljane Waya", tableNumber: 3 },
  { id: 14, name: "Eliot Valefakaaga", tableNumber: 3 },
  { id: 15, name: "Christiana Fiaavaui", tableNumber: 3 },
  { id: 16, name: "Pablo Lalié", tableNumber: 3 },
  { id: 17, name: "Tutana Ihmanang", tableNumber: 3 },
  { id: 18, name: "Hmana Wawalaha", tableNumber: 3 },

  { id: 19, name: "Robert Wienie Xowie", tableNumber: 4 },
  { id: 20, name: "Samuel Hnepeune", tableNumber: 4 },
  { id: 21, name: "Anita Sobler", tableNumber: 4 },
  { id: 22, name: "Michel Schneider", tableNumber: 4 },
  { id: 23, name: "Marie France Marie Angélique", tableNumber: 4 },
  { id: 24, name: "Awa Stalone", tableNumber: 4 },

  { id: 25, name: "Axelle Cognet", tableNumber: 5 },
  { id: 26, name: "Maëlys Rouzaud", tableNumber: 5 },
  { id: 27, name: "Fatouma Aguid", tableNumber: 5 },
  { id: 28, name: "Lenaïg Lepabic-Blin", tableNumber: 5 },
  { id: 29, name: "Vaïmiti Mai", tableNumber: 5 },
  { id: 30, name: "Dan (Vaimiti Mai)", tableNumber: 5 },

  // Continue for the rest of the guests

  // Table 6
  { id: 31, name: "Tantine Nicole", tableNumber: 6 },
  { id: 32, name: "Tonton Patrick", tableNumber: 6 },
  { id: 33, name: "Tantine Jeanne", tableNumber: 6 },
  { id: 34, name: "Tantine Nini", tableNumber: 6 },
  { id: 35, name: "Daphnée", tableNumber: 6 },
  { id: 36, name: "Wacapo", tableNumber: 6 },

  // Table 7
  { id: 37, name: "Tata José", tableNumber: 7 },
  { id: 38, name: "Emmanuel", tableNumber: 7 },
  { id: 39, name: "Melvine", tableNumber: 7 },
  { id: 40, name: "Femme Melvine", tableNumber: 7 },
  { id: 41, name: "Paul ROA", tableNumber: 7 },
  { id: 42, name: "Femme Paul ROA", tableNumber: 7 },

  // Table 8
  { id: 43, name: "Gervais", tableNumber: 8 },
  { id: 44, name: "Anthony", tableNumber: 8 },
  { id: 45, name: "Delphine", tableNumber: 8 },
  { id: 46, name: "Noah", tableNumber: 8 },
  { id: 47, name: "Dan Dakouri", tableNumber: 8 },
  { id: 48, name: "Israël Dakouri", tableNumber: 8 },

  // Table 9
  { id: 49, name: "Pasta Christian Kodja", tableNumber: 9 },
  { id: 50, name: "Carla Kodja", tableNumber: 9 },
  { id: 51, name: "PlaceVide", tableNumber: 9 },
  { id: 52, name: "PlaceVide", tableNumber: 9 },
  { id: 53, name: "Libérien Amie du vieux ?", tableNumber: 9 },
  { id: 54, name: "Pasteur Jojo", tableNumber: 9 },

  // Table 10
  { id: 55, name: "Odile Kuane", tableNumber: 10 },
  { id: 56, name: "Ludo", tableNumber: 10 },
  { id: 57, name: "Vanessa Kuane", tableNumber: 10 },
  { id: 58, name: "Isalyne Gorodja", tableNumber: 10 },
  { id: 59, name: "Gaëtan Waiwe", tableNumber: 10 },
  { id: 60, name: "Irène", tableNumber: 10 },

  // Table 11
  { id: 61, name: "Rayan Ajapunhya", tableNumber: 11 },
  { id: 62, name: "Ambre", tableNumber: 11 },
  { id: 63, name: "Jean-Paul Halune", tableNumber: 11 },
  { id: 64, name: "Femme Jean-Paul Halune", tableNumber: 11 },
  { id: 65, name: "Juan", tableNumber: 11 },
  { id: 66, name: "Tanous", tableNumber: 11 },
  { id: 67, name: "PlaceVide", tableNumber: 11 },

  // Table 12
  { id: 68, name: "Emilie", tableNumber: 12 },
  { id: 69, name: "Yoldie", tableNumber: 12 },
  { id: 70, name: "Glaury", tableNumber: 12 },
  { id: 71, name: "Juanella", tableNumber: 12 },
  { id: 72, name: "Ruilande", tableNumber: 12 },
  { id: 73, name: "Reza", tableNumber: 12 },

  // Table 13
  { id: 74, name: "Claude TAPIE", tableNumber: 13 },
  { id: 75, name: "Femme TAPIE", tableNumber: 13 },
  { id: 76, name: "Abenin", tableNumber: 13 },
  { id: 77, name: "Femme Abenin", tableNumber: 13 },
  { id: 78, name: "Tonton Narcisse", tableNumber: 13 },
  { id: 79, name: "Angela Yanke", tableNumber: 13 },

  // Table 14
  { id: 80, name: "Pasteur Paul", tableNumber: 14 },
  { id: 81, name: "Femme de Pasteur Paul", tableNumber: 14 },
  { id: 82, name: "Pasteur Makembe", tableNumber: 14 },
  { id: 83, name: "Femme de Pasteur Makembe", tableNumber: 14 },
  { id: 84, name: "PlaceVide", tableNumber: 14 },
  { id: 85, name: "Collègue Maman Curtis", tableNumber: 14 },

  // Table 15 (3 guests)
  { id: 86, name: "Collègue Maman Curtis", tableNumber: 15 },
  { id: 87, name: "Kanga Désiré", tableNumber: 15 },
  { id: 88, name: "Désiré Sawa", tableNumber: 15 },
  { id: 88, name: "PlaceVide", tableNumber: 15 },
  { id: 88, name: "PlaceVide", tableNumber: 15 },

  // Table 16 (4 guests)
  { id: 89, name: "Jean-Pierre Xowie", tableNumber: 16 },
  { id: 90, name: "Soeur de JP Xowie", tableNumber: 16 },
  { id: 91, name: "Laura", tableNumber: 16 },
  { id: 92, name: "Mackenson", tableNumber: 16 },

 // Table 17 (6 guests)
{ id: 89, name: "chantre 01", tableNumber: 17 },
{ id: 90, name: "chantre 02", tableNumber: 17 },
{ id: 91, name: "chantre 03", tableNumber: 17 },
{ id: 92, name: "chantre 04", tableNumber: 17 },
{ id: 91, name: "chantre 05", tableNumber: 17 },
{ id: 92, name: "chantre 06", tableNumber: 17 },

 // Table 18 (6 guests)
{ id: 89, name: "chantr 07", tableNumber: 18 },
{ id: 90, name: "chantre 08", tableNumber: 18 },
{ id: 91, name: "PlaceVide", tableNumber: 18 },
{ id: 92, name: "PlaceVide", tableNumber: 18 },
{ id: 91, name: "PlaceVide", tableNumber: 18 },
{ id: 92, name: "PlaceVide", tableNumber: 18 },
];
export default allGuest