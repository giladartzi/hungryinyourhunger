const MOCK = {
    '/businessEntities': [
        {
            id: 0,
            name: 'גריל עוף',
            categories: ['אוכל ביתי', 'בשר'],
            isActive: true,
            coordinates: {
                lat: 32.087565,
                lon: 34.814887
            },
            deals: 'סלט נוסף ומרק קטן בקניית ארוחה',
            address: 'הרצל 86, ר״ג',
            phone: '03-6725860',
            openingHours: 'א׳-ה׳: 11:00-17:00\nו׳: 9:00-14:00',
            isVegetarianOptions: true,
            isVeganFriendly: false,
            isKosher: true,
            itemBackgroundURI: 'https://wallpaperscraft.com/image/dark_background_line_surface_65896_602x339.jpg'
        }, {
            id: 1,
            name: 'פושון',
            categories: ['קונדיטוריה', 'קינוחים', 'בית קפה'],
            isActive: true,
            coordinates: {
                lat: 32.071399,
                lon: 34.786576
            },
            deals: 'חתיכת הנחה שלא מהעולם הזה!!1',
            address: 'שרונה מרקט, ת״א',
            phone: '03-7501555',
            openingHours: 'א׳-ש׳: 8:00-0:00',
            isVegetarianOptions: true,
            isVeganFriendly: true,
            isKosher: false,
            itemBackgroundURI: 'https://wallpaperscraft.com/image/dark_background_line_surface_65896_602x339.jpg'
        }
    ]
};

export default function request(path) {
    if (MOCK[path]) {
        return new Promise(resolve => resolve(MOCK[path]));
    }

    return fetch(path).then(response => response.json());
}