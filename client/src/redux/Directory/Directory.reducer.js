const INITIAL_STATE = {
  sections: [
    {
      title: 'Décorations',
      imageUrl: 'https://i.ibb.co/BctKpjx/Noe-Bouture-Bonne-Aventure-300x.jpg',
      id: 1,
      linkUrl: 'shop/decorations',
    },
    {
      title: 'Accessoires',
      imageUrl: 'https://i.ibb.co/q7svZFb/177987955-327839705437572-9068159808614320470-n.jpg',
      id: 2,
      linkUrl: 'shop/accessoires',
    },
    {
      title: 'Papeterie',
      imageUrl: 'https://i.ibb.co/R3cYjCW/image-processing20200510-14182-1jd1xnz.jpg',
      id: 3,
      linkUrl: 'shop/papeterie',
    },
    {
      title: 'Plantounes',
      imageUrl: 'https://i.ibb.co/HHWLR7P/175763671-1423473507991290-1370698949798168802-n.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/plantounes',
    },
    {
      title: 'Boutures',
      imageUrl: 'https://i.ibb.co/P6zFVsn/bouture-photocredit-Caroline-noebouture4-2048x2048.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/boutures',
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;